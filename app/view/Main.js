
Ext.Loader.setConfig({disableCaching: false});

Ext.define('raxa.view.Main', {
    extend: 'Ext.navigation.View',
    xtype: 'main',
    id: 'mainView',
    fullscreen: true,
    requires: [
        'Ext.TitleBar',
	'Ext.Map',
        //'raxa.view.SearchLocation',
	//'raxa.view.SearchDisease',
	//'raxa.view.GetLocationToolbar',
	'raxa.view.Locations',
	'raxa.view.Providers'
    ],
    config: {
        tabBarPosition: 'bottom',
	layout: {
	    type: 'card'
	},

	items: [{
	  xtype: 'panel',
	  title: 'RAXA DEMO APP',
	      items: [{
		xtype: 'button',
		text: 'Get Locations',
		ui: 'forward',
		width: 200,
		margin:30,
		handler: function (){
		  mainView = Ext.getCmp ('mainView');
		  mainView.add ({
		    xtype: 'locations',
		    title: 'Locations Near You'
		  });
		}
	      },
	      {
		xtype: 'button',
		text: 'Get Doctors',
		ui: 'forward',
		width: 200,
		margin:30,
		handler: function (){
		  mainView = Ext.getCmp ('mainView');
		  mainView.add ({
		    xtype: 'providers',
		    title: 'Doctors Near You'
		  });
		}
	      }]
	    //}
	}]

        /*items: [
            {
               title: 'Welcome',
                iconCls: 'home',

                scrollable: true,

                /*items: [
		{
			xtype: 'searchlocation'
		},
		{
			xtype: 'searchdisease'
		},
		{
			xtype: 'getlocationtoolbar',
			docked: 'top',
			title: 'Raxa Demo App'
		}]*/
		/*items: [
		{
			xtype: 'locations',
			title: 'Locations'
		}]    */            
            //}
       // ]
    }
});
