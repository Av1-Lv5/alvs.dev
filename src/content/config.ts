import { defineCollection, z } from "astro:content";
import projectSchema from "@schemas/projectSchema";
import noteSchema from "@schemas/noteSchema";
import bookSchema from "@schemas/bookSchema";

const projectsCollection = defineCollection({
	type: "content",
	schema: z.object(projectSchema),
});

const notesCollection = defineCollection({
	type: "content",
	schema: z.object(noteSchema),
});

const booksCollection = defineCollection({
	type: "content",
	schema: z.object(bookSchema),
});

export const collections = {
	projects: projectsCollection,
	notes: notesCollection,
	books: booksCollection,
};
