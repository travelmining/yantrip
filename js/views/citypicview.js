CityPicView = Backbone.View.extend({

        //tagName: 'ul',

        initialize: function() {
            console.log('I m here');
            this.model.bind("reset", this.render, this); 
        },

        render: function() {
            /*_.each(this.model.models, function(data) {
                console.log(data.get('photoname'));
            }, this);*/
             
			var picTemplate = _.template($('#picTemplate').html(),{citypic: this.model.models});
			//$("#myCarouselItem", this.el).html(picTemplate); 
            return this.el;
        }
    });








