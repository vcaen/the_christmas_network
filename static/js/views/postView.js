var PostView = Backbone.View.extend({
 
    template:_.template($('#tpl-post-details').html()),

    initialize:function () {
        this.model.bind("change", this.render, this);
    },
 
    render:function (eventName) {
        $(this.el).html(this.template(this.model));
        return this;
    },

    events:{
        "click .save":"savePost",
        "click .delete":"deletePost"
    },

    savePost:function () {
        this.model.set({
            user:$('#user').val(),            
            title:$('#title').val(),
            content:$('#content').val()
        });
        if (this.model.isNew()) {
            app.posts.create(this.model);
        } else {
            this.model.save();
        }
        return false;
    },
 	
 	deletePost:function () {
        this.model.destroy({
            success:function () {
                alert('Post deleted successfully');
                window.history.back();
            }
        });
        return false;
    },
 
    close:function () {
        $(this.el).unbind();
        $(this.el).empty();
    }
});