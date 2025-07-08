from flask import Blueprint, jsonify
from models.tour_date import TourDate

tour_routes = Blueprint('tour_routes', __name__, url_prefix='/api')

@tour_routes.route('/tour-dates')
def get_tour_dates():
    dates = TourDate.query.all()
    return jsonify([d.to_dict() for d in dates])
