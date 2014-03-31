Ext.define('raxa.view.Locations' ,{
  extend: 'Ext.dataview.List',
  alias : 'widget.locationlist',
  xtype: 'locations',
  requires: [ 'raxa.store.Locations', 'Ext.data.Store', 'Ext.Map' ],
  config: {
      deferEmptyText: true,
      emptyText: Messages.raxa.view.Locations.emptyText,
      itemTpl: Ext.create('Ext.XTemplate',Messages.raxa.view.Locations.itemTpl,{
	  getDistance: function(uuid){
	      distanceDict=raxa.globals.distanceDictionary;
	      return distanceDict[uuid];
	  }
      }),
      onItemDisclosure: true,
      store: {xclass : 'raxa.store.Locations'}
  },
});