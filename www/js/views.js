; (function(){
/**
 * Created with JetBrains PhpStorm.
 * User: Karl
 * Date: 2013-10-08
 * Time: 11:00 AM
 * To change this template use Fi
 * le | Settings | File Templates.
 */


App.HeaderView = Backbone.Marionette.ItemView.extend({
//    el: 'header',
//    className: 'back',
    template: '#header-tpl',
    events: {
        'click .back' : 'goBack'
    },
    goBack: function() {
        App.router.goBack();
    }
});

App.HomeView = Backbone.Marionette.ItemView.extend({
    template: '#home-tpl'
});


// Restaurants --------------------------------------------------------

App.Layout = Backbone.Marionette.Layout.extend({
    template: '#layout-tpl',

    regions: {
        header : 'header',
        content : '#stuff'
    }
});

App.RestaurantsListView = Backbone.Marionette.CollectionView.extend({
    itemView : App.RestaurantListItemView,
    tagName: 'ul',
    className: 'restaurantList itemList'
});


App.RestaurantListItemView = Backbone.Marionette.ItemView.extend({
    template: '#restaurant-li-tpl',
    tagName: 'li',
    className: 'clearfix'
});

App.RestaurantItemView = Backbone.View.extend({
    // TODO: create its own model to get a single item
    render: function() {
        $(this.el).html(new HeaderView());
        $(this.el).html(new RestaurantInfoView({model : this.model}));
        return this;
    }
});

App.RestaurantInfoView = Backbone.View.extend({
    template: _.template($('#restaurant-page-tpl').html()),

    render: function() {
        $(this.el).append(this.template(this.model.toJSON()));
        return this;
    }
});





})();


