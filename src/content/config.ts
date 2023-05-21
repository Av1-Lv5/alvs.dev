import { defineCollection, z } from "astro:content";
import projectSchema from "./projectSchema";

const projectsCollection = defineCollection({
	type: "content",
	schema: z.object(projectSchema),
});
});

export const collections = {
	projects: projectsCollection,
};
