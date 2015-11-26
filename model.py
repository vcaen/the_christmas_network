# !/usr/bin/python
# -*- coding: utf8 -*-
import datetime

from app import db


post_picture = db.Table('post_picture',
    db.Column('post_id', db.Integer, db.ForeignKey('tag.id')),
    db.Column('picture_id', db.Integer, db.ForeignKey('page.id'))
)


class Picture(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(255), nullable=True)
    date = db.Column(db.DateTime, default=datetime.datetime.now())

    def __repr__(self):
        return self.name


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(255), unique=True, nullable=False, default="default")
    password = db.Column(db.String(255), nullable=False)
    firstname = db.Column(db.String(255), nullable=False)
    lastname = db.Column(db.String(255), nullable=False)
    picture_id = db.Column(db.Integer, db.ForeignKey('picture.id'))
    picture = db.relationship("Picture", uselist=False, backref="user")
    is_admin = db.Column(db.Boolean,nullable=False, default=False)

    def __init__(self, username, password):
        self.username = username
        self.password = password

    # Flask-Login integration
    def is_authenticated(self):
        return True

    def is_active(self):
        return True

    def is_anonymous(self):
        return False

    def get_id(self):
        return self.id

    # Required for administrative interface
    def __unicode__(self):
        return self.username


class Posts(db.Model) :
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    content = db.Column(db.String, nullable=False)
