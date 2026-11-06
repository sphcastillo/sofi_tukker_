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
        "The show date. Studio lists newest dates first; the tour page lists soonest first.",
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
      title: "Event",
      type: "string",
      description:
        "Event or venue name shown on the tour page, e.g. \"ANIMAL TALK Presents: Greek Theatre\".",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "specialGuest",
      title: "Special Guest",
      type: "string",
      description:
        'Optional. Shown below the event as “w/ Guest Name”. Enter the name only, e.g. "The Veronicas".',
    }),
    defineField({
      name: "city",
      title: "City, State, Country",
      type: "string",
      description: 'e.g. "Los Angeles, CA, USA" or "Landgraaf, Netherlands".',
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
      name: "vipLink",
      title: "VIP Ticket Link",
      type: "url",
      description: "Required when VIP is available. Used by the VIP button on the tour page.",
      hidden: ({ parent }) => !parent?.vip,
      validation: (Rule) =>
        Rule.uri({ allowRelative: false, scheme: ["http", "https"] }).custom(
          (value, context) => {
            const vip = (context.parent as { vip?: boolean } | undefined)?.vip;
            if (vip && !value) {
              return "Add a VIP ticket link when VIP tickets are available.";
            }
            return true;
          }
        ),
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
    defineField({
      name: "archived",
      title: "Archived",
      type: "boolean",
      description: "Archived shows are hidden from the website.",
      initialValue: false,
    }),
  ],
  orderings: [
    {
      title: "Date (newest first)",
      name: "eventDateDesc",
      by: [{ field: "eventDate", direction: "desc" }],
    },
    {
      title: "Date (oldest first)",
      name: "eventDateAsc",
      by: [{ field: "eventDate", direction: "asc" }],
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
