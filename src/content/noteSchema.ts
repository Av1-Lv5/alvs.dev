import { z } from "astro:content";

export default {
	title: z.string(),
	slug: z.string(),
	tags: z.array(z.string()),
};
