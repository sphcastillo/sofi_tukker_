from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv
from models import db
from models.bread_good import BreadGood
from models.tour_date import TourDate
from models.store_item import StoreItem
from models.music_release import MusicRelease
from models.merch_product import MerchProduct
from routes.bread_routes import bread_routes
from routes.tour_routes import tour_routes
from routes.store_routes import store_routes
from routes.music_routes import music_routes
from routes.merch_routes import merch_routes
import os

load_dotenv()

# Create Flask app
app = Flask(__name__)

# Enable CORS (optional: restrict origins in production)
CORS(app)

# Database configuration
DATABASE_URL = os.environ.get('DATABASE_URL')

# Heroku may provide old-style postgres://, convert it
if DATABASE_URL and DATABASE_URL.startswith("postgres://"):
    DATABASE_URL = DATABASE_URL.replace("postgres://", "postgresql://", 1)

app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE_URL or 'sqlite:///mydata.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# ✅ Debug: print which DB is being used
print("Using database:", app.config['SQLALCHEMY_DATABASE_URI'])

# Initialize DB and register routes
db.init_app(app)
app.register_blueprint(bread_routes)
app.register_blueprint(tour_routes)
app.register_blueprint(store_routes)
app.register_blueprint(music_routes)
app.register_blueprint(merch_routes)

# Create tables if they don't exist
with app.app_context():
    db.create_all()

# Run the server (avoid this block in production)
if __name__ == '__main__':
    app.run(debug=True)

    
