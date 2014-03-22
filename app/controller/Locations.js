Ext.define('raxa.controller.Locations', {
    extend: 'Ext.app.Controller',
    config: {
	refs: {
	    locationsListView: 'locations'
	},
	control: {
	    locationsListView: {
		disclose: 'onItemDisclosure'
	    }
	},
	routes : {}
    },
    onItemDisclosure: function( item, record, target, index, e, eOpts ){
	mainView = Ext.getCmp ('mainView');
	locationData = record.data;
	mainView.add([{
	    xtype: 'map',
	    config: {
		centered:true
	    },
	    mapOptions: {
		center: new google.maps.LatLng ( locationData.latitude, locationData.longitude ),
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		zoom: 17
	    },
	    initialize: function() {
		var gMap = this.getMap();
		google.maps.event.addListenerOnce(gMap, 'idle', function() {
		    center = gMap.getCenter();
		    google.maps.event.trigger(gMap, 'resize');
		    gMap.setCenter(center);
		});
		var marker = new google.maps.Marker({
		    map: gMap,
		    animation: google.maps.Animation.BOUNCE,
		    position: gMap.getCenter()
		});
	    }
	}]);
     }
});

