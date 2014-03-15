Ext.define('raxa.store.Locations', {
    extend : "Ext.data.Store",
    requires : [ 'raxa.model.LocationList' ],
    config : {
        storeId : 'locationStore',
        model : 'raxa.model.LocationList',
	autoLoad: true
    }
});