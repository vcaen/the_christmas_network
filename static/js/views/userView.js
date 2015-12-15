var UserView = Backbone.View.extend({

    template:_.template($('#tpl-user-details').html()),
    
    render:function (eventName) {
        var attrs = this.model.attributes;
        var user = attrs;
        user.friends = attrs.friends.length;
        user.posts = attrs.posts.length;
        $(this.el).html(this.template(user));
        return this;
    },

    close:function () {
        $(this.el).unbind();
        $(this.el).remove();
    }
 
});

