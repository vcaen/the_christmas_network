# !/usr/bin/python
# -*- coding: utf8 -*-


from wtforms import form, fields, validators

from werkzeug.security import check_password_hash
from app import db
from model import User

# Define login and registration forms (for flask-login)
class LoginForm(form.Form):
    login = fields.StringField(validators=[validators.required()])
    password = fields.PasswordField(validators=[validators.required()])

    def validate_login(self, field):
        user = self.get_user()

        print "Userpassword %s  self : %s " % (user.password, self.password.data)
        if user is None or not check_password_hash(user.password, self.password.data):
            raise validators.ValidationError(u"Nom d'utilisateur ou mot de passe incorrect.")

    def get_user(self):
        return db.session.query(User).filter_by(username=self.login.data).first()
