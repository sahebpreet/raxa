Ext.define('raxa.controller.test', {
    extend: 'Ext.app.Controller',
    config: {
	refs: {
	    getLocationsButton: '#getLocationsButton',
	    getProvidersButton: '#getProvidersButton'
	},
	control: {
	    getLocationsButton: {
		tap: 'getLocationsTap'
	    },
	    getProvidersButton: {
		tap: 'getProvidersTap'
	    }
	},
	routes : {}
    },
    getLocationsTap: function(button, e, eOpts) {
	mainView = Ext.getCmp ('mainView');
	mainView.add ({
	  xtype: 'locations',
	  title: Messages.raxa.view.Locations.title
	});
    },
    getProvidersTap: function(button, e, eOpts) {
	mainView = Ext.getCmp ('mainView');
	mainView.add ({
	  xtype: 'providers',
	  title: Messages.raxa.view.Providers.title
	});
    }
});

