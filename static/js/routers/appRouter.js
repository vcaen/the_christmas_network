var AppRouter = Backbone.Router.extend({
 
    routes:{
        "":"list",
        "user/:id":"userDetails",
        "post/new": "newPost"
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
        this.user = new User({id:id});
        self = this;
        this.user.fetch({
            success: function (response) {                
                self.userView = new UserView({model:response});
                $('#userDetails').html(self.userView.render().el);
            }
        }); 
    },
    newPost: function() {
        app.postView = new PostView({model:new Post()});
        $('#allPosts').prepend(app.postView.render().el);
    }
 
});
var app = new AppRouter();
Backbone.history.start();