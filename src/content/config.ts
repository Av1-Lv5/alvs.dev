import { defineCollection, z } from "astro:content";

const projectDetails = defineCollection({
	schema: z.object({
		id: z.string(),
		title: z.string(),
		description: z.string(),
		tags: z
			.array(
				z
					.literal("typescript")
					.or(z.literal("javascript"))
					.or(z.literal("react"))
					.or(z.literal("preact"))
					.or(z.literal("astro"))
			)
			.max(4),
		repoId: z.string().optional(),
		liveAt: z.string().optional(),
		isDraft: z.boolean().optional(),
	}),
});

export const collections = {
	projectDetails,
};
