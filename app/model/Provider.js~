Ext.define( 'raxa.model.Provider', {
	extend: 'Ext.data.Model',
	fields: ['uuid','display','identifiers','person','voided','auditInfo','links','resourceVersion'],
	proxy: {
		type: 'ajax',
		url: 'http://localhost:8080/openmrs-standalone/ws/rest/v1/provider/'+providerUuid+'?v=full',
		reader: {
			type: 'json',
			root:
