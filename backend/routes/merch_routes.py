from flask import Blueprint, jsonify
from models.merch_product import MerchProduct

merch_routes = Blueprint('merch_routes', __name__)

@merch_routes.route('/api/merch-products', methods=['GET'])
def get_merch_products():
    products = MerchProduct.query.all()
    data = [
        {
            "id": product.id,
            "title": product.title,
            "price": product.price,
            "image": product.image,
            "link": product.link,
        } for product in products
    ]
    return jsonify(data)