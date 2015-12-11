from flask.ext.restless import APIManager
from model import User, Post, Picture


# Create the Flask-Restless API manager.

def init_manager(app, db):
    manager = APIManager(app, flask_sqlalchemy_db=db)

    # Create API endpoints, which will be available at /api/<tablename> by
    # default. Allowed HTTP methods can be specified as well.
    manager.create_api(User,
                       methods=['GET', 'POST', 'DELETE'],
                       preprocessors={
                           'POST': [pre_post_user],
                       }, )
    manager.create_api(Post, methods=['GET', 'POST', 'DELETE'])
    manager.create_api(Picture, methods=['GET', 'POST', 'DELETE'])


def pre_post_user(data=None, **kw):
    if 'password' in data:
        from werkzeug.security import generate_password_hash
        data['password'] = generate_password_hash(data['password'])

