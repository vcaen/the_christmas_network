var Picture = Backbone.Model.extend({
    defaults: {
        id: "",
        file: ""
    },

    urlRoot: "api/picture/"
});