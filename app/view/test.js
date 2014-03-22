Ext.define('raxa.view.test',{
  extend: 'Ext.Panel',
  alias: 'widget.test',
  xtype: 'test',
  requires: [ 'raxa.view.Locations', 'raxa.view.Providers'],
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
      id: 'getLocationsButton'
    },
    {
      xtype: 'button',
      text: Messages.raxa.view.test.getProvidersButton.text,
      ui: 'forward',
      width: 300,
      margin:30,
      id : 'getProvidersButton'
    }]
  }
});