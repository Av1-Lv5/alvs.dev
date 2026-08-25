---
title: "Performance is a choice"
tags: ["performance", "web", "software"]
description: "Why respecting user resources should be treated as an engineering decision, not a late optimization."
publishedAt: "2026-08-25"
draft: false
---

Building apps that hog resources for simple tasks is a choice, not a necessity.

Somewhere along the way, we started treating CPU, memory, battery, bandwidth, and the user's patience as an infinite budget. If the app works on a recent laptop with a fast connection, the job is considered done. The phone that gets hot while opening a settings page, the laptop fan that starts running during a text edit, and the user on a slower connection are treated as edge cases.

They are not edge cases. They are the people using the software.

An app can be technically correct and still be poor software. It can load eventually, respond eventually, and perform the task eventually while doing far more work than the task requires. "It works" is a useful baseline, but it is not the finish line.

I sometimes wish companies would bring back a scarcity mindset. When devices had less memory, weaker processors, and smaller batteries, developers had to be deliberate about what they allocated, what stayed alive, and how much work the device had to do. Constraints forced better questions. We do not think about memory that way as often now because modern machines are powerful enough to hide the waste.

But computers becoming more capable did not make waste free. It just made the bill easier to ignore. The user still pays for it through slower startup, a hotter laptop, a shorter battery life, and less memory left for everything else they are doing.

This does not mean every bundle needs to be tiny or every interface needs to avoid JavaScript. It means the cost of an implementation should have a reason. Ask what work is necessary, when it needs to happen, how often it needs to happen, and who pays for it.

The same thinking applies to ordinary interfaces. Do not fetch data that is already available. Do not rerender a whole page for a small change. Do not ship a library for a problem a few lines of browser code can solve. Do not add an animation just because the tool makes it easy. Simplicity is often the fastest implementation, not just the easiest one to explain.

Developer convenience is part of the tradeoff too. Electron, Electrobun, and Zero Native can make desktop applications easier to build and ship, but a user may still be asked to load an entire browser engine or runtime to edit text or perform another simple task. That can be a reasonable decision, but it should be treated as a cost, not as if the cost does not exist. The tools are good for developers. They are not automatically good for the people running the software.

Performance is not a polish pass to schedule after the real work. It is part of deciding what the real work is. Every unnecessary request, computation, listener, dependency, and layout has a cost, even if that cost is invisible on the developer's machine.

Fast software feels considerate. It starts when asked, gets out of the way when finished, and leaves enough of the user's device for everything else they need to do. That should not be an exceptional quality. It should be the default we choose.
