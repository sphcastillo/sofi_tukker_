import json
from python.lib.db import get_conn

def handler(request):
    with get_conn() as conn:
        with conn.cursor() as cur:
            cur.execute("""
                SELECT id, title, url
                FROM music_releases
                ORDER BY id ASC;
            """)
            rows = cur.fetchall()

    data = [{"id": r[0], "title": r[1], "url": r[2]} for r in rows]

    return {
        "statusCode": 200,
        "headers": {"Content-Type": "application/json"},
        "body": json.dumps(data),
    }
