import json
from python.lib.db import get_conn

def handler(request):
    with get_conn() as conn:
        with conn.cursor() as cur:
            cur.execute("""
                SELECT id, title, image, price
                FROM store_items
                ORDER BY id ASC;
            """)
            rows = cur.fetchall()

    data = [
        {
            "id": r[0],
            "title": r[1],
            "image": r[2],
            "price": float(r[3]) if r[3] is not None else None,
        }
        for r in rows
    ]

    return {
        "statusCode": 200,
        "headers": {"Content-Type": "application/json"},
        "body": json.dumps(data),
    }
