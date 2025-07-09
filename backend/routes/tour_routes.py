from flask import Blueprint, jsonify
from models.tour_date import TourDate

tour_routes = Blueprint("tour_routes", __name__)

@tour_routes.route("/api/tour-dates", methods=["GET"])
def get_tour_dates():
    all_tours = TourDate.query.all()
    return jsonify([
        {
            "id": t.id,
            "date": t.date,
            "venue": t.venue,
            "city": t.city,
            "VIP": t.VIP,
            "tickets": t.tickets,
            "link": t.link,
        }
        for t in all_tours
    ])
