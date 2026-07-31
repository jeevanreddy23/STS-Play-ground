---
title: Reverse prompting
type: method
tags: [ai, workflow, capture]
aliases: [reverse prompt, interview capture]
updated: 2026-07-29
---

# Reverse prompting

Instead of writing a prompt, hand over context and let the agent ask what else it
needs. The useful form is a single question:

> Based on what you know about me and my goals, what more could I give you so you
> can help faster and take more off my plate?

Then: *what can you do right now that moves us toward that?*

## Why it works

Not because the model knows things you don't. It works because the model can see
the shape of the gap in what you've given it, and asking forces you to articulate
things you'd otherwise leave tacit. Most bad AI output traces to missing context
rather than weak reasoning, and this closes that gap faster than you guessing what
to include.

## Where it does not

The model cannot ask about a domain it has no purchase on, so in narrow technical
work you still have to seed it. And questions cost your attention — a long
interview that produces a note you could have written in two minutes is a net
loss. Keep interviews short and aimed at knowledge that is genuinely in your head
and nowhere else.

## How it is used here

The Capture mode in the [[Index|second brain]] viewer is this idea made concrete:
pick a note type and it interviews you, then emits a vault-ready Markdown note
with frontmatter, tags and wikilinks. The questions are a fixed bank rather than
an LLM, so it works offline and produces the same structure every time. A live
model asking follow-ups would need an API key and a backend, which the static
worker does not have.

## Related

- [[Template - site inspection note]]
