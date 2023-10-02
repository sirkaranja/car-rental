from flask import Flask
from models import db
from flask_migrate import Migrate

app = Flask(__name__)

# Configure your database connection URL
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///your_database.db'  # Use your preferred database URL here
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False  # Disable Flask-SQLAlchemy modification tracking

# Initialize the database
db.init_app(app)

# Initialize database migrations (optional but recommended)
migrate = Migrate(app, db)

# Import your routes and views here (e.g., create routes for your car rental application)

if __name__ == '__main__':
    app.run(debug=True)
