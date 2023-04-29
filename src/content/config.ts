import { defineCollection, z } from "astro:content";

const projectDetails = defineCollection({
	schema: z.object({
		id: z.string(),
		title: z.string(),
		description: z.string(),
		tags: z.array(z.string()),
		repoId: z.string().optional(),
		liveAt: z.string().optional(),
		isDraft: z.boolean().optional(),
	}),
});

export const collections = {
	projectDetails,
};
