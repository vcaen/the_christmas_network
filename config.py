# !/usr/bin/python
# -*- coding: utf8 -*-
import os



THUMBNAIL_FOLDER = 'thumb'
SMALL_IMAGE_FOLDER = 'small'
COMPRESSED_IMAGE_FOLDER = 'compressed'
IMAGE_FOLDER = 'image'
FILE_FOLDER = 'file'
IMAGE_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), "static", IMAGE_FOLDER)
THUMBNAIL_PATH = os.path.join(IMAGE_PATH, THUMBNAIL_FOLDER)
SMALL_IMAGE_PATH = os.path.join(IMAGE_PATH, SMALL_IMAGE_FOLDER)
COMPRESSED_IMAGE_PATH = os.path.join(IMAGE_PATH, COMPRESSED_IMAGE_FOLDER)
FILE_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), "static", FILE_FOLDER)



def get_data_path(app):
    return os.getenv('OPENSHIFT_DATA_DIR',
                     app.root_path)