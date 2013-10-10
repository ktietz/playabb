;(function(){
/**
 * Created with JetBrains PhpStorm.
 * User: Karl
 * Date: 2013-10-08
 * Time: 10:59 AM
 * To change this template use File | Settings | File Templates.
 */

// Restaurants ------------------------------------------------------
App.Restaurants = Backbone.Model.extend();

App.RestaurantsCollection = Backbone.Collection.extend({
    model: App.Restaurants,
    url:"api/restaurants"
//    url:"http://dev.karltietz.com/data/restaurantsData.json"
});

// Accommodations ------------------------------------------------------
App.Accommodations = Backbone.Model.extend();

App.AccommodationsCollection = Backbone.Collection.extend({
    model: App.Accommodations,
    url:"api/accommodations"
});


})();