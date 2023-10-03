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



















if __name__ == '__main__':
    app.run(debug=True)
