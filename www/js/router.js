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
        '' : 'home'
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
        self.menuList = new App.MenuCollection();
        self.menuList.fetch({
            success: function(){
                self.homeView = new App.Layout();
                self.homeView.render();

                self.homeView.header.show(new App.MainMenuHeaderView());
                self.homeView.content.show(new App.HomeView({
                    collection : self.menuList,
                    itemView : App.MenuListItemView
                }));

                self.slider.slidePage(self.homeView.$el);

                // Add a route for each item that was added to the main menu.
                self.menuList.each(function(item){
                    App.router._addAppRoute(self, item.get('url'), 'listView');
                    App.router._addAppRoute(self, item.get('url') + '/:id', 'itemView');
                });
            },
            error: function() {
                self.nodata(self);
            }
        });
    },

    listView: function() {
        var self = this;
        var viewType = window.location.hash.replace("#", "");

        self.collection = new App.GenericCollection();
//        self.collection.url(App.getDynamicModelUrl(viewType));
        self.collection.fetch({
            success: function() {
                self.dynamicView = new App.Layout();
                self.dynamicView.render();
                // add the title of the page
                self.dynamicView.header.show(new App.HeaderView());
                self.dynamicView.content.show(new App.GenericListView({
                    collection : self.collection,
                    itemView : App.GenericListItemView
                }));

                self.slider.slidePage(self.dynamicView.$el);
            },
            error: function() {
                self.nodata(self);
            }
        });
    },

    itemView: function(id) {
        var self = this;

        self.itemData = self.collection.get(id);
        self.view = new App.Layout();
        self.view.render();

        self.view.header.show(new App.HeaderView());
        self.view.content.show(new App.GenericInfoView({
            model : self.itemData
        }));

        self.slider.slidePage(self.view.$el);
    },



    nodata: function(passedView) {
        passedView.view = new App.Layout();
        passedView.view.render();

        passedView.view.header.show(new App.MainMenuHeaderView());
        passedView.view.content.show(new App.ErrorView());

        passedView.slider.slidePage(passedView.view.$el);

    }

//    restaurant: function(id) {
//        var self = this;
//
//        self.restaurantItem = self.restaurantsList.get(id);
//        self.restaurantView = new App.Layout();
//        self.restaurantView.render();
//
//        self.restaurantView.header.show(new App.HeaderView());
//        self.restaurantView.content.show(new App.RestaurantInfoView({
//            model : self.restaurantItem
//        }));
//
//        self.slider.slidePage(self.restaurantView.$el);
//    },

//    restaurants: function(){
//        var self = this;
//        self.restaurantsList = new App.RestaurantsCollection();
//        self.restaurantsList.fetch({
//            success: function() {
//                self.restaurantsView = new App.Layout();
//                self.restaurantsView.render();
//
//                self.restaurantsView.header.show(new App.HeaderView());
//                self.restaurantsView.content.show(new App.RestaurantsListView({
//                    collection : self.restaurantsList,
//                    itemView : App.RestaurantListItemView
//                }));
//
//                self.slider.slidePage(self.restaurantsView.$el);
//            }
//        });
//    },
//
//    accommodations: function(){
//        var self = this;
//        self.accommodationsList= new App.AccommodationsCollection();
//        self.accommodationsList.fetch({
//            success: function() {
//                self.accommodationsView = new App.Layout();
//                self.accommodationsView.render();
//
//                self.accommodationsView.header.show(new App.HeaderView());
//                self.accommodationsView.content.show(new App.RestaurantsListView({
//                    collection : self.accommodationsList,
//                    itemView : App.AccommodationsListItemView
//                }));
//
//                self.slider.slidePage(self.accommodationsView.$el);
//            },
//            error: function(){
//                console.log('Could not get data for accommodations.');
//            }
//        });
//    },
//
//    attractions: function(){
//        var self = this;
//        self.attractionsList= new App.AttractionsCollection();
//        self.attractionsList.fetch({
//            success: function() {
//                self.attractionsView = new App.Layout();
//                self.attractionsView.render();
//
//                self.attractionsView.header.show(new App.HeaderView());
//                self.attractionsView.content.show(new App.RestaurantsListView({
//                    collection : self.attractionsList,
//                    itemView : App.AttractionsListItemView
//                }));
//
//                self.slider.slidePage(self.attractionsView.$el);
//            }
//        });
//    }
});

})();