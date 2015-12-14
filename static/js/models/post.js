var Post = Backbone.Model.extend({
    defaults: {
        id: "",
        user: "",
        title: "",
        content: "",
        date: undefined
    },

    urlRoot: "api/post"
});