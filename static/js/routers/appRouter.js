var AppRouter = Backbone.Router.extend({
 
    routes:{
        "":"list",
        "user/:id":"userDetails"
    },
 
    list:function () {
        this.posts = new Posts();
        var self = this;
        this.posts.fetch({
            success:function () {
                self.postListView = new PostListView({model:self.posts});
                $('#allPosts').html(self.postListView.render().el);
            }
        });

    },
    userDetails: function(id) {
        this.users = new Users();
        var self = this;
        this.users.fetch({
            success:function () {
                /*self.user = users.get(id);
                self.userView = new userView({model:self.user});
                $('#user').html(self.postListView.render().el);
                if (self.requestedId) self.postDetails(self.requestedId);*/
                console.log(users);
            }
        });
    }
 
});
var app = new AppRouter();
Backbone.history.start();