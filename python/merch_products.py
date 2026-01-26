import json
from python.lib.db import get_conn

def handler(request):
    with get_conn() as conn:
        with conn.cursor() as cur:
            cur.execute("""
                SELECT id, title, price, image, link
                FROM merch_products
                ORDER BY id ASC;
            """)
            rows = cur.fetchall()

    data = [
        {
            "id": r[0],
            "title": r[1],
            "price": float(r[2]) if r[2] is not None else None,
            "image": r[3],
            "link": r[4],
        }
        for r in rows
    ]

    return {
        "statusCode": 200,
        "headers": {"Content-Type": "application/json"},
        "body": json.dumps(data),
    }
