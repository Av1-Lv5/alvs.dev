---
id: orbit
title: Orbit
description: A daily budget app built with Next.js and Supabase.
tags: ["next", "typescript", "supabase"]
repoId: ""
liveAt: "orbitbudget.com"
isDraft: false
featured: true
---

![Project preview](/assets/img/orbit-thumb.png)

### Overview

Orbit is a daily budget tracker. Instead of complex categories and flaky bank connections, it gives you a simple daily safe-to-spend limit.

You know exactly how much you can spend today without overthinking the future.

### Learnings

This project started with a real problem I actually cared about, which made everything that followed feel grounded. Going from “this is annoying” to “this actually works” was the most satisfying part.

I had to think through the product, the edge cases, and the UX while building everything end to end. A lot of decisions felt messy while making them, but clearer once the system started taking shape.

Overall, this felt less like just shipping features and more like learning how to reason through a product from idea to implementation. Loved building this.


### Key Features

- **Daily Safe-to-Spend Limit**  
  Automatically calculates what you can safely spend today based on your budget and the remaining days. Save today, get more for tomorrow.

- **Zero Setup**  
  No bank connections to break. No complex categories to configure. Just set a budget and start tracking.

- **Quick Entry**  
  A focused interface that lets you log expenses in seconds. Less friction, more consistency.

- **Strictly Private**  
  No ads. No selling data.

### Technical Architecture

Next.js, Tailwind CSS, shadcn/ui, TypeScript not very interesting stuff here since this has been my core stack for a while now.

That said, this was the first project where I didn’t rely only on Clerk’s pre-built components. I built custom auth flows using the SDK.

Midway through, it honestly felt like a step back. Too many things to think about, too many edge cases. But after spending time with it, things started to click. A lot of it felt like basic common sense in hindsight, which made it even more interesting.

Also used Zustand + TanStack Query — one for UI state, one for server state. This project really helped me get a clear understanding of the difference and where each type of state should live.

### Future Roadmap

- Build Android and iOS apps  
- Export data as CSV or PDF  
- Add your partner to a budget
