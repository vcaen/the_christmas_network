from app import app
from flask.ext.restful import Api

api = Api(app)
from resources.post import PostAPI

api.add_resource(PostAPI, "/posts", endpoint="posts")
