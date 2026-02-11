import { defineConfig } from "astro/config";
import rehypeExternalLinks from "rehype-external-links";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  prefetch: {
    defaultStrategy: "hover"
  },
  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: "_blank",
          rel: ["noopener", "noreferrer"],
        },
      ],
    ],
  },
  integrations: [icon()],
  site: "https://alvs.dev",
});
