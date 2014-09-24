HomeView = Backbone.View.extend({
    initialize:function () {
        this.template = _.template( tpl.get('HomeView'));
    },
    render:function () {
        this.$el.html(this.template());
        return this.el;
    },
    
    events: {
        "click": "search"
    },

    search: function (event) {
        var src = this.$('img').attr('src');
        var cityName = src.substring(src.indexOf('/')+1, src.lastIndexOf('/'));
        //router.navigate("cities/" + cityName, true);
        router.navigate(cityName , true);
        return false;
    }

});