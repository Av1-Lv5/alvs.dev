import { z } from "astro:content";

export default {
	title: z.string(),
	author: z.string(),
	cover: z.string(),
	tags: z.array(z.string()),
	thoughts: z.string(),
};