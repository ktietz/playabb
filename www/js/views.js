; (function(){
/**
 * Created with JetBrains PhpStorm.
 * User: Karl
 * Date: 2013-10-08
 * Time: 11:00 AM
 * To change this template use Fi
 * le | Settings | File Templates.
 */


/* Layouts ---------------------------------------------------------------------------------------- */
App.Layout = Backbone.Marionette.Layout.extend({
    template: '#layout-tpl',
    regions: {
        header : 'header',
        content : '#stuff'
    }
});

App.InfoLayout = Backbone.Marionette.Layout.extend({
    template: '#infoLayout-tpl',
    regions: {
        header : 'header',
        content : '#stuff',
        pictures : '#pictures'
    }
});

App.MainMenuLayout = Backbone.Marionette.Layout.extend({
    template: '#menu-layout-tpl',
    regions: {
        header : 'header',
        image: '#masthead',
        content : '#stuff'
    },
    ui: {
        image: '#masthead img'
    },
    onRender: function(){
        var imageNumber = Math.floor(Math.random()*4);
        this.ui.image[0].src = 'img/mainpage/' + imageNumber + '.png';
    }
});

/* Main Menu ------------------------------------------------------------------------------------------ */

App.HomeView = Backbone.Marionette.CollectionView.extend({
//    template: '#home-tpl'
    tagName: 'ul',
    className: 'mainMenu',
    itemView: App.MenuListItemView
});

App.MenuListItemView = Backbone.Marionette.ItemView.extend({
    template:'#menu-li-tpl',
    tagName: 'li'
//    className: 'clearfix'
});


// Headers ---------------------------------------------------------------------------------------------
App.HeaderView = Backbone.Marionette.ItemView.extend({
    template: '#header-tpl',
    events: {
        'click .back' : 'goBack'
    },
    goBack: function() {
        App.router.goBack();
    }
});

App.MainMenuHeaderView = Backbone.Marionette.ItemView.extend({
    template: '#mainMenu-header-tpl'
});

// Generic --------------------------------------------------------------------------------------------
App.GenericListView = Backbone.Marionette.CollectionView.extend({
    itemView : App.GenericListItemView,
    tagName: 'ul',
    className: 'genericList itemList'
});

App.GenericListItemView = Backbone.Marionette.ItemView.extend({
    template: '#generic-li-tpl',
    tagName: 'li',
    className: 'clearfix nonfeatured',
    ui: {
        logo : '.logo',
        description : '.description',
        link : 'a'
    },
    onRender: function() {
        this.ui.link[0].href = window.location.hash + '/' + this.model.id;
        App.HideBlankListItemInformation(this);
        if (this.model.get('featured') === true){
            this.$el.removeClass('nonfeatured');
            this.$el.addClass('featured');
        }
    }
});

App.GenericInfoView = Backbone.Marionette.ItemView.extend({
    template: '#generic-page-tpl',
//    className: 'overthrow',
    ui: {
        phone : '.phone',
        email : '.email',
        website : '.website',
        address : '.address',
        logo : '.logo',
        buttons : '.buttons',
        telBtn : '.telephoneBtn',
        emailBtn : '.emailBtn',
        mapBtn : '.mapBtn',
        webBtn : '.websiteBtn'
//        pictures : '.pictures'
    },
    onRender: function(){
        App.HideBlankInformation(this);
        $(this.ui.webBtn).on("click", function(){
            console.log('Heyman');
            navigator.app.loadUrl(this.model.get('website'), { openExternal:true });
        });
        // Hide the buttons if it's featured
//        if (this.model.get('featured') !== true){
//            this.ui.buttons.addClass('hidden');
//        }
    }
});

App.PicturesView = Backbone.Marionette.CollectionView.extend({
    itemView: App.PictureView,
});

App.PictureView = Backbone.Marionette.ItemView.extend({
   template: '#image-tpl',
   className: 'picture'
});

// Error views ------------------------------------------------------------------------------------------------
App.ErrorView = Backbone.Marionette.ItemView.extend({
    template: '#nodata-tpl',
    className: 'errorMessage'
});


// Functions ------------------------------------------------------------------------------------------
App.HideBlankInformation = function(view) {
    if (view.model.get('telephone') === ""){
        view.ui.phone.addClass('hidden');
        view.ui.telBtn.addClass('hidden');
    }
    if (view.model.get('email') === ""){
        view.ui.email.addClass('hidden');
        view.ui.emailBtn.addClass('hidden');
    }
    if (view.model.get('website') === ""){
        view.ui.website.addClass('hidden');
        view.ui.webBtn.addClass('hidden');
    }
    if (view.model.get('address') === ""){
        view.ui.address.addClass('hidden');
    }
    if (view.model.get('location') === null){
        view.ui.mapBtn.addClass('hidden');
    }
    if (view.model.get('logo') === ""){
        view.ui.logo.addClass('hidden');
    }

};

App.HideBlankListItemInformation = function(view) {
    if (view.model.get('logo') === ""){
        view.ui.logo.addClass('hidden');
    }
    if (view.model.get('description') === ""){
        view.ui.description.addClass('hidden');
    }
};

})();


