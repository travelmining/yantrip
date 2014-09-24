Backbone.View.prototype.close = function() {
        console.log('Closing view ' + this);
        if (this.beforeClose) {
            this.beforeClose();
        }
        this.remove();
        this.unbind();
    };

var appRouter = Backbone.Router.extend({

        initialize: function() {
            this.$content = $("#content");
        },

        routes: {
            "": "home",
            ":city": "list"
        },
        
        list: function(city) {
               //console.log(city);
               shellView = new ShellView({city: city});
               shellView.render();
               this.$content.html(shellView.el);

             
               /*var citypic = new CityPicCollection([],{city: city});
               //var self = this;
               citypic.fetch({
					success: function () {	
                        cityPicView = new CityPicView({
                            model: citypic
                        });
                        cityPicView.render();
                        //self.$content.html(subcityView.el);
                       shellView.$("#myCarouselItem").html(cityPicView.el);                        
					}   
             });  */           

        },
        

        home: function () {
        // Since the home view never changes, we instantiate it and render it only once

			/*if (!homelView) {
				homelView = new HomeView();
				homelView.render();
			} else {
				console.log('reusing home view');
				homelView.delegateEvents(); // delegate events when the view is recycled
			}*/
			homeView = new HomeView();
			homeView.render();			
			this.$content.html(homeView.el);
        }

});

$(document).on("ready", function () {
    tpl.loadTemplates(["HomeView","SubcitiesView","ShellView","CityPicView"],
        function () {
            router = new appRouter();
            Backbone.history.start();
        });
}); 
