# !/usr/bin/python
# -*- coding: utf8 -*-
from login import init_login
from AdminViews import *
from app import app
from flask_admin import Admin
from model import *

init_login()

# Create admin
admin = Admin(app, name=u'INSA', template_mode='bootstrap3', index_view=MyAdminIndexView())
admin.add_view(BaseModelView(Post, db.session))
admin.add_view(PictureView(Picture, db.session))
admin.add_view(BaseModelView(User, db.session))

# path = op.join(op.dirname(__file__), IMAGE_PATH)
# admin.add_view(FileAdmin(path, IMAGE_PATH, name='Static Files'))