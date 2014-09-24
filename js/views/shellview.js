ShellView = Backbone.View.extend({

     initialize:function (options) {
       city = options.city;
       console.log(city)
      
    },

   render:function () {
      var self = this;
 	  var citypic = new CityPicCollection([],{city: city});
	   citypic.fetch({
			success: function () {    
     
			 this.template = _.template($('#picTemplate').html(),{citypic: citypic}); 
			 self.$el.html(this.template);
				return self.el;
				}
		});		
		
	 	
   }
    /*initialize:function (options) {
       this.template = _.template( tpl.get('ShellView'));
       city = options.city;
       console.log(city)
      
    },
    render:function () {
       this.$el.html(this.template());	   
       var subcity = new CityCollection([],{city: city});
	   var self = this;
	   subcity.fetch({
			success: function () {		
				subcityView = new SubcitiesView({
					model: subcity
				});
				subcityView.render();
		        $("#subcity-content", this.el).html(subcityView.el); 
	 		}   
	  });
	  
	  var citypic = new CityPicCollection([],{city: city});
	   citypic.fetch({
			success: function () {	
				cityPicView = new CityPicView({
					model: citypic
				});
				cityPicView.render();
			    $("#myCarouselItem", this.el).html(cityPicView); 
                     
			}   
	 });  	
	  
       
       return this.el;
    }*/  

});

		