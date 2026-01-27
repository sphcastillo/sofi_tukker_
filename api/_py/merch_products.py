import json
from http.server import BaseHTTPRequestHandler

class handler(BaseHTTPRequestHandler):
    def do_GET(self):
        try:
            # Static merch products data
            data = [
                {
                    "id": 1,
                    "title": "TEE",
                    "price": "45.00",
                    "image": "/images/breadMerchandise/woof.png",
                    "link": "/",
                },
                {
                    "id": 2,
                    "title": "HOODIE",
                    "price": "$125",
                    "image": "/images/breadMerchandise/breadHoodie1.png",
                    "link": "/",
                },
                {
                    "id": 3,
                    "title": "TEE",
                    "price": "$45",
                    "image": "/images/breadMerchandise/breadTee2.png",
                    "link": "/",
                },
                {
                    "id": 4,
                    "title": "CROP",
                    "price": "$35",
                    "image": "/images/breadMerchandise/breadCrop3.png",
                    "link": "/",
                },
                {
                    "id": 5,
                    "title": "JOGGERS",
                    "price": "$110",
                    "image": "/images/breadMerchandise/breadJoggers4.png",
                    "link": "/",
                },
                {
                    "id": 6,
                    "title": "TEE",
                    "price": "$45",
                    "image": "/images/breadMerchandise/breadTee5.png",
                    "link": "/",
                },
                {
                    "id": 7,
                    "title": "THONG",
                    "price": "$35",
                    "image": "/images/breadMerchandise/breadThong6.png",
                    "link": "/",
                },
                {
                    "id": 8,
                    "title": "SOCKS",
                    "price": "$30",
                    "image": "/images/breadMerchandise/breadSocks7.png",
                    "link": "/",
                },
                {
                    "id": 9,
                    "title": "TEE",
                    "price": "$45",
                    "image": "/images/breadMerchandise/breadTee8.png",
                    "link": "/",
                },
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
