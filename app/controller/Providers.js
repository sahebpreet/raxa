Ext.define('raxa.controller.Providers', {
    extend: 'Ext.app.Controller',
    config: {
	refs: {
	    locationsListView: 'providers'
	},
	control: {
	    locationsListView: {
		disclose: 'onItemDisclosure'
	    }
	},
	routes : {}
    },
    onItemDisclosure: function( item, record, target, index, e, eOpts ){
	console.log(record);
	url=record.data.person.identifiers[0].links[0].uri;
	Ext.Ajax.request({
	    url: url+'?v=full',
	    success: function(result) {
		var data  = Ext.JSON.decode(result.responseText).location;
		mainView = Ext.getCmp ('mainView');
		mainView.add([{
		    xtype: 'map',
		    mapOptions: {
			center: new google.maps.LatLng ( data.latitude, data.longitude ),
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			zoom: 17
		    }
		}]);
	    },
	    failure: function(result) {
		console.log(result);
	    }
	});
    }
});

