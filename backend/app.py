from flask import Flask
from flask_cors import CORS
from models.tour_date import db
from routes.tour_routes import tour_routes

# Create Flask app
app = Flask(__name__)

# Enable CORS for frontend/backend communication
CORS(app)

# Configure database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///mydata.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize DB and register routes
db.init_app(app)
app.register_blueprint(tour_routes)

# Create tables if they don't exist
with app.app_context():
    db.create_all()

# Run the server
if __name__ == '__main__':
    app.run(debug=True)
