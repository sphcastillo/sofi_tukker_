from flask import Blueprint, jsonify
from models.store_item import StoreItem

store_routes = Blueprint('store_routes', __name__)

@store_routes.route('/api/store-items', methods=['GET'])
def get_store_items():
    items = StoreItem.query.all()
    data = [
        {
            "id": item.id,
            "title": item.title,
            "image": item.image,
            "price": item.price,
        }
        for item in items
    ]
    return jsonify(data)