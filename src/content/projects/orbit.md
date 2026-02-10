---
id: orbit
title: Orbit
description: A daily budget app built with Next.js and Supabase.
tags: ["next", "typescript", "supabase"]
repoId: ""
liveAt: "www.orbitbudget.com"
isDraft: false
featured: true
---

![Project preview](/assets/img/orbit-thumb.png)

### The Mission

Solving financial anxiety through a zero-friction, daily spending limit. No bank connections, no complex categories—just a clear answer to "Can I spend this today?"

### The Problem

Most budgeting apps are data-entry black holes. They require bank syncs that break, categorization that feels like a chore, and they focus on the future (monthly budgets) rather than the immediate present (daily decisions). This friction leads to abandonment and "finance fatigue."

### The Solution: A Daily "Safe-to-Spend"

Orbit flips the script. It focuses on a single, dynamic number: your daily allowance. By aggregating fixed expenses and goals, it tells you exactly what you can spend today without sabotaging tomorrow.

- **Frictionless Entry**: Optimized for 5-second expense logging.
- **Privacy First**: No bank data, no ads, no trackers.
- **Dynamic Recalculation**: If you overspend today, your future's daily limit adjusts instantly to keep you on track.

### Engineering Insights & Learnings

Building Orbit was a deep dive into **state management** and **product reasoning**.

- **State Hybridization**: I utilized **Zustand** for transient UI state (modals, local filters) and **TanStack Query** for persistent server state. This separation of concerns made the app significantly more predictable.
- **Custom Auth Patterns**: Instead of using Clerk's pre-built UIs, I implemented custom auth flows using their SDK to have full control over the user experience and branding.
- **Logic over CRUD**: The core of the app isn't just saving data; it's the calculation engine that handles overspending, carries totals forward, and adjusts for varying month lengths.

### Technical Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Database/Auth**: Supabase + Clerk
- **Styling**: Tailwind CSS + Shadcn UI

### Future Roadmap

- [ ] Native Android and iOS apps for even faster logging.
- [ ] Data portability (CSV/PDF exports).
- [ ] Shared budgets for partners.
