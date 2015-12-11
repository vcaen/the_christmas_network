# !/usr/bin/python
# -*- coding: utf8 -*-

import flask_login as login
from app import app, db
from model import User

def init_login():
    login_manager = login.LoginManager()
    login_manager.init_app(app)

    # Create user loader function
    @login_manager.user_loader
    def load_user(user_id):
        return db.session.query(User).get(user_id)
