from flask import Flask, jsonify, request
from models import db, User, Booking, Car, Payment
from flask_migrate import Migrate

app = Flask(__name__)

# Configure your database connection URL
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///carhire.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False  

# Initialize the database
db.init_app(app)
migrate = Migrate(app, db)


@app.route('/')
def home():
    return "<h2>Dashboard,/h2>"


app.route('/users', methods=['GET'])
def get_all_users():
    users = User.query.all()
    users_list=[]
    for user in users:
        try:
            user_data={
                'id': user.id,
                'name': user.name,
                'email': user.email,
                'role': user.role,
            }
            users_list.append(user_data)
        except Exception as e:
            print (f"Error processing users list {user.id}: {e}")
    return jsonify(users_list)

#method for adding new user
@app.route('/users', methods=['POST'])
def create_new_user():
    try:
        data = request.get_json()
        name = data.get('name')
        email = data.get('email')
        password = data.get('password')
        role = data.get('role')

        new_user = User(name=name, email=email, password=password, role=role)
        db.session.add(new_user)
        db.session.commit()

        return jsonify({'message': 'User created successfully', 'user_id': new_user.id}), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 500

#method to delete user
@app.route('/users/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    try:
        user = User.query.get(user_id)
        if not user:
            return jsonify({'error': 'User not found'}), 404

        db.session.delete(user)
        db.session.commit()

        return jsonify({'message': f'User with ID {user_id} deleted successfully'}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    

#method for adding new car
@app.route('/cars', methods=['POST'])
def create_new_car():
    try:
        data= request.get_json()
        brand= data.get('brand')
        model= data.get('model')
        transition= data.get('transition')
        seat_capacity= data.get('seat_capacity')
        speedometer= data.get('speedometer')
        image= data.get('image')

        new_car= Car(brand=brand,model=model,transition=transition,seat_capacity=seat_capacity,speedometer=speedometer,image=image)
        db.session.add(new_car)
        db.session.commit()

        return jsonify({'message': 'Car added successfully'}), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 500

#get method for cars
@app.route('/cars', methods=['GET'])
def get_all_cars():
    try:
        cars = Car.query.all()
        cars_list = []

        for car in cars:
            car_data = {
                'id': car.id,
                'brand': car.brand,
                'model': car.model,
                'transition': car.transition,
                'seat_capacity': car.seat_capacity,
                'speedometer': car.speedometer,
                'image': car.image,
            }
            cars_list.append(car_data)

        return jsonify({'cars': cars_list})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

#delete method for cars

@app.route('/users/<int:car_id>', methods=['DELETE'])
def delete_car(car_id):
    try:
        car = Car.query.get(car_id)
        if not car:
            return jsonify({'error': 'Car not found'}), 404
        
        db.session.delete(car)
        db.session.commit()

        return jsonify({'message': f"Car deleted successfully"}), 200
    except Exception as e:
        return jsonify({'error', str(e)}), 500


#update method for cars details
@app.route('/cars/<int:car_id>', methods=['PUT'])
def update_car(car_id):
    try:
        data = request.get_json()
        car = Car.query.get(car_id)

        if not car:
            return jsonify({'message': f'Car with ID {car_id} not found'}), 404

        # Update car attributes based on the request data
        car.brand = data.get('brand', car.brand)
        car.model = data.get('model', car.model)
        car.transition = data.get('transition', car.transition)
        car.seat_capacity = data.get('seat_capacity', car.seat_capacity)
        car.speedometer = data.get('speedometer', car.speedometer)
        car.image = data.get('image', car.image)

        db.session.commit()

        return jsonify({'message': f'Car with ID {car_id} updated successfully'}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500



#post method for booking 
@app.route('/bookings', methods=['POST'])
def create_booking():
    try:
        data = request.get_json()
        user_id = data.get('user_id')
        car_id = data.get('car_id')
        start_date = data.get('start_date')
        end_date = data.get('end_date')
        status = data.get('status')

        # Check if the user and car exist
        user = User.query.get(user_id)
        car = Car.query.get(car_id)

        if not user or not car:
            return jsonify({'message': 'User or car not found'}), 404

        new_booking = Booking(
            user_id=user_id,
            car_id=car_id,
            start_date=start_date,
            end_date=end_date,
            status=status
        )

        db.session.add(new_booking)
        db.session.commit()

        return jsonify({'message': 'Booking created successfully', 'booking_id': new_booking.id}), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    







#delete method for booking
@app.route('/bookings/<int:booking_id>', methods=['DELETE'])
def delete_booking(booking_id):
    try:
        booking= Booking.query.get(booking_id)
        if not booking:
            return jsonify({'error': 'Booking not found'}), 404
        db.session.delete(booking)
        db.session.commit()

        return jsonify({'message': f'Booking deleted successfully'}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500







if __name__ == '__main__':
    app.run(debug=True)
