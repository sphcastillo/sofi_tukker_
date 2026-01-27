import json
import os
from http.server import BaseHTTPRequestHandler
import psycopg

class handler(BaseHTTPRequestHandler):
    def do_GET(self):
        try:
            with psycopg.connect(os.environ["DATABASE_URL"]) as conn:
                with conn.cursor() as cur:
                    cur.execute("""
                        SELECT id, title, url
                        FROM music_releases
                        ORDER BY id ASC;
                    """)
                    rows = cur.fetchall()

            data = [
                {
                    "id": r[0],
                    "title": r[1],
                    "url": r[2],
                }
                for r in rows
            ]

            body = json.dumps(data).encode("utf-8")
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(body)

        except Exception as e:
            body = json.dumps({ "error": str(e) }).encode("utf-8")
            self.send_response(500)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(body)
