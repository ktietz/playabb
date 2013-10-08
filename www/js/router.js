; (function(){
/**
 * Created with JetBrains PhpStorm.
 * User: Karl
 * Date: 2013-10-08
 * Time: 11:00 AM
 * To change this template use File | Settings | File Templates.
 */

// Router
App.AppRouter = Backbone.Router.extend({

    routes: {
        '' : 'home',
        'restaurants' : 'restaurants'
    },

    initialize: function() {
        var self = this;
        self.slider = new PageSlider($("#container"));

    },

    home: function() {
        this.homeView = new App.HomeView();
        this.slider.slidePage(this.homeView.$el);
    },

    restaurants: function(){
        var self = this;
        self.restaurantsList = new App.RestaurantsCollection();
        self.restaurantsList.fetch({
            success: function() {
                self.restaurantsView = new App.RestaurantsView({model:self.restaurantsList});
//                $('#container').html(self.restaurantsView.render().el);
                self.slider.slidePage(self.restaurantsView.render().$el);
            }
        });
    }
});

})();