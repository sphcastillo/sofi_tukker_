/**
 * One-time seed: imports existing site content into Sanity.
 * Usage: pnpm tsx --env-file=.env.local scripts/seed-sanity.ts
 */
import { createClient } from "@sanity/client";
import { BandStoreProducts } from "../data/SofiTukkerStoreData";
import { SofiTukkerMerchItems } from "../data/SofiTukkerMerchData";
import { SofiTukkerMusicObjectives } from "../data/SofiTukkerMusicData";
import { videos } from "../data/MusicVideosData";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !token) {
  console.error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_WRITE_TOKEN");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-01-01",
  token,
  useCdn: false,
});

const tourDates = [
  { date: "JAN 29, 2026", venue: "Ice Cream Factory", city: "Northbridge, Australia", link: "https://www.eventbrite.com.au/e/sofi-tukker-tickets-1945381350989?aff=oddtdtcreator", vip: false, tickets: true },
  { date: "JAN 30, 2026", venue: "Melbourne Park", city: "Melbourne, Australia", link: "https://www.ticketmaster.com.au/ao-live-presents-the-veronicas-sofi-tukker-melbourne-30-01-2026/event/25006346F2AB61B2", vip: false, tickets: true },
  { date: "FEB 03, 2026", venue: "The Roundhouse UNSW", city: "Kensington, Australia", link: "https://moshtix.com.au/v2/event/sofi-tukker/187372?skin=roundhouse&ref=rhwebsite", vip: false, tickets: true },
  { date: "FEB 05, 2026", venue: "The Fortitude Music Hall", city: "Brisbane, Australia", link: "https://www.thefortitude.com.au/all-events/sofi-tukker-tickets-ae1050935", vip: false, tickets: true },
  { date: "FEB 14, 2026", venue: "Palm Tree Music Festival", city: "West Palm Beach, FL", link: "https://palmtreemusicfestival.com/", vip: false, tickets: true },
  { date: "MAR 07, 2026", venue: "Ise of Light Festival", city: "Santo Domingo, Dominican Republic", link: "https://isleoflight.com/tickets/", vip: false, tickets: true },
  { date: "MAR 20, 2026", venue: "XS Nightclub - Residency", city: "Las Vegas, NV", link: "https://www.wynnsocial.com/event/EVE111500020260320/special-guest/", vip: false, tickets: true },
  { date: "MAR 27, 2026", venue: "XS Nightclub - Residency", city: "Las Vegas, NV", link: "https://www.wynnsocial.com/event/EVE111500020260327/sofi-tukker/", vip: false, tickets: true },
  { date: "APR 10, 2026 - APR 11, 2026", venue: "Breakaway Music Festival", city: "Dallas, TX", link: "https://www.universe.com/events/breakaway-dallas-2026-tickets-HCTQ84?ref=ticketmaster&utm_medium=affiliate&utm_source=5128861-Google%20Events&ref=DCUniverse_Google_Events&source=ea", vip: false, tickets: true },
  { date: "JUN 20, 2026", venue: "Pinkpop Festival", city: "Landgraaf, Netherlands", link: "https://www.pinkpop.nl/tickets/", vip: false, tickets: true },
  { date: "Jul 1, 2026", venue: "Open'er Festival", city: "Gdynia, Poland", link: "https://opener.pl/en/tickets", vip: false, tickets: true },
];

const breadGoods = [
  { title: "VINYL", price: "34.99", image: "/images/homepage/musicStore/vinyl.png", link: "/" },
  { title: "CD", price: "14.99", image: "/images/homepage/musicStore/cd.png", link: "/" },
  { title: "CASSETTE", price: "14.99", image: "/images/homepage/musicStore/cassette.png", link: "/" },
];

const socialLinks = [
  { name: "Instagram", platform: "instagram", link: "https://www.instagram.com/sofitukker/" },
  { name: "Facebook", platform: "facebook", link: "https://www.facebook.com/sofitukker" },
  { name: "Tiktok", platform: "tiktok", link: "https://www.tiktok.com/@sofitukker?lang=en" },
  { name: "Twitter", platform: "twitter", link: "https://twitter.com/sofitukker" },
  { name: "Snapchat", platform: "snapchat", link: "https://ffm.link/sofitukkersnapchat" },
  { name: "Spotify", platform: "spotify", link: "https://open.spotify.com/artist/586uxXMyD5ObPuzjtrzO1Q?si=mVU722GuREmKQHKhx18X8A&nd=1&dlsi=de2a9525e08a4a78" },
  { name: "Apple Music", platform: "appleMusic", link: "https://music.apple.com/us/artist/sofi-tukker/998656537" },
  { name: "Youtube", platform: "youtube", link: "https://www.youtube.com/@SOFITUKKER" },
  { name: "Discord", platform: "discord", link: "https://discord.com/invite/AK8nFnSbDR" },
  { name: "Email", platform: "email", link: "mailto:" },
];

async function wipeType(type: string) {
  const ids: string[] = await client.fetch(`*[_type == $type]._id`, { type });
  if (!ids.length) return;
  const tx = client.transaction();
  for (const id of ids) tx.delete(id);
  await tx.commit();
  console.log(`Deleted ${ids.length} ${type}`);
}

async function main() {
  const types = [
    "storeItem",
    "tourDate",
    "breadGood",
    "merchProduct",
    "musicRelease",
    "musicVideo",
    "socialLink",
  ];
  for (const type of types) await wipeType(type);

  let tx = client.transaction();

  BandStoreProducts.forEach((item, i) => {
    tx.create({
      _type: "storeItem",
      title: item.title,
      image: item.image,
      price: item.price,
      sortOrder: item.id ?? i + 1,
    });
  });

  tourDates.forEach((item, i) => {
    tx.create({
      _type: "tourDate",
      date: item.date,
      venue: item.venue,
      city: item.city,
      link: item.link,
      vip: item.vip,
      tickets: item.tickets,
      sortOrder: i + 1,
    });
  });

  breadGoods.forEach((item, i) => {
    tx.create({
      _type: "breadGood",
      title: item.title,
      image: item.image,
      price: item.price,
      link: item.link,
      sortOrder: i + 1,
    });
  });

  SofiTukkerMerchItems.forEach((item, i) => {
    tx.create({
      _type: "merchProduct",
      title: item.title,
      price: item.price,
      image: item.image,
      link: item.link,
      sortOrder: item.id ?? i + 1,
    });
  });

  SofiTukkerMusicObjectives.forEach((item, i) => {
    tx.create({
      _type: "musicRelease",
      title: item.title,
      url: item.url,
      sortOrder: item.id ?? i + 1,
    });
  });

  videos.forEach((item, i) => {
    tx.create({
      _type: "musicVideo",
      title: item.title,
      thumbnail: item.thumbnail,
      url: item.url,
      sortOrder: item.id ?? i + 1,
    });
  });

  socialLinks.forEach((item, i) => {
    tx.create({
      _type: "socialLink",
      name: item.name,
      platform: item.platform,
      link: item.link,
      sortOrder: i + 1,
    });
  });

  await tx.commit();
  console.log("Seeded Sanity content successfully.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
