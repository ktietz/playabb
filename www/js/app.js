App = {
    start: function() {
        new App.AppRouter();
        Backbone.history.start();
    }
}