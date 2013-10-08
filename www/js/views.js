; (function(){
/**
 * Created with JetBrains PhpStorm.
 * User: Karl
 * Date: 2013-10-08
 * Time: 11:00 AM
 * To change this template use Fi
 * le | Settings | File Templates.
 */


App.HeaderView = Backbone.View.extend({
    el: 'header',

    template: _.template($('#header-tpl').html()),

    render: function() {
       $(this.el).html(this.template());
       return this;
   }
});

// Restaurants --------------------------------------------------------
App.HomeView = Backbone.View.extend({
    template:_.template($('#home-tpl').html()),

    initialize: function() {
        this.render();
    },

    render: function() {
        $(this.el).html(this.template());
        return this;
    }
});

App.RestaurantsView = Backbone.View.extend({
    initialize: function() {
        this.model.bind("reset", this.render, this);
    },

    render: function() {
        $(this.el).append(new App.HeaderView().render().el);
        var listView = new App.RestaurantsListView({model : this.model}).render().el;
        $(this.el).append(listView);

        return this;
    }
});

App.RestaurantsListView = Backbone.View.extend({
    tagName: 'ul',
//    template: _.template('#restaurants-tpl'),
    className: 'restaurantList itemList',

    initialize: function() {
        this.model.bind("reset", this.render, this);
    },

    render: function() {
//        $(this.el).append(this.template());
        // for each restaurant in the model, create a list item and put it in the list.
        _.each(this.model.models, function(restaurant) {
            $(this.el).append(new App.RestaurantListItemView({model:restaurant}).render().el);
        }, this)
        return this;
    }
});


App.RestaurantListItemView = Backbone.View.extend({
    tagName: 'li',
    className: 'clearfix',
    template: _.template($('#restaurant-li-tpl').html()),

    render: function() {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    }

});





})();


