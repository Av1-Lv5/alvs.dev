---
id: "personal-site-archive"
title: "www.alvs.dev"
description: "My personal/portfolio website"
tags: ["astro"]
repoId: "personal-site-archive"
isDraft: false
featured: false
---

### Design decisions

I chose a classless CSS approach because it encourages semantic HTML and reduces the mental overhead of styling decisions. It forces cleaner, more meaningful markup while letting the content take center stage.

Sometimes I wonder, do I even like minimal design or am I just too lazy to create more custom. Probably a bit of both and surprisingly the combination has worked really well for this site.

### Technical architecture

The site is built as a purely static site powered by Astro with no complex build steps or runtime dependencies just simple, fast, static output. 

I chose Astro (starting with v1 when it was gaining momentum) and have loved the framework ever since. It perfectly fits my goal of zero-friction content delivery.

- Styling: No external CSS framework or heavy setup. Mostly classless CSS with only a handful of utility classes where needed. I started with simple.css until early 2025, then wrote my own lightweight classless stylesheet tailored to the site.
- Content: No external CMS. Everything is written in pure Markdown (or MDX where slight interactivity helps), keeping maintenance trivial.

### Future Roadmap

-   Like to have a blog, to write about my learnings, personal endeavours, critical decisions, software comparisions, and my niche interests in web development (workflows, setups, tools, etc.)

### Archives

1. My very first draft was just plain HTML + CSS, I hard-coded the entire site in a single page, but later decided to turn it into a structured multi-page site.
2. **[2022 jan - 2022 dec]** Used pug templating + gulp task runner for the ease of maintaining the source.
  -> source code [@github repo](https://github.com/Av1-Lv5/personal-site-archive/tree/main/0)
5. **[Until 2025 jan]** used [simple css](https://simplecss.org) a classless CSS foundation, later wrote my own custom classless stylesheet.