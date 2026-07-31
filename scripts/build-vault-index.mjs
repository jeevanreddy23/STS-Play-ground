#!/usr/bin/env node
/**
 * Build the web viewer's index from the Obsidian vault.
 *
 * The Markdown files are the single source of truth. This walks them, parses
 * frontmatter, resolves [[wikilinks]] against note titles and aliases, and
 * emits one JSON file the static viewer fetches. Anything the viewer needs that
 * cannot be derived from the Markdown is a design mistake — the vault has to
 * keep working in Obsidian with no build step at all.
 *
 *   node scripts/build-vault-index.mjs
 */

import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises';
import { join, relative, extname } from 'node:path';

const VAULT = 'second-brain';
const OUT = 'cloudflare_site/brain/vault.json';

/** Minimal YAML frontmatter reader: scalars, and [a, b] / - a lists. */
function parseFrontmatter(raw) {
  if (!raw.startsWith('---')) return { data: {}, body: raw };
  const end = raw.indexOf('\n---', 3);
  if (end === -1) return { data: {}, body: raw };
  const block = raw.slice(3, end).trim();
  const body = raw.slice(end + 4).replace(/^\n/, '');
  const data = {};
  let key = null;
  for (const line of block.split('\n')) {
    if (/^\s*-\s+/.test(line) && key) {
      (data[key] = Array.isArray(data[key]) ? data[key] : []).push(
        line.replace(/^\s*-\s+/, '').trim(),
      );
      continue;
    }
    const m = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!m) continue;
    key = m[1];
    const v = m[2].trim();
    if (v === '') data[key] = [];
    else if (v.startsWith('[') && v.endsWith(']'))
      data[key] = v.slice(1, -1).split(',').map((s) => s.trim()).filter(Boolean);
    else data[key] = v.replace(/^["']|["']$/g, '');
  }
  return { data, body };
}

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else if (extname(entry.name) === '.md') out.push(full);
  }
  return out;
}

/**
 * Links written inside code are examples, not real edges — Obsidian does not
 * link them either, so counting them would put phantom edges in the graph.
 * Fenced blocks and inline backticks both have to go.
 */
function stripFences(body) {
  return body.replace(/```[\s\S]*?```/g, '').replace(/`[^`\n]*`/g, '');
}

function extractLinks(body) {
  const links = [];
  const re = /\[\[([^\]|#]+)(?:#[^\]|]+)?(?:\|([^\]]+))?\]\]/g;
  let m;
  while ((m = re.exec(body)) !== null) {
    links.push({ target: m[1].trim(), label: (m[2] ?? m[1]).trim() });
  }
  return links;
}

function extractInlineTags(body) {
  const tags = new Set();
  // Skip headings (#) by requiring a non-space, non-# char after the hash.
  const re = /(^|\s)#([a-z0-9][a-z0-9/_-]{1,40})\b/gi;
  let m;
  while ((m = re.exec(body)) !== null) tags.add(m[2].toLowerCase());
  return [...tags];
}

const files = (await walk(VAULT)).filter((f) => !f.endsWith('README.md'));
const notes = [];

for (const file of files) {
  const raw = await readFile(file, 'utf8');
  const { data, body } = parseFrontmatter(raw);
  const rel = relative(VAULT, file).replace(/\\/g, '/');
  const slug = rel.replace(/\.md$/, '');
  const title =
    data.title || (body.match(/^#\s+(.+)$/m)?.[1] ?? slug.split('/').pop());
  const clean = stripFences(body);

  notes.push({
    slug,
    path: rel,
    title,
    type: data.type ?? 'note',
    tags: [...new Set([...(data.tags ?? []), ...extractInlineTags(clean)])],
    aliases: data.aliases ?? [],
    updated: data.updated ?? null,
    body,
    links: extractLinks(clean),
    // Plain text for search: no frontmatter, no markup noise.
    text: body
      .replace(/```[\s\S]*?```/g, ' ')
      .replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, '$2$1')
      .replace(/[#*_>`|-]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim(),
  });
}

/** Title and alias lookup, case-insensitive, matching Obsidian's behaviour. */
const bySlug = new Map(notes.map((n) => [n.slug, n]));
const byName = new Map();
for (const n of notes) {
  byName.set(n.title.toLowerCase(), n.slug);
  for (const a of n.aliases) byName.set(String(a).toLowerCase(), n.slug);
  byName.set(n.slug.toLowerCase(), n.slug);
  byName.set(n.slug.split('/').pop().toLowerCase(), n.slug);
}

const edges = [];
const unresolved = [];
for (const n of notes) {
  n.resolved = [];
  for (const l of n.links) {
    const target = byName.get(l.target.toLowerCase());
    if (target && target !== n.slug) {
      n.resolved.push({ slug: target, label: l.label });
      edges.push({ from: n.slug, to: target });
    } else if (!target) {
      unresolved.push({ from: n.slug, target: l.target });
    }
  }
  n.resolved = n.resolved.filter(
    (v, i, a) => a.findIndex((x) => x.slug === v.slug) === i,
  );
}

// Backlinks: who points here. This is the half Obsidian users actually live in.
for (const n of notes) n.backlinks = [];
for (const e of edges) {
  const t = bySlug.get(e.to);
  if (t && !t.backlinks.includes(e.from)) t.backlinks.push(e.from);
}

const tagCounts = {};
for (const n of notes) for (const t of n.tags) tagCounts[t] = (tagCounts[t] ?? 0) + 1;

const index = {
  generated: null, // deliberately unset: a timestamp would churn the diff every build
  vault: VAULT,
  counts: {
    notes: notes.length,
    links: edges.length,
    tags: Object.keys(tagCounts).length,
    unresolved: unresolved.length,
  },
  tags: Object.entries(tagCounts)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([tag, count]) => ({ tag, count })),
  unresolved,
  notes: notes.map(({ links, ...rest }) => rest),
};

await mkdir('cloudflare_site/brain', { recursive: true });
await writeFile(OUT, JSON.stringify(index, null, 1));

console.log(
  `${index.counts.notes} notes, ${index.counts.links} links, ` +
    `${index.counts.tags} tags, ${index.counts.unresolved} unresolved -> ${OUT}`,
);
if (unresolved.length) {
  console.log('Unresolved links (these are broken in Obsidian too):');
  for (const u of unresolved) console.log(`  ${u.from} -> [[${u.target}]]`);
}
