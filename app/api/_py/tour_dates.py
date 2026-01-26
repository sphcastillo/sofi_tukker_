import json
import os
from http.server import BaseHTTPRequestHandler
import psycopg

class handler(BaseHTTPRequestHandler):
    def do_GET(self):
        try:
            with psycopg.connect(os.environ["DATABASE_URL"]) as conn:
                with conn.cursor() as cur:
                    # Use vip (lowercase) unless you KNOW the column was created as "VIP"
                    cur.execute("""
                        SELECT id, date, venue, city, vip, tickets, link
                        FROM tour_dates
                        ORDER BY date ASC;
                    """)
                    rows = cur.fetchall()

            def iso(x):
                return x.isoformat() if hasattr(x, "isoformat") else x

            data = [
                {
                    "id": r[0],
                    "date": iso(r[1]),
                    "venue": r[2],
                    "city": r[3],
                    "VIP": r[4],
                    "tickets": r[5],
                    "link": r[6],
                }
                for r in rows
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
