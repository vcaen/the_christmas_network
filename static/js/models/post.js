var Post = Backbone.Model.extend({
    defaults: {
        id: "",
        user: "",
        title: "",
        content: ""
    },

    urlRoot: "api/post"
});