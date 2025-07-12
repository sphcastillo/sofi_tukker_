from models import db

class StoreItem(db.Model):
    __tablename__ = 'store_items'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    image = db.Column(db.String(255), nullable=False)
    price = db.Column(db.String(10), nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "image": self.image,
            "price": self.price,
        }