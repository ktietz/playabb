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
                self.homeView = new App.MainMenuLayout();
                self.homeView.render();

                self.homeView.header.show(new App.MainMenuHeaderView());
                self.homeView.content.show(new App.HomeView({
                    collection : self.menuList,
                    itemView : App.MenuListItemView
                }));

                self.slider.slidePage(self.homeView.$el);

                // Add a route for each item that was added to the main menu.
                self.menuList.each(function(item){
                    App.router._addAppRoute(self, item.get('id').toString(), 'listView');
                    App.router._addAppRoute(self, item.get('id').toString() + '/:id', 'itemView');
                });
            },
            error: function() {
                self.nodatahome(self);
            }
        });
    },

    listView: function() {
        var self = this;
//        var viewType = window.location.hash.replace("#", "");

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
//                $('.overthrow').height($('.overthrow').height() - 60);
            },
            error: function() {
                self.nodataback(self);
            }
        });
    },

    itemView: function(id) {
        var self = this;

        self.itemData = self.collection.get(id);
        self.view = new App.InfoLayout();
        self.view.render();

        self.view.header.show(new App.HeaderView());
        self.view.content.show(new App.GenericInfoView({
            model : self.itemData
        }));


//        if (self.itemData.attributes.featured === true){
        /* Get images from the item's images attribute. Loop through them and put each individual one in a model.
         Then add that model to the collection so it can be passed to the view. */
        self.picturesArray = new Array;
        self.picturesCollection = new App.PicturesCollection();
        // Loop through array of pictures
        _.each(self.itemData.attributes.images, function(image){
            // Create a new model out of the picture and Add it to the collection
            var picture = new App.PictureModel({url : image});
            self.picturesCollection.add(picture);
        });

        self.view.pictures.show(new App.PicturesView({
            collection : self.picturesCollection,
            itemView : App.PictureView
        }));
//        }

        self.slider.slidePage(self.view.$el);
    },



    nodatahome: function(passedView) {
        passedView.view = new App.Layout();
        passedView.view.render();

        passedView.view.header.show(new App.MainMenuHeaderView());
        passedView.view.content.show(new App.ErrorView());

        passedView.slider.slidePage(passedView.view.$el);

    },

    nodataback: function(passedView) {
        passedView.view = new App.Layout();
        passedView.view.render();

        passedView.view.header.show(new App.HeaderView());
        passedView.view.content.show(new App.ErrorView());

        passedView.slider.slidePage(passedView.view.$el);

    }

});

})();