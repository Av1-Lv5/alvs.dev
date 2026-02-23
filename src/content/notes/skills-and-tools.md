---
title: "Skills I've picked in my journey as Developer"
tags: [""]
draft: false
---

_A detailed and exhaustive list of skills I have and tools I use, told as a journey that began back in 2021_

### The basics

- As I wanted to be a Frontend Web developer, **HTML**, **CSS**, and **Javascript** became mandatory to learn.
- I picked up **Git** basics, no branching, simple commits. Of course later in time had to learn the branching strategies.
- I picked up to follow **[conventional commits spec &#x2197;](https://www.conventionalcommits.org/)** after committing lots of bad commit messages.
- **Prettier** and **ESLint** are extensions on my VS code, whose configs were never touched.
- Wanted a way to have reusable html, understood that a templating language is what I need and chose pug, and to run local dev server that bundles and serves pug files into html, used gulp as a task runner using browserSync.
- For package management, I switched to **PNPM** (as its disk efficient), since my macbook is base variant, and yes, storage is an issue.

### Graduating to web apps

- When I started building a little complex apps with more moving parts I understand the need for **Typescript** and **React**, though I badly wanted to pick the new hot thing then Svelte (React has more professional opportunities soo..)
- I chose **Vite** because i need not to learn a new tool when i switch to svelte, and vite worked well never had a need to touch create-react-app.
- Never liked the effort to benefits ratio of scss, css-in-js, but tailwind felt easy to pick up and felt the instant improvement on DX.

### Urge to showcase talent

- Building apps is one thing, shipping them is another. I used **Netlify** for most of my projects and **Vercel** for some, honestly netlify feels like home even today.
- I moved to meta-frameworks like **Next js** as SPA's aren't perfect for marketing sites, and most of my work is around marketing sites.
- Tried **Astro js** as its core aspects like framework agnostic, static first, and the DX aligns with my preferences, this very site is built using astro, there is no looking back since.
- I came across radix-ui and while fascinately learning it, made an obvious choice in component library **Shadcn UI**.
- Shadcn introduced me to some incredible libraries, that's how I learnt about **React Hook Form**, **Zod**, and Recharts.
- When I implemented an infinite scroll pagination using react query, I was sold. Seeing the lines of code that got vanished, and became fan of Tanner Linsley's work.

### Towards full-stack with service integrations

- I loved the Headless CMS experience with **Sanity**.
- Any freelance gig that requires a simple database setup, was a bottleneck until I learnt **Supabase**, chose it over Firebase for being postgres based, and no vendor-lock in aligns well with me.
- **Clerk** became my goto for user management (ofcourse, for its generous free tier).

### My time at a startup

- We handle lot of user submitted images, and is handled by **Cloudinary** for image transformations, so had to learn it, and while building a CMS for our internal gis data, chose **Cloudflare R2** to store static files.
- Learnt **Razorpay** standard checkout for payments, as it is best if you want to track dropouts or failures and had to learn **Typesense** as it is used in our codebase for search needs.
- For our analytics needs we have **Mixpanel**, google analytics and clarity. I have a good share of my time playing with all these. Not gonna lie, playing with data is fun.
- Most of my work revolves around our interactive map, and hence got very familiar with **Mapbox** and **Google Maps JS API**.
- This journey exposed me to the world of GIS, handling KML, KMZ, and GeoJSON data, and mastering the nuances of vector and raster tiles.

_All these learnings, thanks to my manager who researches and chooses the best of tools, which helped me to have great additions to my existing tool chain_

### Filling the gaps of a real product builder, the uncommons

- Used **Postman** for API testing for a long time. And i want to stress by postman i don't mean I know how to do a http request using postman, I know the features it offers, love collections, used env variables, documentations
- Added **Motion** (formerly Framer Motion) for minor animations, thought of picking up gsap but framer is simpler to start off with.
- When I first learned that html emails are not the html you write on web, the nuances and email clients support are a hell you dont want to rot in. **React Email** for the save, and the same company built **Resend**, cool tools great DX, haven't got a project to have these in a production app.
- I was interested in **Bash scripting** but never utilised and weren't that skilled at it but with AI emergence, I have automated quite a few manual tasks just by prompting for a bash script.

### And this is where I am now

- I'm constantly exploring. Learned **Payload CMS** + **MongoDb** for a code-first CMS and **PostHog** for all-in-one tool for all product needs, i cant give it a one liner, just check it out.
- Switched to **Biome** with **ultracite** to replace eslint and prettier.
- After a good time with postman, switching to **Bruno**.

### The Workshop

- **Antigravity** is my primary code editor. every now and then switches back to cursor. I've tried **Zed**, **Windsurf**, and **Kiro**, they didn't grew into me, might spin them up sometime later for a refresh.
- Loved using claude code for so long, now codex is luring me in.
- For design/wireframing, I use **Figma** and **Excalidraw** (or **Mermaid** when in dev logic mode).
- **Operating Systems**: I am efficient on Mac and Linux. My Linux distro journey: **Ubuntu** -> **Linux Mint** -> **Garuda Linux** -> **Fedora**.
