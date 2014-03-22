Ext.define('raxa.view.Locations' ,{
  extend: 'Ext.dataview.List',
  alias : 'widget.locationlist',
  xtype: 'locations',
  requires: [ 'raxa.store.Locations', 'Ext.data.Store', 'Ext.Map' ],
  config: {
    deferEmptyText: true,
    emptyText: Messages.raxa.view.Locations.emptyText,
    itemTpl: Messages.raxa.view.Locations.itemTpl,
    onItemDisclosure: true,
    store: {xclass : 'raxa.store.Locations'}
  }
});

