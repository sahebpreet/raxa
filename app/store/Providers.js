Ext.define('raxa.store.Providers', {
    extend : "Ext.data.Store",
    requires : [ 'raxa.model.ProviderList' ],
    config : {
        storeId : 'providerStore',
        model : 'raxa.model.ProviderList',
	autoLoad: true
    }
});