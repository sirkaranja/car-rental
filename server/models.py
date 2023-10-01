from flask import Flask
from flask_sqlalchemy import SQLAlchemy


app= Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///carhire.db'
db= SQLAlchemy(app)


class User(db.Model):
    __tablename__= 'users'
    id= db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    email= db.Column(db.String(), unique=True)
    password= db.Column(db.String(12))
    role = db.Column(db.Enum('user', 'admin'), nullable=False)



class Car(db.Model):
    __tablename__= 'cars'
    id= db.Column(db.Integer, primary_key=True)
    brand= db.Column(db.String(30), nullable=False)
    model= db.Column(db.String(), nullable=False)
    transition= db.Column(db.Enum('Automatic', 'Manual'), nullable=False)
    seat_capacity= db.Column(db.Integer)
    speedometer = db.Column(db.String(17))
    image = db.Column(db.String(255), nullable=False)


class Booking(db.Model):
    __tablename__= 'bookings'
    id= db.Column(db.Integer, primary_key=True)
    user_id = db.column(db.Integer, db.ForeignKey('users.id'))
    car_id= db.Column(db.Integer, db.ForeignKey('cars.id'), nullable= False)
    start_date= db.Column(db.Date, nullable=False)
    end_date= db.Column(db.Date, nullable=False)
    status = db.Column(db.Enum('Pending', 'Approved', 'Canceled'), nullable=False)
    created_at = db.Column(db.TIMESTAMP, nullable=False)
    updated_at = db.Column(db.TIMESTAMP, nullable=True)

    # relationship to access the user who made the booking
    user = db.relationship('User', backref=db.backref('bookings', lazy=True))

    # relationship to access the booked car
    car = db.relationship('Car', backref=db.backref('bookings', lazy=True))



class Payment(db.Model):
    __tablename__='payments'
    id= db.Column(db.Integer, primary_key=True)
    booking_id= db.Column(db.Integer, db.ForeignKey('bookings.id'), nullable=False)
    amount = db.Column(db.Numeric(10, 2), nullable=False)
    payment_date = db.Column(db.TIMESTAMP, nullable=False)
    payment_method = db.Column(db.Enum('PayPal', 'Credit Card', 'M-Pesa'), nullable=False)

    # relationship to access the booking associated with the payment
    booking = db.relationship('Booking', backref=db.backref('payments', lazy=True))
    




if __name__ == '__main__':
    with app.app_context():
        db.create_all() 
    app.run()