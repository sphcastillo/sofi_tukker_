import sys
import os

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

from app import app
from models.bread_good import db, BreadGood

bread_data = [
   {
    "title" : "VINYL",
    "price" : "34.99",
    "image" : '/images/homepage/musicStore/vinyl.png',
    "link" : "/",
   },
   {
    "title" : "CD",
    "price" : "14.99",
    "image" : '/images/homepage/musicStore/cd.png',
    "link" : "/",
   },
   {
    "title" : "CASSETTE",
    "price" : "14.99",
    "image" : 'images/homepage/musicStore/cassette.png',
    "link" : "/",
   },
]

with app.app_context():
    for data in bread_data:
        bread = BreadGood(**data)
        db.session.add(bread)
    db.session.commit()
    print("✅ Sofi Tukker Bread goods seeded served!")