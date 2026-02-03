import { defineField, defineType } from "sanity";

export const musicVideo = defineType({
  name: "musicVideo",
  title: "Music Video",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "thumbnail",
      title: "Thumbnail URL",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "url",
      title: "Embed URL",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "sortOrder",
      title: "Sort Order",
      type: "number",
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: "Sort Order",
      name: "sortOrderAsc",
      by: [{ field: "sortOrder", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title" },
  },
});
