# !/usr/bin/python
# -*- coding: utf8 -*-
import datetime



from app import db



post_picture = db.Table('post_picture',
                        db.Column('post_id', db.Integer, db.ForeignKey('post.id')),
                        db.Column('picture_id', db.Integer, db.ForeignKey('picture.id'))
                        )

friendship = db.Table(
    'friendships', db.Model.metadata,
    db.Column('friend_a_id', db.Integer, db.ForeignKey('user.id'),
              primary_key=True),
    db.Column('friend_b_id', db.Integer, db.ForeignKey('user.id'),
              primary_key=True)
)


class Picture(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(255), nullable=True)
    date = db.Column(db.DateTime, default=datetime.datetime.now())
    file = db.Column(db.String(255), nullable=False)

    def __repr__(self):
        return self.file


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(255), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)
    firstname = db.Column(db.String(255), nullable=False)
    lastname = db.Column(db.String(255), nullable=False)
    picture_id = db.Column(db.Integer, db.ForeignKey('picture.id'), nullable=True)
    picture = db.relationship("Picture", uselist=False, backref="user")
    is_admin = db.Column(db.Boolean, nullable=False, default=True)
    friends = db.relationship("User", secondary=friendship,
                              primaryjoin=id == friendship.c.friend_a_id,
                              secondaryjoin=id == friendship.c.friend_b_id,
                              )

    def __init__(self, username, password, firstname, lastname):
        self.username = username
        self.password = password
        self.firstname = firstname
        self.lastname = lastname

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





class Post(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    content = db.Column(db.String, nullable=False)
    date = db.Column(db.DateTime)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    user = db.relationship('User', backref=db.backref('posts', lazy='dynamic'))

    def __init__(self, title, content, date=None):
        self.title = title
        self.content = content
        if date is None:
            self.date = datetime.utcnow()
