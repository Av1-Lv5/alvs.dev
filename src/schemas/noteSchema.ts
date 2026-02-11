import { z } from "astro:content";

export default {
	title: z.string(),
	description: z.string().optional(),
	tags: z.array(z.string()),
};
