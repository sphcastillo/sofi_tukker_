import json
from python.lib.db import get_conn

def handler(request):
    with get_conn() as conn:
        with conn.cursor() as cur:
            cur.execute("""
                SELECT id, date, venue, city, "VIP", tickets, link
                FROM tour_dates
                ORDER BY date ASC;
            """)
            rows = cur.fetchall()

    data = [
        {
            "id": r[0],
            # If r[1] is a date/datetime, convert for JSON:
            "date": r[1].isoformat() if hasattr(r[1], "isoformat") else r[1],
            "venue": r[2],
            "city": r[3],
            "VIP": r[4],
            "tickets": r[5],
            "link": r[6],
        }
        for r in rows
    ]

    return {
        "statusCode": 200,
        "headers": {"Content-Type": "application/json"},
        "body": json.dumps(data),
    }
