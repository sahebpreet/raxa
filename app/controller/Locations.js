 Ext.define('raxa.controller.Locations', {
        extend: 'Ext.app.Controller',

        config: {
            stores: ['Locations'],

            refs: {
                locationsList: '#locationListView',
		main: 'Main'
            },

            control: {
                locationsList: {
                    disclosure: 'onLocationDisclosure'
                }
            }
        },

        launch: function() {
            console.log(this);
	    console.log(this.getLocationsList());
	    console.log(main);
            debugger;
            //var stationsStore = Ext.getStore('Stations');
//             stationsStore.on({
//                 load: 'onStationsLoad',
//                 scope: this
//             });
//             stationsStore.load();
        },

        onLocationDisclosure: function( item, record, target, index, e, eOpts ){      
	    mainView = Ext.getCmp ('mainView');
	    locationData = item.data;
	    console.log(locationData);
	    console.log(main);
	    mainView.add([{
		xtype: 'map',
		id: 'googleMap',
		mapOptions: {
		    center: new google.maps.LatLng ( locationData.latitude, locationData.longitude ),
		    mapTypeId: google.maps.MapTypeId.ROADMAP,
		    zoom: 17
		},
		initialize: function() {
		    var gMap = this.getMap();
		    console.log(gMap.getCenter());
		    var marker = new google.maps.Marker({
			map: gMap,
			animation: google.maps.Animation.BOUNCE,
			position: gMap.getCenter()
		    });
		}
	    }]);
	  }
    });