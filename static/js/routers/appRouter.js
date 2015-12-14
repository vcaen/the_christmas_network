var AppRouter = Backbone.Router.extend({
 
    routes:{
        "":"list",
        "post/:id":"postDetails"
    },
 
    list:function () {
        
       // $('#sidebar').html(this.postListView.render().el);


        this.posts = new Posts();
        var self = this;
        this.posts.fetch({
            success:function () {
                self.postListView = new PostListView({model:self.posts});
                $('#sidebar').html(self.postListView.render().el);
                if (self.requestedId) self.postDetails(self.requestedId);
            }
        });

    },
 
    postDetails:function (id) {
        if (this.posts) {
            this.post = this.posts.get(id);
            if (this.postView) this.postView.close();
            this.postView = new PostView({model:this.post});
            $('#content').html(this.postView.render().el);
        } else {
            this.requestedId = id;
            this.list();
        }
    }
});
var app = new AppRouter();
Backbone.history.start();