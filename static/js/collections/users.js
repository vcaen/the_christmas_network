var Users = Backbone.Collection.extend({
    model: User,
    url:"/api/user"
});