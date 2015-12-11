from flask.ext.restful import Resource


class PostAPI(Resource):

    def get(self, id):
        return {'test': 'ok %d' % id}

    def post(self, id):
        pass

    def delete(self, id):
        pass


