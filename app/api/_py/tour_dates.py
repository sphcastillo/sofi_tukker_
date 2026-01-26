import json
from http.server import BaseHTTPRequestHandler
from datetime import datetime

class handler(BaseHTTPRequestHandler):
    def do_GET(self):
        try:
            # Raw tour dates data (all dates, including past ones)
            raw_data = [
                {
                    "id": 1,
                    "date": "JAN 29, 2026",
                    "venue": "Ice Cream Factory",
                    "city": "Northbridge, Australia",
                    "link": "https://www.eventbrite.com.au/e/sofi-tukker-tickets-1945381350989?aff=oddtdtcreator",
                    "VIP": False,
                    "tickets": True,
                },
                {
                    "id": 2,
                    "date": "JAN 30, 2026",
                    "venue": "Melbourne Park",
                    "city": "Melbourne, Australia",
                    "link": "https://www.ticketmaster.com.au/ao-live-presents-the-veronicas-sofi-tukker-melbourne-30-01-2026/event/25006346F2AB61B2",
                    "VIP": False,
                    "tickets": True,
                },
                {
                    "id": 3,
                    "date": "FEB 03, 2026",
                    "venue": "The Roundhouse UNSW",
                    "city": "Kensington, Australia",
                    "link": "https://moshtix.com.au/v2/event/sofi-tukker/187372?skin=roundhouse&ref=rhwebsite",
                    "VIP": False,
                    "tickets": True,
                },
                {
                    "id": 4,
                    "date": "FEB 05, 2026",
                    "venue": "The Fortitude Music Hall",
                    "city": "Brisbane, Australia",
                    "link": "https://www.thefortitude.com.au/all-events/sofi-tukker-tickets-ae1050935",
                    "VIP": False,
                    "tickets": True,
                },
                {
                    "id": 5,
                    "date": "FEB 14, 2026",
                    "venue": "Palm Tree Music Festival",
                    "city": "West Palm Beach, FL",
                    "link": "",
                    "VIP": False,
                    "tickets": True,
                },
            ]

            # Parse date string in format "MMM DD, YYYY" to datetime
            def parse_date(date_string):
                months = {
                    "JAN": 1, "FEB": 2, "MAR": 3, "APR": 4, "MAY": 5, "JUN": 6,
                    "JUL": 7, "AUG": 8, "SEP": 9, "OCT": 10, "NOV": 11, "DEC": 12,
                }
                try:
                    parts = date_string.strip().split(" ")
                    if len(parts) != 3:
                        return datetime(2099, 12, 31)  # Far future date if parsing fails
                    month = months.get(parts[0].upper(), 12)
                    day = int(parts[1].replace(",", ""))
                    year = int(parts[2])
                    return datetime(year, month, day)
                except (ValueError, KeyError):
                    return datetime(2099, 12, 31)  # Far future date if parsing fails

            # Filter out past dates
            today = datetime.now().replace(hour=0, minute=0, second=0, microsecond=0)
            data = [
                tour for tour in raw_data
                if parse_date(tour["date"]).replace(hour=0, minute=0, second=0, microsecond=0) >= today
            ]

            body = json.dumps(data).encode("utf-8")
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(body)

        except Exception as e:
            body = json.dumps({"error": str(e)}).encode("utf-8")
            self.send_response(500)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(body)
