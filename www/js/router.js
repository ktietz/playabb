; (function(){
/**
 * Created with JetBrains PhpStorm.
 * User: Karl
 * Date: 2013-10-08
 * Time: 11:00 AM
 * To change this template use File | Settings | File Templates.
 */

// Router
App.AppRouter = Backbone.Marionette.AppRouter.extend({

    routes: {
        '' : 'home',
        'restaurants' : 'restaurants',
        'restaurants/:id' : 'restaurant',
        'accommodations' : 'accommodations',
        'accommodations/:id' : 'accommodation',
        'attractions' : 'attractions',
        'attractions/:id' : 'attraction'
    },

    goBack: function() {
        window.history.back();
    },

    initialize: function() {
        var self = this;
        self.slider = new PageSlider($("#container"));

        App.layout = new App.Layout();
        App.layout.render();

//        if (App.iscroll) {
//            console.log('Refresh iScroll');
//            App.iscroll.refresh();
//        } else {
//            App.iscroll = new iScroll($('#container'), {desktopCompatibility: true});
////                    self.iscroll = new iScroll('stuff', {hScrollbar: false, vScrollbar: false });
//            console.log('New iScroll');
//        }

    },

    home: function() {
        var self = this;
        self.homeView = new App.HomeView();
        this.slider.slidePage(self.homeView.render().$el);
//        this.slider.slidePage(App.mApp.content.show(self.homeView.render().$el));

//        setTimeout(function () {
//            App.iscroll.refresh();
//        }, 0);
    },

    restaurants: function(){
        var self = this;
        self.restaurantsList = new App.RestaurantsCollection();
        self.restaurantsList.fetch({
            success: function() {
//                self.restaurantsView = new App.Layout({ collection : self.restaurantsList });
                self.restaurantsView = new App.Layout();
                self.restaurantsView.render();

                self.restaurantsView.header.show(new App.HeaderView());
                self.restaurantsView.content.show(new App.RestaurantsListView({
                    collection : self.restaurantsList,
                    itemView : App.RestaurantListItemView
                }));

                self.slider.slidePage(self.restaurantsView.$el);

//                if (self.iscroll) {
//                    console.log('Refresh iScroll');
//                    self.iscroll.refresh();
//                } else {
//                    self.iscroll = new iScroll('stuff', {desktopCompatibility: true});
////                    self.iscroll = new iScroll('stuff', {hScrollbar: false, vScrollbar: false });
//                    console.log('New iScroll');
//                }

//                setTimeout(function () {
//                    App.iscroll.refresh();
//                }, 0);
            }
        });
    },

    restaurant: function(id) {
        var self = this;
//        self.restaurantsList = new App.RestaurantsCollection();
//        self.restaurantsList.fetch({
//            success: function() {
                    self.restaurantItem = self.restaurantsList.get(id);
                    self.restaurantView = new App.Layout();
                    self.restaurantView.render();

                    self.restaurantView.header.show(new App.HeaderView());
                    self.restaurantView.content.show(new App.RestaurantInfoView({
                        model : self.restaurantItem
                    }));

                    self.slider.slidePage(self.restaurantView.$el);
//                });
//            }
    },

    accommodations: function(){
        var self = this;
        self.accommodationsList= new App.AccommodationsCollection();
        self.accommodationsList.fetch({
            success: function() {
                self.accommodationsView = new App.Layout();
                self.accommodationsView.render();

                self.accommodationsView.header.show(new App.HeaderView());
                self.accommodationsView.content.show(new App.RestaurantsListView({
                    collection : self.accommodationsList,
                    itemView : App.AccommodationsListItemView
                }));

                self.slider.slidePage(self.accommodationsView.$el);
            }
        });
    },

    attractions: function(){
        var self = this;
        self.attractionsList= new App.AttractionsCollection();
        self.attractionsList.fetch({
            success: function() {
                self.attractionsView = new App.Layout();
                self.attractionsView.render();

                self.attractionsView.header.show(new App.HeaderView());
                self.attractionsView.content.show(new App.RestaurantsListView({
                    collection : self.attractionsList,
                    itemView : App.AttractionsListItemView
                }));

                self.slider.slidePage(self.attractionsView.$el);
            }
        });
    }
});

})();