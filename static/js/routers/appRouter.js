var AppRouter = Backbone.Router.extend({
    idUser:undefined,
    routes:{
        "":"list",
        "user/:id":"userDetails",
    },
 
    list:function () {        
        if(!this.idUser) {
            $("#loginData").show();    
        } else {
            $("#loginData").hide();
            this.posts = new Posts();
            var self = this;
            this.posts.fetch({
                success:function () {
                    self.postListView = new PostListView({model:self.posts});
                    $('#allPosts').html(self.postListView.render().el);
                    self.newPost(); 
                }
            });
        }   
    },
    userDetails: function(id) {     
        $("#loginData").hide();
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
    },
    newUser: function() {
        var user  = {            
            firstname:$('#firstname').val(),
            lastname:$('#lastname').val(),
            username:$('#username').val(),
            password:$('#pwd').val()
        };
        $.ajax({
            url: '/api/user',
            type: 'POST',           
            data: JSON.stringify({"firstname":user.firstname, 
                "lastname":user.lastname,
                "username":user.username,
                "password":user.password,
                "picture_id":2
                }),
            dataType: 'json',
            contentType: "application/json",
            success: function(data) {
                $("#signUpForm").hide();
                $(".signUpButton").hide();
                app.list();
            }
        });
        
    }
    
 
});

var app = new AppRouter();
Backbone.history.start();

$(".loginButton").on("click", function() {
    username = $("#username").val();
    app.users = new Users();
    var self = this;
    app.users.fetch({
        success:function (data) {
            _.each(data.models[0].attributes.objects, function (user) {
                if(user.username == username) {
                    app.idUser = user.id;
                    app.list();
                    app.userDetails(user.id);
                }
            }, this); 
        }
    });
});

$(".signUpButton").on("click", function() {
    if($("#signUpForm").is(":visible")) {
        app.newUser();
    } else {
        $("#signUpForm").show();
    }
});