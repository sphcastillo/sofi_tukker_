from flask import Blueprint, jsonify
from models.bread_good import BreadGood

bread_routes = Blueprint('bread_routes', __name__)

@bread_routes.route('/api/bread-goods', methods=['GET'])
def get_bread_goods():
    goods = BreadGood.query.all()
    data = [
        {
            "id": good.id,
            "title": good.title,
            "price": good.price,
            "image": good.image,
            "link": good.link,
        } for good in goods
    ]
    return jsonify(data)