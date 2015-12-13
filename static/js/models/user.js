var User = Backbone.Model.extend({
    defaults: {
        id: "",
        name: ""
    },

    idAttribute: "id",
    initialize: function () {
        console.log('Users has been initialized');
        this.on("invalid", function (model, error) {
            console.log("Houston, we have a problem: " + error)
        });
    },
    constructor: function (attributes, options) {
        console.log('User\'s constructor had been called');
        Backbone.Model.apply(this, arguments);
    },
    validate: function (attr) {
        if (!attr.title) {
            return "Invalid BookName supplied."
        }
    },
    urlRoot: '/api/user'
});