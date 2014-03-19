Ext.define('raxa.view.test',{
  extend: 'Ext.Panel',
  alias: 'widget.test',
  xtype: 'test',
  requires: [ 'raxa.view.Locations', 'raxa.view.Providers' ],
  config: {
    layout:{
      type  : 'vbox',
      align : 'stretch'
    },
    items: [{
      xtype: 'button',
      text: Messages.raxa.view.test.getLocationsButton.text,
      ui: 'forward',
      width: 300,
      margin:30,
      handler: function (){
	mainView = Ext.getCmp ('mainView');
	mainView.add ({
	  xtype: 'locations',
	  title: Messages.raxa.view.Locations.title
	});
      }
    },
    {
      xtype: 'button',
      text: Messages.raxa.view.test.getProvidersButton.text,
      ui: 'forward',
      width: 300,
      margin:30,
      handler: function (){
	mainView = Ext.getCmp ('mainView');
	mainView.add ({
	  xtype: 'providers',
	  title: Messages.raxa.view.Providers.title
	});
      }
    }]
  }
});