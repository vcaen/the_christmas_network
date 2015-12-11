from app import db
import model

User = model.User

db.create_all()

if User.query.filter_by(username="test").count() == 0:
    from werkzeug.security import generate_password_hash
    db.session.add(User("test", generate_password_hash("test"),"test", "test"))
    db.session.commit()
