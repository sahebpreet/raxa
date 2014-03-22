Ext.define('raxa.view.Providers' ,{
  extend: 'Ext.dataview.List',
  id: 'providersListView',
  alias : 'widget.providerslist',
  xtype: 'providers',
  requires: [ 'raxa.store.Providers', 'Ext.data.Store' ],
  config: {
    deferEmptyText: true,
    emptyText: Messages.raxa.view.Providers.emptyText,
    itemTpl: Messages.raxa.view.Providers.itemTpl,
    store: {xclass : 'raxa.store.Providers'}
  }
});