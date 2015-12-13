/*var app = (function() {
    var api = {
        views: {},
        models: {},
        collections: {},
        content: null,
        router: null,
        todos: null,
        init: function() {
            this.content = $("#content");
        },
        changeContent: function(el) {
            this.content.empty().append(el);
            return this;
        },
        title: function(str) {
            $("h1").text(str);
            return this;
        }
    };
    var ViewsFactory = {
    	home: function() {
    		if(!this.homeView) {
    			this.homeView = new api.views.home({
    				el: $("#home")
    			});
    		}
    		return this.homeView;
    	}
    };
    var Router = Backbone.Router.extend({
    	routes: {
    		"new" : "newUser",
    		"edit/:index" : "editUser",
    		"delete/:index" : "deleteUser",
    		"" : "home",
    		"profile/:index" : "showProfile"
    	},
    	showProfile: function(index) {
    	},
    	home: function() {},
    	newUser: function() {},
    	deleteUser: function(index) {},
    	editUser: function(index) {},
    });
    api.router = new Router();

    return api;

})();

init: function() {
    this.content = $("#content");
    this.model = new api.model.user();
    ViewsFactory.home();
    return this;
}*/