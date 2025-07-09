from flask import Blueprint, jsonify
from models.tour_date import TourDate

tour_routes = Blueprint("tour_routes", __name__)

@tour_routes.route("/api/tour-dates", methods=["GET"])
def get_tour_dates():
    tour_dates = TourDate.query.all()
    return jsonify([tour.to_dict() for tour in tour_dates])