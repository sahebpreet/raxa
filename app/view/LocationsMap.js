Ext.define('raxa.view.LocationsMap',{
	extend: 'Ext.Map',
	xtype: 'locationsmap',
	alias: 'widget.locationsmap',
	requires: ['Ext.Map'],
	config: {
		useCurrentLocation: true
	}
});

