import sys
import os

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

from app import app
from models.merch_product import db, MerchProduct

merch_data = [
   {
    "title" : "TEE",
    "price" : "45.00",
    "image" : '/images/breadMerchandise/woof.png',
    "link" : "/",
   },
   {
    "title" : "HOODIE",
    "price" : "125.00",
    "image" : '/images/breadMerchandise/breadHoodie1.png',
    "link" : "/",
   },
   {
    "title" : "TEE",
    "price" : "45.00",
    "image" : '/images/breadMerchandise/breadTee2.png',
    "link" : "/",
   },
   {
    "title" : "CROP",
    "price" : "35.00",
    "image" : '/images/breadMerchandise/breadCrop3.png',
    "link" : "/",
   },
   {
    "title" : "JOGGERS",
    "price" : "110.00",
    "image" : '/images/breadMerchandise/breadJoggers4.png',
    "link" : "/",
   },
   {
    "title" : "TEE",
    "price" : "45.00",
    "image" : '/images/breadMerchandise/breadTee5.png',
    "link" : "/",
   },
   {
    "title" : "THONG",
    "price" : "35.00",
    "image" : '/images/breadMerchandise/breadThong6.png',
    "link" : "/",
   },
   {
    "title" : "SOCKS",
    "price" : "30.00",
    "image" : '/images/breadMerchandise/breadSocks7.png',
    "link" : "/",
   },
   {
    "title" : "TEE",
    "price" : "45.00",
    "image" : '/images/breadMerchandise/breadTee8.png',
    "link" : "/",
   },
]

with app.app_context():
    db.create_all()
    for data in merch_data:
        merch = MerchProduct(**data)
        db.session.add(merch)
    db.session.commit()
    print("✅ Sofi Tukker Merch products seeded successfully!")
        
