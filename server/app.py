#!usr/bin/env python3
import datetime
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate  import Migrate
from models import db, User, Car,Booking,Payment
from datetime import datetime


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///carhire.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

migrate = Migrate(app,db)
db.init_app(app) 






if __name__ == '__main__':
    app.run(port=5555)
