;(function(){
/**
 * Created with JetBrains PhpStorm.
 * User: Karl
 * Date: 2013-10-08
 * Time: 10:59 AM
 * To change this template use File | Settings | File Templates.
 */


App.MenuItems = Backbone.Model.extend({
    defaults: {
        "logo":  "",
        "icon":  ""
    }
});

App.getDynamicModelUrl = function(view) { // just swap which line is commented out to change location
//   return 'api/' + view; // this is for local
    return "http://theplayatimes.com/welcome/api/v1/listings/" + view + "/true.json"; // this is for running live
};

App.MenuCollection = Backbone.Collection.extend({
    model: App.MenuItems,
//    url: 'api/menu'
    url: 'http://theplayatimes.com/welcome/api/v1/listing_categories'
});

App.GenericModel = Backbone.Model.extend({
    defaults: {
        "logo":  ""
    }
});

App.GenericCollection = Backbone.Collection.extend({
    model: App.GenericModel,
    url: function(){
        return App.getDynamicModelUrl(window.location.hash.replace("#", ""));
    }
});

App.PicturesCollection = Backbone.Collection.extend({
   model: App.PictureModel
});

App.PictureModel = Backbone.Model.extend();

App.getModelUrl = function(view) { // just swap which line is commented out to change location
    return 'api/' + view; // this is for local
//    return "http://theplayatimes.com/welcome/api/v1/listings/" + view + '/true.json'; // this is for running live
};


//Restaurants ------------------------------------------------------
App.Restaurants = Backbone.Model.extend({
    defaults: {
        "logo":  "" // to make sure that it has a value.
    }
});

App.RestaurantsCollection = Backbone.Collection.extend({
    model: App.Restaurants,
    url: function() {
        data =  App.getModelUrl('restaurant');
        console.log(data);
        return data;
    }
//    url:"http://theplayatimes.com/welcome/api/v1/listings/restaurant/true.json"

});

//Accommodations ------------------------------------------------------
App.Accommodations = Backbone.Model.extend();

App.AccommodationsCollection = Backbone.Collection.extend({
    model: App.Accommodations,
    url: function() {
        return App.getModelUrl('accommodation');
    }
//    url:"http://theplayatimes.com/welcome/api/v1/listings/accommodation/true.json"
});


//Attractions ------------------------------------------------------
App.Attractions = Backbone.Model.extend();

App.AttractionsCollection = Backbone.Collection.extend({
    model: App.Attractions,
    url: function() {
        return App.getModelUrl('attraction');
    }
//    url:"http://theplayatimes.com/welcome/api/v1/listings/attraction/true.json"
});


})();