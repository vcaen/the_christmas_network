var Post = Backbone.Model.extend({
    defaults: {
        id: "",
        user: "",
        title: "",
        content: "",
        userPic: "../appPhotos/santa-claus.jpg",
        date: undefined
    },

    urlRoot: "api/post"
});