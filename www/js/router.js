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
//        window.history.back();
    },

    initialize: function() {
//        var self = this;
//        self.slider = new PageSlider($("#container"));

//        App.layout = new App.Layout();
//        App.layout.render();
    },

    home: function() {
        var self = this;
        self.menuList = new App.MenuCollection();
        self.menuList.fetch({
            success: function(){
                self.homeView = new App.MainMenuLayout();
//                self.slider.slidePage(self.homeView.$el);
                self.changeHomePage(self.homeView, self.menuList);

                // Add a route for each item that was added to the main menu.
                self.menuList.each(function(item){
                    App.router._addAppRoute(self, item.get('id').toString(), 'listView');
                    App.router._addAppRoute(self, item.get('id').toString() + '/:id', 'itemView');
                    console.log(App.router.routes[Backbone.history.fragment] + " " + self);
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
//                self.dynamicView.render();
                // add the title of the page
//                self.dynamicView.header.show(new App.HeaderView());
//                self.dynamicView.content.show(new App.GenericListView({
//                    collection : self.collection,
//                    itemView : App.GenericListItemView
//                }));
                self.changePage(self.dynamicView, self.collection);
//                //self.slider.slidePage(self.dynamicView.$el);
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
        self.view = new App.Layout();
//        self.view.render();
//
//        self.view.header.show(new App.HeaderView());
//        self.view.content.show(new App.GenericInfoView({
//            model : self.itemData
//        }));
        self.changePageItemView(self.view, self.itemData);
//        self.slider.slidePage(self.view.$el);
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

    },

    changeHomePage: function (page, data) {
        $(page.el).attr('data-role', 'page');
        $(page.el).attr('id', 'now');
        page.render();

        page.header.show(new App.MainMenuHeaderView());
        page.content.show(new App.HomeView({
            collection : data,
            itemView : App.MenuListItemView
        }));

        $('body').append($(page.el));
//        console.log($('#container').html());

//        var transition = $.mobile.defaultPageTransition;
        // We don't want to slide the first page
//        if (this.firstPage) {
//            transition = 'none';
//            this.firstPage = false;
//        }
        $.mobile.changePage($(page.el), {changeHash:false});

        $('a').attr('data-ajax', 'false'); // This is here to make the a links work right.

    },

    changePage: function (page, data) {
        $(page.el).attr('data-role', 'page');
        $(page.el).attr('id', 'now');
        page.render();

        page.header.show(new App.HeaderView());
        page.content.show(new App.GenericListView({
            collection : data,
            itemView : App.GenericListItemView
        }));

        $('body').append($(page.el));

        $.mobile.changePage($(page.el), {changeHash:false});

        $('a').attr('data-ajax', 'false'); // This is here to make the a links work right.

    },

    changePageItemView: function(page,data) {
        $(page.el).attr('data-role', 'page');
        $(page.el).attr('id', 'now');

        page.render();

        page.header.show(new App.HeaderView());
        page.content.show(new App.GenericInfoView({
            model : data
        }));

        $('body').append($(page.el));

        $.mobile.changePage($(page.el), {changeHash:false});

        $('a').attr('data-ajax', 'false'); // This is here to make the a links work right.

//        self.slider.slidePage(self.view.$el);
    }

});

})();