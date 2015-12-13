var Post = Backbone.Model.extend({
    defaults: {
        id: ""
    },

    idAttribute: "id",
    initialize: function () {
        console.log('Posts has been initialized');
        this.on("invalid", function (model, error) {
            console.log("Houston, we have a problem: " + error)
        });
    },
    constructor: function (attributes, options) {
        console.log('Posts\'s constructor had been called');
        Backbone.Model.apply(this, arguments);
    },
    validate: function (attr) {
       console.log("validate");
    },
    urlRoot: '/post'
});