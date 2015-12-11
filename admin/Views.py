# !/usr/bin/python
# -*- coding: utf8 -*-
from admin import forms

from flask import url_for, redirect, request
from flask.ext.admin import helpers
from flask_admin import form, expose, AdminIndexView
from flask_admin.contrib import sqla
from jinja2 import Markup
import flask_login as login

import os


class BaseModelView(sqla.ModelView):

    def is_accessible(self):
        return login.current_user.is_authenticated


class PictureView(BaseModelView):
    def _list_thumbnail(view, context, model, name):
        if not model.name:
            return ''

        print os.path.join(THUMBNAIL_FOLDER, form.thumbgen_filename(model.name))
        return Markup('<img src="%s"><span style="margin-left:10px">%s</span>'
                      % (url_for('static',
                                 filename=IMAGE_FOLDER + "/" + THUMBNAIL_FOLDER + "/" + form.thumbgen_filename(
                                     model.name))
                         , model.name))

    column_formatters = {
        'name': _list_thumbnail
    }

    # Alternative way to contribute field is to override it completely.
    # In this case, Flask-Admin won't attempt to merge various parameters for the field.
    form_extra_fields = {
        'name': form.ImageUploadField('Image',
                                      base_path=IMAGE_PATH,
                                      thumbnail_size=(100, 100, True))
    }


# class PictureSelectField(sqla)

class PostView(BaseModelView):
    column_auto_select_related = ('pictures')
    # form_extra_fields = {
    #     'pictures' : fields.DateField
    # }
    # form_overrides = {'pictures': fields.DateField}
    form_widget_args = {
        'pictures': {
            'rows': 1,
            'style': 'color: blue'
        }
    }

class PageView(BaseModelView):
    can_create = False
    can_delete = False
    form_excluded_columns = ('key')


class MyAdminIndexView(AdminIndexView):

    @expose('/')
    def index(self):
        if not login.current_user.is_authenticated:
            return redirect(url_for('.login_view'))
        return super(MyAdminIndexView, self).index()

    @expose('/login/', methods=('GET', 'POST'))
    def login_view(self):
        # handle user login
        form = forms.LoginForm(request.form)
        if helpers.validate_form_on_submit(form):
            user = form.get_user()
            login.login_user(user)

        if login.current_user.is_authenticated:
            return redirect(url_for('.index'))
        self._template_args['form'] = form
        return super(MyAdminIndexView, self).index()


    @expose('/logout/')
    def logout_view(self):
        login.logout_user()
        return redirect(url_for('.index'))
