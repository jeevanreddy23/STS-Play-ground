# STS Second Brain

An Obsidian vault. Open this folder directly in Obsidian (Open folder as vault)
— notes use standard `[[wikilinks]]`, YAML frontmatter and `#tags`, so nothing
here depends on the web viewer.

The same vault is published read-only at `/brain/` on the playground worker.
That viewer reads `cloudflare_site/brain/vault.json`, which is generated from
these files:

```bash
node scripts/build-vault-index.mjs
```

Run it after editing notes, then redeploy. The Markdown is the single source of
truth; the JSON is a build artifact.

## Conventions

- One idea per note. If a note needs two headings that could each stand alone,
  split it.
- Link generously. A note nobody links to is a note nobody will find again.
- `type:` in frontmatter is one of `moc`, `standard`, `material`, `method`,
  `decision`, `template`.
- **Standards are summarised, never reproduced.** Clause numbers are recorded so
  you can find the passage; the wording stays in the standard. Anything on site
  gets checked against the actual document.
- Numbers that came from a project carry the project and report number inline,
  so a figure can always be traced back.

## Structure

```
standards/   what a standard requires, in our words, with clause pointers
materials/   soil and rock descriptions as we log them
methods/     field and office procedures
decisions/   why the tooling works the way it does
templates/   note skeletons
```
