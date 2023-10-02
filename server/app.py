from flask import Flask, jsonify
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


if __name__ == '__main__':
    app.run(debug=True)
