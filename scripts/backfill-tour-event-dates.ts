/**
 * Backfill tourDate.eventDate from the display date string.
 * Usage: pnpm tsx --env-file=.env.local scripts/backfill-tour-event-dates.ts
 */
import { createClient } from "@sanity/client";
import { parseDisplayDate } from "./parse-tour-date";

async function main() {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const token = process.env.SANITY_API_WRITE_TOKEN;
  if (!projectId || !token) {
    console.error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_WRITE_TOKEN");
    process.exit(1);
  }

  const client = createClient({
    projectId,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-01-01",
    token,
    useCdn: false,
  });

  const docs: { _id: string; date?: string; eventDate?: string }[] =
    await client.fetch(`*[_type == "tourDate"]{_id, date, eventDate}`);

  const tx = client.transaction();
  let patched = 0;

  for (const doc of docs) {
    if (doc.eventDate || !doc.date) continue;
    const eventDate = parseDisplayDate(doc.date);
    if (!eventDate) {
      console.warn(`Could not parse date for ${doc._id}: ${doc.date}`);
      continue;
    }
    tx.patch(doc._id, { set: { eventDate } });
    patched += 1;
    console.log(`${doc.date} -> ${eventDate}`);
  }

  if (!patched) {
    console.log("No tour dates needed a backfill.");
    return;
  }

  await tx.commit();
  console.log(`Updated ${patched} tour date(s).`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
