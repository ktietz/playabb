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
    url:"api/restaurants" // Use this for testing.
//    url:"http://theplayatimes.com/welcome/rest/api/listing/publish/true.json" // Use this for live.
});

// Accommodations ------------------------------------------------------
App.Accommodations = Backbone.Model.extend();

App.AccommodationsCollection = Backbone.Collection.extend({
    model: App.Accommodations,
    url:"api/accommodations"
});


// Attractions ------------------------------------------------------
App.Attractions = Backbone.Model.extend();

App.AttractionsCollection = Backbone.Collection.extend({
    model: App.Attractions,
    url:"api/attractions"
});


})();