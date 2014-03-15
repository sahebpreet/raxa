Ext.define('raxa.view.SearchLocation',{
	extend: 'Ext.Panel',
	alias: 'widget.searchlocation',
	xtype: 'searchlocation',
	config: {
		layout:{
		    type  : 'vbox',
		    align : 'stretch'
		},
		items: [{
			xtype: 'fieldset',
			title: 'Enter your current Location',
			instructions: 'Enter the latitude and longitude of your location',
			layout: 'vbox',
			items: [{
				xtype: 'textfield',
				name: 'latitude',
				label: 'Latitude'
			},
			{
				xtype: 'textfield',
				name: 'longitude',
				label: 'Longitude'
			}]
		}]
	}
});

