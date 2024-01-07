import { z } from "astro:content";

export default {
	title: z.string(),
	tags: z.array(z.string()),
};
