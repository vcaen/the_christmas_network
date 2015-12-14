var User = Backbone.Model.extend({
    defaults: {
        id: undefined
    },

    urlRoot: "api/user"
});