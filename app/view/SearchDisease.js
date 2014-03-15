Ext.define('raxa.view.SearchDisease',{
	extend: 'Ext.Panel',
	alias: 'widget.searchdisease',
	xtype: 'searchdisease',
	config: {
		layout:{
		    type  : 'vbox',
		    align : 'stretch'
		},
		items: [{
			xtype: 'fieldset',
			title: 'Search Disease',
			instructions: 'Enter name of the concept',
			layout: 'vbox',			
			items: [{
				xtype: 'textfield',
				name: 'disease',
				label: 'Disease',
			}]
		}/*,
		{
			xtype: 'list',
			itemTpl: '{disease}'
		},
		{
			xtype: 'label',
			html: 'showing 10 of 100 items',
			anchors: 'left'
		}*/
		]
		
	}
});

