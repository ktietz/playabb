App = {
    mApp:{},

    start: function() {
        App.mApp = new Backbone.Marionette.Application();
        App.mApp.onInitializeAfter = function(){
            App.router = new App.AppRouter();

//            App.mApp.addRegions({
//                content : '#container'
//            });

            if (Backbone.history) {
                Backbone.history.start();
            }

        };

        App.mApp.start();
    }

};