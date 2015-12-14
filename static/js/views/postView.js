var PostView = Backbone.View.extend({
 
    template:_.template($('#tpl-newPost').html()),

 
    render:function (eventName) {
        $(this.el).html(this.template(this.model.attributes));
        return this;
    },

    events:{
        "click .save":"savePost",
        "click .delete":"deletePost"
    },

    savePost:function () {
        console.log("save");
        this.model.set({            
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
 
    close:function () {
        $(this.el).unbind();
        $(this.el).empty();
    }
});