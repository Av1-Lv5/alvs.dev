import { defineCollection, z } from "astro:content";
import projectSchema from "./projectSchema";
import noteSchema from "./noteSchema";

const projectsCollection = defineCollection({
	type: "content",
	schema: z.object(projectSchema),
});
const notesCollection = defineCollection({
	type: "content",
	schema: z.object(noteSchema),
});

export const collections = {
	projects: projectsCollection,
	notes: notesCollection,
};
