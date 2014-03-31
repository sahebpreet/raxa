
Ext.Loader.setConfig({disableCaching: false});

Ext.define('raxa.view.Main', {
    extend: 'Ext.navigation.View',
    xtype: 'main',
    id: 'mainView',
    fullscreen: true,
    requires: [
        'Ext.TitleBar',
	'Ext.MessageBox',
	//'Ext.Map',
        //'raxa.view.SearchLocation',
	//'raxa.view.SearchDisease',
	//'raxa.view.GetLocationToolbar',
	//'raxa.view.Locations',
	//'raxa.view.Providers',
	//'raxa.view.test',
	'raxa.view.selectLocale'
    ],

    config: {
	defaultBackButtonText: Messages.raxa.view.Main.defaultBackButtonText,
        tabBarPosition: 'bottom',
	layout: {
	    type: 'card'
	},

	items: [{
	  xtype: 'panel',
	  id : 'mainContainer',
	  title: Messages.raxa.view.Main.title,
	  items: [{
	    xtype: 'selectlocale',
	  }]
	}]
    }
});
