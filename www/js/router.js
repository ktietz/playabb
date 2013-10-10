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
        'restaurants/:id' : 'restaurant'
    },

    goBack: function() {
        window.history.back();
    },

    initialize: function() {
        var self = this;
        self.slider = new PageSlider($("#container"));

        App.layout = new App.Layout();
        App.layout.render();

    },

    home: function() {
        var self = this;
        self.homeView = new App.HomeView();
        this.slider.slidePage(self.homeView.render().$el);
//        this.slider.slidePage(App.mApp.content.show(self.homeView.render().$el));
    },

    restaurants: function(){
        var self = this;
        self.restaurantsList = new App.RestaurantsCollection();
        self.restaurantsList.fetch({
            success: function() {
                self.restaurantsView = new App.Layout({ collection : self.restaurantsList });

                self.restaurantsView.render();

                self.restaurantsView.header.show(new App.HeaderView());
                self.restaurantsView.content.show(new App.RestaurantsListView({
                    collection : self.restaurantsList,
                    itemView : App.RestaurantListItemView
                }));

                self.slider.slidePage(self.restaurantsView.$el);

//                self.restaurantsView = new App.RestaurantsView({
//                    collection : self.restaurantsList
////                    itemView : App.RestaurantListItemView
//                });
//
//                self.slider.slidePage(self.restaurantsView.render().$el);
////                App.mApp.content.show(self.restaurantsView);
            }
        });
    },

    restaurant: function() {

    }
});

})();