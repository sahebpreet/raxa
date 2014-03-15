Ext.define('raxa.view.Locations' ,{
  extend: 'Ext.dataview.List',
  id: 'locationListView',
  alias : 'widget.locationlist',
  xtype: 'locations',
  requires: [ 'raxa.store.Locations', 'Ext.data.Store' ],
  config: {
    deferEmptyText: true,
    emptyText: 'No Data is available',
    itemTpl: '<div>{display} (10.34 Km)</div><div>★★★☆☆</div>',
    store: {xclass : 'raxa.store.Locations'},
    onItemDisclosure: function( item, record, target, index, e, eOpts ){      
      mainView = Ext.getCmp ('mainView');
      locationData = item.data;
      console.log(locationData);
      mainView.add([{
	xtype: 'map',
	mapOptions: {
	  center: new google.maps.LatLng ( locationData.latitude, locationData.longitude ),
	  mapTypeId: google.maps.MapTypeId.ROADMAP,
	  zoom: 17
	},
	initialize: function() {
	var gMap = this.getMap();
	console.log(gMap);
	var marker = new google.maps.Marker({
	  map: gMap,
	  animation: google.maps.Animation.BOUNCE,
	  position: gMap.center
	});
      }
      }]);
    }
  }
  /*store: {
    model: 'LocationList',
    autoLoad: true,
    xtype: new Object(),
    storeId: 'locationstore',
    listeners: {
       load: function(record, records, successful, operation, eOpts){console.log('successful'+successful);}
    }
  },
  itemTpl: '<div>{display} (21 Km)</div><div>★★★☆☆</div>',
  config:{
    onItemDisclosure: true,
    emptyText: 'No Data is available',
    deferEmptyText: false
  }*/
    /*
  config: {
    store: {
	  fields: ['name', 'age'],
	  data: [
	      {name: 'Jamie Avins',  age: 100},
	      {name: 'Rob Dougan',   age: 21},
	      {name: 'Tommy Maintz', age: 24},
	      {name: 'Jacky Nguyen', age: 24},
	      {name: 'Ed Spencer',   age: 26},
	      {name: 'Ivan Jouikov', age: 26}
	  ]
      },
      itemTpl: '<div>{name} ({age} Km)</div><div>★★★☆☆</div>',
      onItemDisclosure: true
  }*/
  /*config: {
    itemTpl: '<div>{display} ({distance} Km)</div><div>★★★☆☆</div>',
    onItemDisclosure: true,
    data: [
        { display: 'Max Hospital',distance: 12 },
	{ display: 'Medanta Hospital',distance: 23 },
	{ display: 'Max Life Hospital',distance: 45 }
    ]
  }*/
});

