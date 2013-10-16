;(function(){
/**
 * Created with JetBrains PhpStorm.
 * User: Karl
 * Date: 2013-10-08
 * Time: 10:59 AM
 * To change this template use File | Settings | File Templates.
 */

// Restaurants ------------------------------------------------------
App.Restaurants = Backbone.Model.extend({
    defaults: {
        "logo":  ""
    }
});

App.RestaurantsCollection = Backbone.Collection.extend({
    model: App.Restaurants,
//    url:'api/restaurants'
    url:"http://theplayatimes.com/welcome/api/v1/listings/restaurant/true.json"

//    url:function(){return "http://theplayatimes.com/welcome/api/v1/listings/restaurant/true.json";},

    // override backbone synch to force a jsonp call
//    sync: function(method, model, options) {
//        // Default JSON-request options.
//        var params = _.extend({
//            type:         'GET',
//            dataType:     'jsonp',
//            url:			model.url(),
//            jsonp: 		"jsonpCallback",   // the api requires the jsonp callback name to be this exact name
//            processData:  false
//        }, options);
//
//        // Make the request.
//        var test = $.ajax(params);
//        console.log(test);
//        return test;
//    }
});

// Accommodations ------------------------------------------------------
App.Accommodations = Backbone.Model.extend();

App.AccommodationsCollection = Backbone.Collection.extend({
    model: App.Accommodations,
//    url:'api/accommodations'
    url:"http://theplayatimes.com/welcome/api/v1/listings/accommodation/true.json"
});


// Attractions ------------------------------------------------------
App.Attractions = Backbone.Model.extend();

App.AttractionsCollection = Backbone.Collection.extend({
    model: App.Attractions,
//    url:'api/attractions'
    url:"http://theplayatimes.com/welcome/api/v1/listings/attraction/true.json"
});


})();