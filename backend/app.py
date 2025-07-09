from flask import Flask
from flask_cors import CORS
from models.tour_date import db
from routes.tour_routes import tour_routes
import os

# Create Flask app
app = Flask(__name__)

# Enable CORS (optional: restrict origins in production)
CORS(app)

# Database configuration
DATABASE_URL = os.environ.get('DATABASE_URL', 'sqlite:///mydata.db')

# Heroku may provide old-style postgres://, convert it
if DATABASE_URL.startswith("postgres://"):
    DATABASE_URL = DATABASE_URL.replace("postgres://", "postgresql://", 1)

app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE_URL
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize DB and register routes
db.init_app(app)
app.register_blueprint(tour_routes)

# Create tables if they don't exist
with app.app_context():
    db.create_all()

# Run the server (avoid this block in production)
if __name__ == '__main__':
    app.run(debug=True)
