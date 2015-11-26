from flask import Flask, redirect
import requests
app = Flask(__name__)


@app.route('/')
def hello_world():
    return redirect("https://www.facebook.com/cosmina.etegan", 200)


@app.route('/<f>')
def f(f):
    return f

if __name__ == '__main__':
    app.run(debug=True)
