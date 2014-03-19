Ext.define('raxa.view.selectLocale',{
  extend: 'Ext.Panel',
  alias: 'widget.selectlocale',
  xtype: 'selectlocale',
  //id : "selectLocale",
  requires: [ 'Ext.field.Select' ],
  config: {
    layout:{
      type  : 'vbox',
      align : 'stretch'
    },
    items: [{
      xtype: 'selectfield',
      label: 'Choose Your Language',
      margin: 40,
      id: 'selectLanguage',
      options: [{
	text: 'english',
	value: 'en'
      },
      {
	text : 'hindi',
	value: 'hi'
      }]
    },
    {
      xtype: 'button',
      text: 'Next',
      top:"35%",
      right: "5%",
      width:232,
      ui : 'forward',
      docked:'right',
      handler: function (){
	lang = Ext.getCmp('selectLanguage').getValue();
	console.log(Ext.getCmp('selectLanguage').getValue());
	Ext.Loader.injectScriptElement( 'app/locale/Messages_' + lang + '.js', function(){
	  mainView = Ext.getCmp ( 'mainView');
	  mainContainer = Ext.getCmp ('mainContainer');
	  mainContainer.removeAll();
	  mainView.setDefaultBackButtonText (Messages.raxa.view.Main.defaultBackButtonText);
	  mainView.getNavigationBar().setTitle ( Messages.raxa.view.Main.title );
	  mainContainer.add(Ext.create('raxa.view.test'));
	});
      }
    }]
  }
});

