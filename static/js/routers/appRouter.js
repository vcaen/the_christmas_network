var AppRouter = Backbone.Router.extend({
 
    routes:{
        "":"list"
    },
 
    list:function () {
        this.posts = new Posts();
        var self = this;
        this.posts.fetch({
            success:function () {
                self.postListView = new PostListView({model:self.posts});
                $('#sidebar').html(self.postListView.render().el);
                if (self.requestedId) self.postDetails(self.requestedId);
            }
        });

    }
 
});
var app = new AppRouter();
Backbone.history.start();