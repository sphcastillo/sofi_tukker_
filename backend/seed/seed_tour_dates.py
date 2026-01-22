from app import app
from models.tour_date import db, TourDate

tour_data =  [
  {
    "date": "SEP 26, 2025",
    "venue": "XS NIGHTCLUB (DJ RESIDENCY)",
    "city": "LAS VEGAS, NV",
    "VIP": False,
    "tickets": True,
    "link": "https://www.wynnsocial.com/event/EVE111500020250926/sofi-tukker/",
  },
  {
    "date": "OCT 4, 2025",
    "venue": "PALM TREE MUSIC FESTIVAL - MONTECITO",
    "city": "MONTECITO, CA",
    "VIP": False,
    "tickets": True,
    "link": "https://posh.vip/e/palm-tree-music-festival-montecito",
  },
  {
    "date": "OCT 11, 2025",
    "venue": "PALM TREE CLUB MIAMI",
    "city": "MIAMI, FL",
    "VIP": False,
    "tickets": True,
    "link": "https://posh.vip/e/sofi-tukker-presented-by-palm-tree-club-miami-1",
  },
  {
    "date": "OCT 18, 2025",
    "venue": "SPORTS ILLUSTRATED F1",
    "city": "AUSTIN, TX",
    "VIP": False,
    "tickets": True,
    "link": "https://www.sicircuitseries.com/",
  },
  {
    "date": "NOV 9, 2025",
    "venue": "EDC - ORLANDO",
    "city": "ORLANDO, FL",
    "VIP": False,
    "tickets": True,
    "link": "https://edcorlando.frontgatetickets.com/?irgwc=1&clickid=V02QCa1P0xycTmuVoOQuFTBsUksSRlUdIx6ZWw0&camefrom=CFC_BUYAT_1387536&impradid=1387536&REFERRAL_ID=tmfeedbuyat1387536&wt.mc_id=aff_BUYAT_1387536&utm_source=1387536-Seated&impradname=Seated&utm_medium=affiliate&ircid=4272",
  },
  {
    "date": "DEC 26, 2025",
    "venue": "BELLY UP ASPEN",
    "city": "ASPEN, CO",
    "VIP": False,
    "tickets": True,
    "link": "https://tickets.bellyupaspen.com/link/event?event=sofi-tukker-12-26-25",
  }

]

with app.app_context():
    for data in tour_data:
        tour = TourDate(**data)
        db.session.add(tour)
    db.session.commit()
    print("✅ Sofi Tukker Tour dates seeded!")