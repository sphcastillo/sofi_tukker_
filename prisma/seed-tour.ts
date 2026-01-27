import "dotenv/config";
import prisma from "../lib/prisma";

const tourDates = [
  { dateText: "JAN 29, 2026", venue: "Ice Cream Factory", city: "Northbridge, Australia", link: "https://www.eventbrite.com.au/e/sofi-tukker-tickets-1945381350989?aff=oddtdtcreator", vip: false, tickets: true },
  { dateText: "JAN 30, 2026", venue: "Melbourne Park", city: "Melbourne, Australia", link: "https://www.ticketmaster.com.au/ao-live-presents-the-veronicas-sofi-tukker-melbourne-30-01-2026/event/25006346F2AB61B2", vip: false, tickets: true },
  { dateText: "FEB 03, 2026", venue: "The Roundhouse UNSW", city: "Kensington, Australia", link: "https://moshtix.com.au/v2/event/sofi-tukker/187372?skin=roundhouse&ref=rhwebsite", vip: false, tickets: true },
  { dateText: "FEB 05, 2026", venue: "The Fortitude Music Hall", city: "Brisbane, Australia", link: "https://www.thefortitude.com.au/all-events/sofi-tukker-tickets-ae1050935", vip: false, tickets: true },
  { dateText: "FEB 14, 2026", venue: "Palm Tree Music Festival", city: "West Palm Beach, FL", link: "https://palmtreemusicfestival.com/", vip: false, tickets: true },
  { dateText: "MAR 07, 2026", venue: "Ise of Light Festival", city: "Santo Domingo, Dominican Republic", link: "https://isleoflight.com/tickets/", vip: false, tickets: true },
  { dateText: "MAR 20, 2026", venue: "XS Nightclub - Residency", city: "Las Vegas, NV", link: "https://www.wynnsocial.com/event/EVE111500020260320/special-guest/", vip: false, tickets: true },
  { dateText: "MAR 27, 2026", venue: "XS Nightclub - Residency", city: "Las Vegas, NV", link: "https://www.wynnsocial.com/event/EVE111500020260327/sofi-tukker/", vip: false, tickets: true },
  { dateText: "APR 10, 2026 - APR 11, 2026", venue: "Breakaway Music Festival", city: "Dallas, TX", link: "https://www.universe.com/events/breakaway-dallas-2026-tickets-HCTQ84?ref=ticketmaster&utm_medium=affiliate&utm_source=5128861-Google%20Events&ref=DCUniverse_Google_Events&source=ea", vip: false, tickets: true },
  { dateText: "JUN 20, 2026", venue: "Pinkpop Festival", city: "Landgraaf, Netherlands", link: "https://www.pinkpop.nl/tickets/", vip: false, tickets: true },
  { dateText: "Jul 1, 2026", venue: "Open'er Festival", city: "Gdynia, Poland", link: "https://opener.pl/en/tickets", vip: false, tickets: true },
];

async function main() {
  await prisma.tourDate.deleteMany();
  
  await prisma.tourDate.createMany({
    data: tourDates.map((t) => ({
      date: t.dateText,          
      venue: t.venue,
      city: t.city,
      link: t.link,
      vip: t.vip,
      tickets: t.tickets,
    })),
  });
  
  console.log("Seeded tour_dates:", tourDates.length);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
