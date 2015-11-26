import json

from flask import Flask, send_from_directory, redirect
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
db = SQLAlchemy(app)

app.config.from_pyfile('flaskapp.cfg')


@app.route('/api/login', methods=['GET', 'POST'])
def index():
    data = {}
    data['code'] = 202
    data['message'] = "user_logged"
    return json.dumps(data)

@app.route('/api/profile/<username>')
def profil(username):
    return redirect("http://www.facebook.com/" + username)

@app.route('/api/profile/<username>/post')
def getPostsForUser(username):
    data = {}
    data.code = 202
    data.message = "ok"

    posts = []
    post = {}
    post.title = "New Post"
    post.content = "Content"
    posts.add(post)


@app.route('/<path:resource>')
def serveStaticResource(resource):
    return send_from_directory('static/', resource)



if __name__ == '__main__':
    app.run()
