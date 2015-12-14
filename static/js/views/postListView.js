var PostListView = Backbone.View.extend({
 
    tagName:'ul',
 
    initialize:function () {
        this.model.bind("reset", this.render, this);
        var self = this;
        /*this.model.bind("add", function (post) {
            $(self.el).append(new PostListItemView({model:post}).render().el);
        });*/
    },
 
    render:function (eventName) {
        _.each(this.model.models[0].attributes.objects, function (post) { 
            var picID = post.user.picture_id;
            this.pic = new Picture({id:picID});
            self = this;
            this.pic.fetch({
                success: function (response) {
                    var file = response.get("file");                    
                    post.userPic = file; 
                    $(self.el).append(new PostListItemView({model:post}).render().el);                  
                }
            });      
            
        }, this);
        return this;
    }
 
});

var PostListItemView = Backbone.View.extend({
 
    tagName:"li",
 
    template:_.template($('#tpl-post-details').html()),

    initialize:function () {
        //this.model.bind("change", this.render, this);
        //this.model.bind("destroy", this.close, this);
    },
 
    render:function (eventName) {
        $(this.el).html(this.template(this.model));
        return this;
    },

    close:function () {
        $(this.el).unbind();
        $(this.el).remove();
    }
 
});