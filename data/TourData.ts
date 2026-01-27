export type TourDate = {
  date: string;
  venue: string;
  city: string;
  link: string;
  VIP: boolean;
  tickets: boolean;
};

const SofiTukkerTourDates: TourDate[] = [
  {
    date: "JAN 29, 2026",
    venue: "Ice Cream Factory",
    city: "Northbridge, Australia",
    link: 'https://www.eventbrite.com.au/e/sofi-tukker-tickets-1945381350989?aff=oddtdtcreator',
    VIP: false,
    tickets: true,
  },
  {
    date: "JAN 30, 2026",
    venue: "Melbourne Park",
    city: "Melbourne, Australia",
    link: 'https://www.ticketmaster.com.au/ao-live-presents-the-veronicas-sofi-tukker-melbourne-30-01-2026/event/25006346F2AB61B2',
    VIP: false,
    tickets: true,
  },
  {
    date: "FEB 03, 2026",
    venue: "The Roundhouse UNSW",
    city: "Kensington, Australia",
    link: 'https://moshtix.com.au/v2/event/sofi-tukker/187372?skin=roundhouse&ref=rhwebsite',
    VIP: false,
    tickets: true,
  },
  {
    date: "FEB 05, 2026",
    venue: "The Fortitude Music Hall",
    city: "Brisbane, Australia",
    link: 'https://www.thefortitude.com.au/all-events/sofi-tukker-tickets-ae1050935',
    VIP: false,
    tickets: true,
  },
  {
    date: "FEB 14, 2026",
    venue: "Palm Tree Music Festival",
    city: "West Palm Beach, FL",
    link: 'https://palmtreemusicfestival.com/',
    VIP: false,
    tickets: true,
  },
  {
    date: "MAR 07, 2026",
    venue: "Ise of Light Festival",
    city: "Santo Domingo, Dominican Republic",
    link: "https://isleoflight.com/tickets/",
    VIP: false,
    tickets: true,
  },
  {
    date: "",
    venue: "",
    city: "",
    link: "",
    VIP: false,
    tickets: true,
  },
  {
    date: "Mar 20, 2026",
    venue: "XS Nightclub - Residency",
    city: "Las Vegas, NV",
    link: "https://www.wynnsocial.com/event/EVE111500020260320/special-guest/",
    VIP: false,
    tickets: true,
  },
  {
    date: "Mar 27, 2026",
    venue: "XS Nightclub - Residency",
    city: "Las Vegas, NV",
    link: "https://www.wynnsocial.com/event/EVE111500020260327/sofi-tukker/",
    VIP: false,
    tickets: true,
  },
  {
    date: "APR 10, 2026 - APR 11, 2026",
    venue: "Breakaway Music Festival",
    city: "Dallas, TX",
    link: "https://www.universe.com/events/breakaway-dallas-2026-tickets-HCTQ84?ref=ticketmaster&utm_medium=affiliate&utm_source=5128861-Google%20Events&ref=DCUniverse_Google_Events&source=ea",
    VIP: false,
    tickets: true,
  },
    {
    date: "JUN 20, 2026",
    venue: "Pinkpop Festival",
    city: "Landgraaf, Netherlands",
    link: "https://www.pinkpop.nl/tickets/",
    VIP: false,
    tickets: true,
  },
    {
    date: "Jul 1, 2026",
    venue: "Open'er Festival",
    city: "Gdynia, Poland",
    link: "https://opener.pl/en/tickets",
    VIP: false,
    tickets: true,
  },
      // {
  //   date: "",
  //   venue: "",
  //   city: "",
  //   link: "",
  //   VIP: false,
  //   tickets: true,
  // },
];

/**
 * Parses a date string in format "MMM DD, YYYY" (e.g., "JAN 29, 2026")
 * to a Date object
 */
function parseDate(dateString: string): Date {
  const months: { [key: string]: number } = {
    JAN: 0, FEB: 1, MAR: 2, APR: 3, MAY: 4, JUN: 5,
    JUL: 6, AUG: 7, SEP: 8, OCT: 9, NOV: 10, DEC: 11,
  };

  const parts = dateString.trim().split(' ');
  if (parts.length !== 3) {
    // If parsing fails, return a date far in the future so it doesn't get filtered
    return new Date('2099-12-31');
  }

  const month = months[parts[0].toUpperCase()];
  const day = parseInt(parts[1].replace(',', ''), 10);
  const year = parseInt(parts[2], 10);

  if (isNaN(month) || isNaN(day) || isNaN(year)) {
    return new Date('2099-12-31');
  }

  return new Date(year, month, day);
}

/**
 * Filters out past tour dates, keeping only future dates
 * Compares dates at the start of the day (midnight) to avoid timezone issues
 */
function filterFutureDates(dates: TourDate[]): TourDate[] {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Set to start of day for accurate comparison

  return dates.filter((tour) => {
    const tourDate = parseDate(tour.date);
    tourDate.setHours(0, 0, 0, 0);
    return tourDate >= today;
  });
}

// Export filtered tour dates (only future dates)
export const tourDates: TourDate[] = filterFutureDates(SofiTukkerTourDates);
