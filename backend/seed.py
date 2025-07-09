from flask import Flask
from models.tour_date import db, TourDate
import os

# Create app and configure DB
app = Flask(__name__)
uri = os.getenv("DATABASE_URL", "sqlite:///mydata.db")
if uri.startswith("postgres://"):
    uri = uri.replace("postgres://", "postgresql://", 1)
app.config['SQLALCHEMY_DATABASE_URI'] = uri
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

tour_data =  [
  {
    "date": "JUL 15, 2025",
    "venue": "BUDAPEST PARK",
    "city": "BUDAPEST, HUNGARY",
    "VIP": False,
    "tickets": True,
    "link": "https://www.livenation.hu/en/tickets/sofi-tukker-budapest-events-edp1562763",
  },
  {
    "date": "JUL 17, 2025",
    "venue": "ELECTRIC CASTLE",
    "city": "TRANSYLVANIA, ROMANIA",
    "VIP": False,
    "tickets": True,
    "link": "https://electriccastle.com/tickets",
  },
  {
    "date": "JUL 18, 2025",
    "venue": "INPULSTANZ FESTIVAL",
    "city": "VIENNA, AUSTRIA",
    "VIP": False,
    "tickets": True,
    "link": "https://www.impulstanz.com/en/social/aid2149/",
  },
  {
    "date": "JUL 19, 2025",
    "venue": "COLOURS OF OSTRAVA",
    "city": "OSTRAVA, MORAVIAN-SILESIAN REGION",
    "VIP": False,
    "tickets": True,
    "link": "https://www.colours.cz/vstupenky-2025/",
  },
  {
    "date": "JUL 20, 2025",
    "venue": "TOMORROWLAND (DJ SET)",
    "city": "BOOM, ANTWERP, BELGIUM",
    "VIP": False,
    "tickets": False,
    "link": "https://belgium.tomorrowland.com/en/passes-packages/",
  },
  {
    "date": "JUL 27, 2025",
    "venue": "SHAMBHALA MUSIC FESTIVAL",
    "city": "SALMO, CANADA",
    "VIP": False,
    "tickets": False,
    "link": "https://www.shambhalamusicfestival.com/",
  },
  {
    "date": "AUG 1, 2025",
    "venue": "NEWPORT JAZZ FESTIVAL (BUTTER SET)",
    "city": "NEWPORT, RI",
    "VIP": False,
    "tickets": False,
    "link": "https://newportjazz.org/",
  },
  {
    "date": "AUG 9, 2025",
    "venue": "ELEMENTS MUSIC & ARTS FESTIVAL",
    "city": "LONG POND, PA",
    "VIP": False,
    "tickets": True,
    "link": "https://www.elementsfest.us/",
  },
  {
    "date": "AUG 10, 2025",
    "venue": "ÎLESONIQ FESTIVAL",
    "city": "MONTREAL, CANADA",
    "VIP": False,
    "tickets": True,
    "link": "https://www.ticketmaster.ca/event/310060F7E5C355F9?lang=fr-ca&brand=ilesoniq&language=en-ca",
  },
  {
    "date": "AUG 13, 2025",
    "venue": "ENCORE BEACH CLUB AT NIGHT (DJ RESIDENCY)",
    "city": "LAS VEGAS, NV",
    "VIP": False,
    "tickets": True,
    "link": "https://www.wynnsocial.com/event/EVE116300020250813/sofi-tukker/",
  },
  {
    "date": "AUG 15, 2025",
    "venue": "XS NIGHTCLUB (DJ RESIDENCY)",
    "city": "LAS VEGAS, NV",
    "VIP": False,
    "tickets": True,
    "link": "https://www.wynnsocial.com/event/EVE111500020250815/sofi-tukker/",
  },
  {
    "date": "AUG 16, 2025",
    "venue": "THE CONCOURSE PROJECT",
    "city": "AUSTIN, TX",
    "VIP": False,
    "tickets": False,
    "link": "https://go.seated.com/tour-events/a056855a-e67d-49f4-8560-b5dffd9a64bb?utm_referrer=https%3A%2F%2Fsofitukker.com%2F",
  },
  {
    "date": "AUG 17, 2025",
    "venue": "SPLASH HOUSE",
    "city": "PALM SPRINGS, CA",
    "VIP": False,
    "tickets": True,
    "link": "https://www.tixr.com/groups/splashhouse/events/splash-house-2025-130850",
  },
  {
    "date": "AUG 29, 2025",
    "venue": "ENCORE BEACH CLUB (DJ RESIDENCY)",
    "city": "LAS VEGAS, NV",
    "VIP": False,
    "tickets": True,
    "link": "https://www.wynnsocial.com/event/EVE110300020250829/sofi-tukker/",
  },
  {
    "date": "AUG 30, 2025",
    "venue": "NORTH COAST MUSIC FESTIVAL",
    "city": "BRIDGEVIEW, IL",
    "VIP": False,
    "tickets": True,
    "link": "https://wl.seetickets.us/event/North-Coast-Music-Festival-2025-15-Year-Anniversary/619463?afflky=NorthCoastMusicFestival",
  },
  {
    "date": "AUG 31, 2025",
    "venue": "CABANA POOL BAR",
    "city": "TORONTO, ON",
    "VIP": False,
    "tickets": True,
    "link": "https://www.ticketweb.ca/event/sofi-tukker-cabana-toronto-tickets/14379943?pl=cabanatoronto",
  },
  {
    "date": "SEP 14, 2025",
    "venue": "ENCORE BEACH CLUB (DJ RESIDENCY)",
    "city": "LAS VEGAS, NV",
    "VIP": False,
    "tickets": True,
    "link": "https://www.tixr.com/groups/ebc/events/wynn-las-vegas--sofi-tukker-128175",
  },
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
    "date": "NOV 9, 2025",
    "venue": "EDC - ORLANDO",
    "city": "ORLANDO, FL",
    "VIP": False,
    "tickets": True,
    "link": "https://edcorlando.frontgatetickets.com/?irgwc=1&clickid=V02QCa1P0xycTmuVoOQuFTBsUksSRlUdIx6ZWw0&camefrom=CFC_BUYAT_1387536&impradid=1387536&REFERRAL_ID=tmfeedbuyat1387536&wt.mc_id=aff_BUYAT_1387536&utm_source=1387536-Seated&impradname=Seated&utm_medium=affiliate&ircid=4272",
  },

];

with app.app_context():
    db.drop_all()
    db.create_all()
    for entry in tour_data:
        db.session.add(TourDate(**entry))
    db.session.commit()
    print("✅ Tour dates added.")
