
from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
from flask.ext.restful import Api



app = Flask(__name__)
db = SQLAlchemy(app)
api = Api(app)

import model

app.config.from_pyfile('flaskapp.cfg')

import admin

from manager import init_manager
init_manager(app, db)



@app.route('/')
def index():
    return render_template('index.html')

