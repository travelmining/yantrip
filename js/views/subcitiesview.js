SubcitiesView = Backbone.View.extend({

        //tagName: 'ul',

        initialize: function() {
            this.model.bind("reset", this.render, this);
            //this.model.bind("add", this.appendNewWine, this);
        },

        render: function(eventName) {
            _.each(this.model.models, function(data) {
                this.appendNewLine(data);
            }, this);
            return this.el;
        },

        appendNewLine: function(data) {
            this.$el.append(new SubcitiesItemView({
                model: data
            }).render());
        }
    });

SubcitiesItemView = Backbone.View.extend({

        //tagName: "li",

        initialize: function() {
            this.template = _.template(tpl.get('SubcitiesView'));
            //this.model.bind("reset", this.render, this);
        },

        render: function(eventName) {
            this.$el.html(this.template(this.model.toJSON()));
            return this.el;
        }

    });







