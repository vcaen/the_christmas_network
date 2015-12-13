var AppRouter = Backbone.Router.extend({
 
    routes:{
        "":"list",
        "post/:id":"postDetails"
    },
 
    list:function () {
        this.posts = new Posts();
        this.postListView = new PostListView({model:this.posts});
        this.posts.fetch();
        $('#sidebar').html(this.postListView.render().el);
    },
 
    postDetails:function (id) {
        this.post = this.posts.get(id);
        this.postView = new PostView({model:this.post});
        $('#content').html(this.postView.render().el);
    }
});
var app = new AppRouter();
Backbone.history.start();