Ext.define('raxa.controller.LocationToolbar', {
    extend: 'Ext.app.Controller',
    config: {
	refs: {
	    searchLocation: '#searchLocation',
	    sortLocation: '#sortLocation'
	},
	control: {
	    sortLocation: {
		change: 'sortLocations'
	    }
	},
	routes : {}
    },
    sortLocations: function(field,newValue,oldValue,eOpts){
    }
});

