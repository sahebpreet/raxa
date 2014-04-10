Ext.define('raxa.view.LocationToolbar',{
  extend: 'Ext.Toolbar',
  alias: 'widget.locationtoolbar',
  xtype: 'locationtoolbar',
  config: {
    docked: 'top',
    items: [{
	xtype: 'textfield',
	id : 'searchLocation',
	placeHolder: 'search',
    },
    {
      xtype: 'selectfield',
      id: 'sortLocation',
      label: 'Sort By',
      docked: 'right',
      options: [
	{text:'Name', value:'name'},
	{text:'Distance', value: 'distance'}
      ]
    }]
  }
});