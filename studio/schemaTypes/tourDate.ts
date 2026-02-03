import { defineField, defineType } from "sanity";

export const tourDate = defineType({
  name: "tourDate",
  title: "Tour Date",
  type: "document",
  fields: [
    defineField({
      name: "date",
      title: "Date",
      type: "string",
      description: 'Display format, e.g. "JAN 29, 2026"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "venue",
      title: "Venue",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "city",
      title: "City",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "link",
      title: "Ticket Link",
      type: "url",
    }),
    defineField({
      name: "vip",
      title: "VIP Available",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "tickets",
      title: "Tickets Available",
      type: "boolean",
      initialValue: true,
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
    select: { title: "venue", subtitle: "date" },
  },
});
