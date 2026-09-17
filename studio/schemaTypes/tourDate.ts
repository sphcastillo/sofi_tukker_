import { defineField, defineType } from "sanity";

export const tourDate = defineType({
  name: "tourDate",
  title: "Tour Date",
  type: "document",
  fields: [
    defineField({
      name: "eventDate",
      title: "Event Date",
      type: "date",
      description:
        "The show date. Studio and the tour page list events from nearest to furthest.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "date",
      title: "Display Date",
      type: "string",
      description: 'How the date appears on the site, e.g. "JAN 29, 2026"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "venue",
      title: "Venue",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "specialGuest",
      title: "Special Guest",
      type: "string",
      description:
        'Optional. Shown below the venue as “w/ Guest Name”. Enter the name only, e.g. "The Veronicas".',
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
      hidden: true,
    }),
  ],
  orderings: [
    {
      title: "Date (nearest first)",
      name: "eventDateAsc",
      by: [{ field: "eventDate", direction: "asc" }],
    },
    {
      title: "Date (furthest first)",
      name: "eventDateDesc",
      by: [{ field: "eventDate", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      venue: "venue",
      date: "date",
      eventDate: "eventDate",
      specialGuest: "specialGuest",
    },
    prepare({ venue, date, eventDate, specialGuest }) {
      return {
        title: date || eventDate,
        subtitle: specialGuest ? `${venue} · w/ ${specialGuest}` : venue,
      };
    },
  },
});
