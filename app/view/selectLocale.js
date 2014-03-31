Ext.define('raxa.view.selectLocale',{
  extend: 'Ext.Panel',
  alias: 'widget.selectlocale',
  xtype: 'selectlocale',
  //id : "selectLocale",
  requires: [ 'Ext.field.Select','Ext.device.Geolocation' ],
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
      },
      {
	text : 'Punjabi',
	value: 'pa'
      }]
    },
    {
      xtype: 'button',
      text: 'Next',
      top:"105%",
      right: "5%",
      width:232,
      ui : 'forward',
      docked:'right',
      id: 'selectLanguageButton'
    }]
  }
});

