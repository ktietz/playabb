; (function(){
/**
 * Created with JetBrains PhpStorm.
 * User: Karl
 * Date: 2013-10-08
 * Time: 11:00 AM
 * To change this template use Fi
 * le | Settings | File Templates.
 */




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

App.Layout = Backbone.Marionette.Layout.extend({
    template: '#layout-tpl',
    regions: {
        header : 'header',
        content : '#stuff'
    }
});

App.MainMenuLayout = Backbone.Marionette.Layout.extend({
    template: '#menu-layout-tpl',
    regions: {
        header : 'header',
        image: '#masthead',
        content : '#stuff'
    }
});

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
    template: '#mainMenu-header-tpl',
});

// Generic --------------------------------------------------------
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
        buttons : '.buttons'
    },
    onRender: function(){
        App.HideBlankInformation(this);
        if (this.model.get('featured') !== true){
            this.ui.buttons.addClass('hidden');
        }
//        this.ui.website.on('click', function(){window.open(this.ui.website[0].innerText, '_system');});
    }
});

// Error view ------------------------------------------------------------------------------------------------
App.ErrorView = Backbone.Marionette.ItemView.extend({
    template: '#nodata-tpl',
    className: 'errorMessage'
});


App.HideBlankInformation = function(view) {
    if (view.model.get('telephone') === ""){
        view.ui.phone.addClass('hidden');
    }
    if (view.model.get('email') === ""){
        view.ui.email.addClass('hidden');
    }
    if (view.model.get('website') === ""){
        view.ui.website.addClass('hidden');
    }
    if (view.model.get('address') === ""){
        view.ui.address.addClass('hidden');
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


