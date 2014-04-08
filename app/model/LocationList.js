Ext.define( 'raxa.model.LocationList', {
	alias: 'widget.locationmodel',
	extend: 'Ext.data.Model',
	config: {
	  fields: [
	    'uuid',
	    'display',
	    'distance',
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
	  proxy: {
		  type: 'ajax',
		  url: '/openmrs/ws/rest/v1/location?v=full',
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