---
id: orbit
title: Orbit
description: Orbit answers one thing well, "What is today's safe-to-spend?"
tags: ["next", "typescript", "supabase"]
repoId: ""
liveAt: "orbitbudget.com"
isDraft: false
featured: true
---

![Project preview](/assets/img/orbit-thumb.png)

### The Problem

Most budgeting tools are concentrated on monthly budgeting, figuring out where money is going, at the end of month. You don't see impact of overspending instantly.

And the overhead of organisation hell, nuances of does X bank is supported for auto-sync.

### The solution

Orbit, stripped down to one action: enter an amount, add a note if you want. Your safe-to-spend drops instantly. Overspent? borrowed from tomorrow, your future budget adjusts automatically.

### Learnings

Building Orbit was a deep dive into **product reasoning**.

- **Custom Auth Patterns**: Instead of using Clerk's pre-built UIs, I implemented custom auth flows using their SDK, not just to have full control over the user experience and branding, but also to understand auth flows.
- **Logic over CRUD**: The core of the app isn't just saving and retrieving data, it's the calculation that handles overspending, carries totals forward, and adjusts for varying budget cycles.
- **Exploration of PWA** Project actually demands a mobile app but tried to come close by having a sticky notification of amount left for today, and a quick entry action.

### Technical sheet

- Built with Next.js, Typescript and Tailwind css
- Shadcn UI and Motion
- Auth handled by clerk, and managed postgres by supabase
- Deployed on Vercel

### Future Roadmap

- Data portability (CSV/PDF exports).
- Shared budgets for partners.
