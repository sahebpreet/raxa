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
	Ext.require('raxa.controller.Locations',function(){
	    var c = Ext.create('raxa.controller.Locations', {application: this}), controllers;
	    c.init();
	    c.launch();
	    controllers = this.getControllerInstances();
	    controllers['raxa.controller.Locations'] = c;
	    this.setControllerInstances(controllers);
	}, raxa.app);
    },
    getProvidersTap: function(button, e, eOpts) {
	mainView = Ext.getCmp ('mainView');
	mainView.add ({
	  xtype: 'providers',
	  title: Messages.raxa.view.Providers.title
	});
	Ext.require('raxa.controller.Providers',function(){
	    var c = Ext.create('raxa.controller.Providers', {application: this}), controllers;
	    c.init();
	    c.launch();
	    controllers = this.getControllerInstances();
	    controllers['raxa.controller.Providers'] = c;
	    this.setControllerInstances(controllers);
	}, raxa.app);
    }
});

