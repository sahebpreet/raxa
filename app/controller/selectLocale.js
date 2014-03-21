Ext.define('raxa.controller.selectLocale', {
    extend: 'Ext.app.Controller',
    config: {
	refs: {
	    selectLanguage: '#selectLanguageButton' //
	},
	control: {
	    selectLanguage: {
		tap: 'selectLanguageTap'
	    }
	}
    },
    selectLanguageTap: function(button, e, eOpts) {
	console.log('list item tap handler: ');
	{
	    lang = Ext.getCmp('selectLanguage').getValue();
	    console.log(Ext.getCmp('selectLanguage').getValue());
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
	}
    }
});

