Ext.define('raxa.view.GetLocationToolbar',{
	extend: 'Ext.Toolbar',
	alias: 'widget.getlocationtoolbar',
	xtype: 'getlocationtoolbar',
	config: {
		layout:{
		    type  : 'vbox',
		    align : 'stretch'
		},
		items: [{
			xtype:'button',
			ui: 'back',
			text: "Find Doctors",
			docked: 'left'
		},
		{
			xtype: 'button',
			ui: 'forward',
			text: "Find treatment Locations",
			docked: 'right'
		}]
	}
});

