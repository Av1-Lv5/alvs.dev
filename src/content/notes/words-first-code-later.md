---
title: "Words are the first draft of the code"
tags: ["process", "writing", "ai"]
publishedAt: "2026-08-03"
draft: false
---

_A folder of markdown next to the code, where the thinking happens before the code does._

Next to the code for Orbit, my budgeting app, there is a folder with markdown files. It has more words in it than some of the source files have lines. Decisions, feature specs, a competitor teardown, an audit tracker, a few documents that are really just me arguing with myself. A lot of the thinking ends up there before it ends up in code.

I didn't plan this folder. It grew because I kept hitting the same wall: I'd make a hard call on a Tuesday, and a month later I could remember the choice but not the reasoning behind it. So I'd re-open the question, re-argue it, and land in the same place, having spent an evening re-deriving something I already knew. I build Orbit solo, so there's no teammate holding that context for me, the files stand in for the colleague I'd otherwise turn to and ask why we did it this way. Writing it down once was cheaper.

Then a second thing happened. I started building with an AI in the loop, and the quality of what it produced was capped by the quality of what I could articulate. A vague prompt got vague code. The same documents that were saving me from myself turned out to be the best possible context to hand a model. The folder has two readers now: a future version of me, and whatever LLM I'm pairing with that day. Both need the reasoning, not just the result.

## A log of the decisions that took thought

The most important file is `decisions.md`, a running log of the calls that took real thought. The format is deliberate:

- **Decision**: what I chose
- **Context**: the situation that forced it
- **Rejected**: the alternatives, and why not
- **Status**: Active, Superseded, or Revisit-if

The `Rejected` section is the part I lean on most. Writing down what I chose is easy; what I lose track of is what I decided _against_, and why the tempting alternative didn't win.

An example. Users overspend, and the obvious request is "let me just add a bit more to my budget this month." Every budgeting app has a top-up button. I don't, and the entry says why: if you can bump the number whenever you exceed it, the number stops meaning anything. It becomes a thing you adjust to feel okay rather than a constraint that changes your behavior. That entry has saved me from re-litigating top-ups at least three times, because the reasoning is sitting there with the alternatives already knocked down.

The rule I hold myself to: if a decision is later reversed, I don't delete it. I mark it `Superseded` and write a new entry pointing back. The trail is the point. Deleting the old reasoning throws away the record of why I used to think differently.

## Features start as words, not as tickets

An idea doesn't go straight into code. It moves through three stages, each a different file at a higher resolution than the last.

**Words first.** `ideas.md` is loose, plain-English sketches. "If a user has a goal, buy something next month for X, show them how much to save today." No schema, no components. Just the shape of the thing in a couple of sentences. Most ideas die here, which is what this stage is for. Over time it becomes a catch-all for every product idea I have.

**Then a proposal.** When an idea turns out to be worth pursuing, it graduates to a doc in `features/proposed`. This is where the arguing happens. The goals doc is where I worked out that a goal is a wish funded entirely by redirected underspend, never a deposit and never linked to income. That sounds like a small distinction until you notice the tempting version, a balance you top up, turns a budgeting app into a savings account, which is a different product.

**Then a task.** Only when the what and the why are settled does it become a file in `tasks/`. If there are still open product questions, it isn't a task yet, it's still a proposal. And task files get deleted the moment the work is done. They're scaffolding, not history. The history lives in the decision log and in `features/` itself: once a feature ships, its doc graduates out of `features/proposed` into the living record of how that feature actually works, the files involved, the flow, the conditions, the architecture around it.

Commitment goes up at each step. A sketch costs nothing, a proposal costs an argument, a task is a commitment to build. I don't want to discover an unresolved product question halfway through writing code, so I try to resolve it on the page first.

## An issue tracker that is also a document

Every so often I run a wide audit, code and security and reliability, and the findings go into `codebase-improvement-tracker.md`. It reads like a bug tracker: each finding has a status (`NOT STARTED`, `IN PROGRESS`, `FIXED`, `WONT FIX`), a severity, the exact files, the fix, and crucially an acceptance-criteria line. Not "fix the RLS policy" but "two-user tests reject cross-user inserts for expenses and limit history." When a finding doesn't have a testable definition of done, I've noticed it tends to just sit there instead of getting fixed.

`WONT FIX` is a real status, not a failure. If I consciously accept a risk, I write down why, so the next audit doesn't re-flag it as new.

## I tell the AI how to work with me

There's a `modes/` folder. Telling an AI how to work with you isn't new, most tools have some version of it now, a rules file or a system prompt you set once. Mine are collaboration contracts I can invoke by name instead of re-explaining my preferences every session.

Pair mode says: write code, but narrate every significant decision before committing to it, make small moves, one function at a time, surface assumptions immediately. There's a teach mode and a guide mode for when I want to learn the thing myself rather than have it done for me. This is a learning project as much as a shipping one, so "do it for me" isn't always what I want, and being able to say "guide mode" and have the assistant know exactly what that means is worth the file it's written in.

## Teardowns of the apps nearest mine

`competitor-analysis/` is a folder of long, honest teardowns of the apps closest to mine. Not marketing documents. They exist to sharpen my own decisions by forcing me to state, precisely, where I differ and why.

The best example is a single line in the analysis of the closest competitor. Their unspent budget rolls over to tomorrow specifically, so underspending today gives you a bigger number tomorrow. Mine redistributes the remaining balance evenly across all remaining days in the cycle. It's a subtle mechanical difference, and writing their version down is what made mine legible to me: I want the daily number to stay _stable_, not balloon after a frugal day. I couldn't articulate what made mine different until I'd written down, in detail, what it was different _from_.

## Why words, and why it holds

The through-line is that I do my thinking on the page, in sentences, before I do it in code. Three reasons it keeps paying off.

Writing forces the decision. It's easy to hold a fuzzy intention in your head and believe it's a plan. The moment you have to write "here's what I chose and here's the alternative I rejected and why," the fuzzy bits stop hiding. Half my decision entries changed shape in the act of being written, because writing the rejected alternative down honestly revealed it wasn't actually worse.

You can't delegate what you can't articulate. I didn't really notice this until I started building with an AI: the clearer my intent on the page, the better the result, and a half-formed intent got half-formed work back. Every hour spent making the reasoning legible for a future me turned out to be an hour spent making it legible for the assistant too.

And memory is cheaper than re-derivation. The single question this whole folder answers is "why didn't we just do X?" Answering it once, in writing, next to the code, has probably saved me more time than anything else on this project. The code is downstream of the reasoning. I'd rather keep the reasoning than keep re-earning it.

None of this is a system, and I wouldn't hand it to anyone as one. It's just a folder of markdown that grew because writing things down kept being worth it. If you're building with an AI in the loop, the thing that helped me most wasn't a better prompt, it was having a document for the prompt to read from.
