Ext.define('raxa.controller.selectLocale', {
    extend: 'Ext.app.Controller',
    config: {
	
	stores: [
	    'Locations'
	],
	refs: {
	    selectLanguage: '#selectLanguageButton'
	},
	control: {
	    selectLanguage: {
		tap: 'selectLanguageTap'
	    }
	}
    },
    selectLanguageTap: function(button, e, eOpts) {
	lang = Ext.getCmp('selectLanguage').getValue();
	mainView = Ext.getCmp ( 'mainView');
	mainView.setMasked({
	    xtype:'loadmask',
	    message:'Detecting Your Current Location'
	});
	this.computeDistance();
	mainView.unmask();
	mainView.setMasked({
	    xtype:'loadmask',
	    message:'Loading next view'
	});
	this.loadNextView();
	mainView.unmask();
    },
    computeDistance:function(){
	Ext.device.Geolocation.getCurrentPosition({
	    success: this.onGeolocationSuccess,
	    failure: this.onGeolocationFailure
	});
    },
    loadNextView: function(){
	Ext.Loader.injectScriptElement( 'app/locale/Messages_' + lang + '.js', function(){
	    mainView = Ext.getCmp ( 'mainView');
	    mainContainer = Ext.getCmp ('mainContainer');
	    mainContainer.removeAll();
	    mainView.setDefaultBackButtonText (Messages.raxa.view.Main.defaultBackButtonText);
	    mainView.getNavigationBar().setTitle ( Messages.raxa.view.Main.title );
	    mainContainer.add(Ext.create('raxa.view.test'));
	    Ext.require('raxa.controller.test',function(){
		var c = Ext.create('raxa.controller.test', {application: this}), controllers;
		c.init();
		c.launch();
		controllers = this.getControllerInstances();
		controllers['raxa.controller.test'] = c;
		this.setControllerInstances(controllers);
	    }, raxa.app);
	});
    },
    onGeolocationFailure: function() {
	position = {
	    coords : {
		latitude: 28.437711,
		longitude: 77.044978
	    }
	};
	this.geolocation.initialConfig.success(position);
	//this.onGeolocationSuccess(position);
    },
    onGeolocationSuccess: function(position){
	var currentLocation = position.coords;
	locationStore=Ext.getStore('locationStore');
	var origin = new google.maps.LatLng(currentLocation.latitude, currentLocation.longitude);
	var destination = [];
	locationStore.each(function(record){
	    var dest = new google.maps.LatLng(record.data.latitude,record.data.longitude);
	    destination.push(dest);
	});
	service = new google.maps.DistanceMatrixService();
	service.getDistanceMatrix(
	    {
		origins: [origin],
		destinations: destination,
		travelMode: google.maps.TravelMode.DRIVING,
		avoidHighways: false,
		avoidTolls: false
	    },
	    function(response,status){
		if (status=="OK"){
		    result = response.rows[0].elements;
		    raxa.globals={distanceDictionary:{}};
		    i=0;
		    locationStore.each(function(record){
			distance = result[i].distance;
			if (!distance)
			    distance={text :Messages.distanceApi.DistanceNotFound};
			raxa.globals.distanceDictionary[record.data.uuid]=distance.text;
			i++;
		    });
		}
		else{
		    console.log("distance not recieved successfully");
		    locationStore.each(function(record){
			raxa.globals.distanceDictionary[record.data.uuid]=Messages.distanceApi.DistanceNotFound;
			i++;
		    });
		}
	    }
	);
    }
});

