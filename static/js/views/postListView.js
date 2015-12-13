var PostListView = Backbone.View.extend({
 
    tagName:'ul',
 
    initialize:function () {
        this.model.bind("reset", this.render, this);
        var self = this;
        this.model.bind("add", function (post) {
            $(self.el).append(new PostListItemView({model:post}).render().el);
        });
    },
 
    render:function (eventName) {
        window.model = this.model;
        console.log(window.model); //.models[0].attributes.objects
        _.each(this.model.models, function (post) {
            console.log(" hey ");
            console.log(post);
            $(this.el).append(new PostListItemView({model:post}).render().el);
        }, this);
        return this;
    }
 
});

var PostListItemView = Backbone.View.extend({
 
    tagName:"li",
 
    template:_.template($('#tpl-post-list-item').html()),

    initialize:function () {
        this.model.bind("change", this.render, this);
        this.model.bind("destroy", this.close, this);
    },
 
    render:function (eventName) {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    },

    close:function () {
        $(this.el).unbind();
        $(this.el).remove();
    }
 
});