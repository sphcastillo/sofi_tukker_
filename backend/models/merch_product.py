from models import db

class MerchProduct(db.Model):
    __tablename__ = 'merch_products'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    price = db.Column(db.String(10), nullable=False)
    image = db.Column(db.String(255), nullable=False)
    link = db.Column(db.String(255), nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "price": self.price,
            "image": self.image,
            "link": self.link,
        }