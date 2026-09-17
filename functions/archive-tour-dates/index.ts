import { scheduledEventHandler } from "@sanity/functions";
import { createClient } from "@sanity/client";

export const handler = scheduledEventHandler(async ({ context }) => {
  const client = createClient({
    projectId: "h53jkfvu",
    dataset: "production",
    apiVersion: "2026-04-29",
    token: context.clientOptions?.token,
    useCdn: false,
    perspective: "published",
  });

  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());

  const part = (type: string) =>
    parts.find((item) => item.type === type)!.value;

  const today = `${part("year")}-${part("month")}-${part("day")}`;

  const events = await client.fetch<
    Array<{
      _id: string;
      _rev: string;
      eventDate: string;
      venue: string;
    }>
  >(
    `*[
      _type == "tourDate" &&
      defined(eventDate) &&
      eventDate < $today &&
      archived != true
    ]{
      _id,
      _rev,
      eventDate,
      venue
    }`,
    { today },
  );

  // Local testing only previews the matches.
  if (context.local) {
    console.log("Today's date:", today);
    console.log("Would archive:", events);
    return;
  }

  for (const event of events) {
    await client
      .patch(event._id)
      .ifRevisionId(event._rev)
      .set({ archived: true })
      .commit();

    console.log(`Archived: ${event.eventDate} — ${event.venue}`);
  }

  console.log(`Archived ${events.length} past shows.`);
});