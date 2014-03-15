Ext.define( 'raxa.model.LocationList', {
	alias: 'widget.locationmodel',
	extend: 'Ext.data.Model',
	config: {
	  fields: [
	    'uuid',
	    'display',
	    'name',
	    'description',
	    'address1',
	    'address2',
	    'cityVillage',
	    'stateProvince',
	    'country',
	    'postalCode',
	    'latitude',
	    'longitude',
	    'countryDistrict',
	    'address3',
	    'address4',
	    'address5',
	    'address6',
	    'tags',
	    'parentLocation',
	    'childLocations',
	    'retired',
	    'auditInfo',
	    'attributes',
	    'links',
	    'resourceVersion'
	  ],
	  //fields:[ 'name','age'],
	  proxy: {
		  type: 'ajax',
		  url: '/openmrs-standalone/ws/rest/v1/location?v=full',
		  //url: '/raxa/app/model/data/users.json',
		  reader: {
			  type: 'json',
			  rootProperty: 'results'
		  },
		  listeners: {
		    metachange: function( proxy, data, eOpts ){console.log(data+'inside proxy listeners');}
		  }
	  },
	autoload: true
	}
});
/*
Ext.define('raxa.model.LocationList', {

    extend: 'Ext.data.Model',

    config: {
        fields: ['id', 'name', 'age', 'gender']
        /*proxy: {
            type: 'rest',
            url : 'data/users',
            reader: {
                type: 'json',
                rootProperty: 'users'
            }
        }*/
  //  }
//});
