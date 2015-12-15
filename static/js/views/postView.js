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
        var model  = {            
            title:$('#title').val(),
            content:$('#content').val()
        };
        $.ajax({
            url: '/api/post',
            type: 'POST',           
            data: JSON.stringify({"title":model.title, "content":model.content, "user_id":"8"}),
            dataType: 'json',
            contentType: "application/json",
            success: function(data) {
                app.posts.add(new Post(data));
                $('#title').val('');
                $('#content').val('')
            }
        });
        //app.posts.create(this.model.attributes);
        return false;
    }, 	
 
    close:function () {
        $(this.el).unbind();
        $(this.el).empty();
    }
});