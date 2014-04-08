Ext.define( 'raxa.model.ProviderList', {
  alias: 'widget.providermodel',
  extend: 'Ext.data.Model',
  config: {
    fields: ['uuid','display','identifiers','person','identifier','attributes','retired','auditInfo','links','resourceVersion'],
    proxy: {
      type: 'ajax',
      url: '/openmrs/ws/rest/v1/provider?v=full',
      reader: {
	      type: 'json',
	      rootProperty: 'results'
      },
      autoload:true
    }
  }
});