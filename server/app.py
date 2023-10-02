from flask import Flask
from models import db
from flask_migrate import Migrate

app = Flask(__name__)

# Configure your database connection URL
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///carhire.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False  

# Initialize the database
db.init_app(app)
migrate = Migrate(app, db)



if __name__ == '__main__':
    app.run(debug=True)
