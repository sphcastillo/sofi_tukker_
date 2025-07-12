from models import db

class TourDate(db.Model):
    __tablename__ = 'tour_dates'

    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.String(100), nullable=False)
    venue = db.Column(db.String(255), nullable=False)
    city = db.Column(db.String(255), nullable=False)
    VIP = db.Column(db.Boolean, default=False)
    tickets = db.Column(db.Boolean, default=False)
    link = db.Column(db.String(500), nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "date": self.date,
            "venue": self.venue,
            "city": self.city,
            "VIP": self.VIP,
            "tickets": self.tickets,
            "link": self.link,
        }