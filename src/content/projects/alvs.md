---
id: "personal-site"
title: "alvs.dev"
description: "A minimalist digital garden and portfolio."
tags: ["astro"]
repoId: "personal-site-archive"
isDraft: false
featured: false
---

### The Philosophy

The site uses a classless stylesheet as a foundation to ensure semantic HTML looks good by default, layered with custom scoped styles only when specific structural patterns are needed.

### Design Decisions: The Classless Journey

The decision to start with a **classless stylesheet** was about reducing the mental overhead of styling basic elements (like headings, lists, and links). It forces a focus on semantic HTML and content hierarchy.

My journey into this approach began with discovering **Simple.css**—not as a heavy framework, but as an introduction to the concept that a pure stylesheet can create a functional, readable site with zero classes.

However, I don't use it exclusively. While the classless base handles the "look" of individual elements, I utilize **Astro's scoped styles** to build intentional layout structures—like the recursive "Split-Column" pattern—without polluting a global stylesheet.

### Technical Architecture: Why Astro?

The site is a purely static entity. I chose **Astro** for its "zero-friction" content delivery and its ability to keep styles isolated where they belong.

- **Styling**: A custom, lightweight classless stylesheet acts as the foundation. Specific layout grids and component-level refinements are handled via scoped CSS within Astro components.
- **Content**: Pure Markdown/MDX. No external CMS. Everything is version-controlled and portable.
- **Performance**: Zero client-side JavaScript by default, resulting in instant load times and perfect SEO scores.

### The Evolution (Archives)

1. **The Hardcoded Start**: A single-page HTML monolith.
2. **The Gulp Era (2022)**: Using Pug templating and Gulp for source management.
3. **The Classless Introduction**: Discovering pure stylesheets (Simple.css) and adopting a minimal-first mindset.
4. **The Custom Standard (2025)**: Developing the current hybrid approach of classless base styles combined with custom scoped structures.

### Future Roadmap

- Integration of a dedicated Blog for technical deep-dives.
- Interactive "Knowledge Graph" for public notes.
- Advanced typography experimentation.
