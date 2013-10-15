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

App.Layout = Backbone.Marionette.Layout.extend({
    template: '#layout-tpl',

    regions: {
        header : 'header',
        content : '#stuff'
    }

});

// Restaurants --------------------------------------------------------
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

App.RestaurantInfoView = Backbone.Marionette.ItemView.extend({
    template: '#restaurant-page-tpl',
//    className: 'scroller',
    ui: {
        phone : '.phone',
        email : '.email',
        website : '.website',
        address : '.address'
    },
    onRender: function(){
       App.HideBlankInformation(this);
    }

});

App.HideBlankInformation = function(view) {
    if (view.model.get('telephone') === ""){
        view.ui.phone.addClass('hidden');
    }
    if (view.model.get('email') === ""){
        view.ui.email.addClass('hidden');
    }
    if (view.model.get('website') === ""){
        view.ui.website.addClass('hidden');
    }
    if (view.model.get('address') === ""){
        view.ui.address.addClass('hidden');
    }
};

// Accommodations --------------------------------------------------------
App.AccommodationsListView = Backbone.Marionette.CollectionView.extend({
    itemView : App.AccommodationsListItemView,
    tagName: 'ul',
    className: 'accommodationsList itemList'
});

App.AccommodationsListItemView = Backbone.Marionette.ItemView.extend({
    template: '#accommodation-li-tpl',
    tagName: 'li',
    className: 'clearfix'
});

App.AccommodationInfoView = Backbone.Marionette.ItemView.extend({
    template: '#accommodation-page-tpl',
    ui: {
        phone : '.phone',
        email : '.email',
        website : '.website',
        address : '.address'
    },
    onRender: function(){
        App.HideBlankInformation(this);
    }
});


// Attractions --------------------------------------------------------
App.AttractionsListView = Backbone.Marionette.CollectionView.extend({
    itemView : App.AttractionsListItemView,
    tagName: 'ul',
    className: 'attractionsList itemList'
});

App.AttractionsListItemView = Backbone.Marionette.ItemView.extend({
    template: '#attraction-li-tpl',
    tagName: 'li',
    className: 'clearfix'
});

App.AttractionInfoView = Backbone.Marionette.ItemView.extend({
    template: '#attraction-page-tpl',
    ui: {
        phone : '.phone',
        email : '.email',
        website : '.website',
        address : '.address'
    },
    onRender: function(){
        App.HideBlankInformation(this);
    }
});


})();


