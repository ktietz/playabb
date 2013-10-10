App = {
    start: function() {
        App.router = new App.AppRouter();
        Backbone.history.start();
    }
}