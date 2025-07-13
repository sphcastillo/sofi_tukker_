import sys
import os

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

from app import app
from models.store_item import db, StoreItem

store_data = [
    {
        "title": "BUTTER VINYL",
        "price": '36.99',
        "image": '/images/storeFrontpage/butterVinyl.png'
    },
    {
        "title": "BUTTER CD",
        "price": "14.99",
        "image": '/images/storeFrontpage/butterCD.png'
    },
    {
        'title': 'TEE',
        'price': '45.00',
        'image': '/images/breadMerchandise/woof.png',
    },
    {
        'title': 'VINYL',
        'price': '34.99',
        'image': '/images/homepage/musicStore/vinyl.png',
    },
    {
        'title': 'CD',
        'price': '14.99',
        'image': '/images/homepage/musicStore/cd.png',
    },
    {
        'title': 'CASSETTE',
        'price': '14.99',
        'image': '/images/homepage/musicStore/cassette.png',
    },
    {
        'title': 'HOODIE',
        'price': '125.00',
        'image': '/images/breadMerchandise/breadHoodie1.png',
    },
    {
        'title': 'TEE',
        'price': '45.00',
        'image': '/images/breadMerchandise/breadTee2.png',
    },
    {
        'title': 'CROP',
        'price': '35.00',
        'image': '/images/breadMerchandise/breadCrop3.png',
    },
    {
        'title': 'JOGGERS',
        'price': '110.00',
        'image': '/images/breadMerchandise/breadJoggers4.png',
    },
    {
        'title': 'TEE',
        'price': '45.00',
        'image': '/images/breadMerchandise/breadTee5.png',
    },
    {
        'title': 'THONG',
        'price': '35.00',
        'image': '/images/breadMerchandise/breadThong6.png',
    },
    {
        'title': 'SOCKS',
        'price': '30.00',
        'image': '/images/breadMerchandise/breadSocks7.png',
    },
    {
        'title': 'TEE',
        'price': '45.00',
        'image': '/images/breadMerchandise/breadTee8.png',
    },
    {
        'title': 'STICKER',
        'price': '6.00',
        'image': '/images/breadMerchandise/breadSticker9.png',
    },
    {
        'title': 'SOFT ANIMALS LIMITED EDITION GREEN VINYL',
        'price': '35.00',
        'image': '/images/storeFrontpage/stMusic1.png',
    },
    {
        'title': 'WET TENNIS CD',
        'price': '14.99',
        'image': '/images/storeFrontpage/stMusic2.png',
    },
    {
        'title': 'WET TENNIS VINYL',
        'price': '29.99',
        'image': '/images/storeFrontpage/stMusic3.png',
    },
    {
        'title': 'TREEHOUSE VINYL',
        'price': '29.99',
        'image': '/images/storeFrontpage/stMusic4.png',
    },
    {
        'title': 'SOFT ANIMALS CD',
        'price': '12.00',
        'image': '/images/storeFrontpage/stMusic5.png',
    },
    {
        'title': 'DANCING ON THE PEOPLE VINYL',
        'price': '24.99',
        'image': '/images/storeFrontpage/stMusic6.png',
    },
    {
        'title': 'SOFT ANIMALS VINYL',
        'price': '24.99',
        'image': '/images/storeFrontpage/stMusic7.png',    
    }
]

with app.app_context():
    for item in store_data:
        store = StoreItem(**item)
        db.session.add(store)
    db.session.commit()
    print("✅ Sofi Tukker Store items seeded successfully!")