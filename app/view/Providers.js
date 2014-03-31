Ext.define('raxa.view.Providers' ,{
  extend: 'Ext.dataview.List',
  alias : 'widget.providerslist',
  xtype: 'providers',
  requires: [ 'raxa.store.Providers', 'Ext.data.Store' ],
  config: {
    deferEmptyText: true,
    emptyText: Messages.raxa.view.Providers.emptyText,
    itemTpl: Messages.raxa.view.Providers.itemTpl,
    onItemDisclosure: true,
    store: {
	xclass : 'raxa.store.Providers'
    }
  }
});
