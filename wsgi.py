#!/usr/bin/python
import os

virtenv = os.path.join(os.environ.get('OPENSHIFT_PYTHON_DIR','.'), 'virtenv')
virtualenv = os.path.join(virtenv, 'bin/activate_this.py')
try:
    execfile(virtualenv, dict(__file__=virtualenv))
except IOError:
    pass
#
# IMPORTANT: Put any additional includes below this line.  If placed above this
# line, it's possible required libraries won't be in your searchable path
#

from app import app as application

#db.create_all()

#
# Below for testing only
#
if __name__ == '__main__':
    # from wsgiref.simple_server import make_server
    # httpd = make_server('localhost', 8051, application)
    # print "App is running on http://%s:%d" % httpd.server_address
    #
    # # Wait for a single request, serve it and quit.
    # httpd.serve_forever()
    application.run()
