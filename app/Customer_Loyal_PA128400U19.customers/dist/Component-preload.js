//@ui5-bundle CustomerLoyalPA128400U19/customers/Component-preload.js
sap.ui.require.preload({
	"CustomerLoyalPA128400U19/customers/Component.js":function(){
sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("CustomerLoyalPA128400U19.customers.Component",{metadata:{manifest:"json"}})});
},
	"CustomerLoyalPA128400U19/customers/i18n/i18n.properties":'# This is the resource bundle for CustomerLoyalPA128400U19.customers\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=Customers\n\n#YDES: Application description\nappDescription=Manage Customers\n\n#XFLD,27\nflpTitle=Customers\n',
	"CustomerLoyalPA128400U19/customers/manifest.json":'{"_version":"1.60.0","sap.app":{"id":"CustomerLoyalPA128400U19.customers","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.15.4","toolsId":"4e6522c1-e14a-4a9c-b2b0-5e6220f0692b"},"dataSources":{"mainService":{"uri":"service/customer_Loyal_PA128400U19/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"CustomerLoyalPA128400U19custom-display":{"semanticObject":"CustomerLoyalPA128400U19custom","action":"display","title":"{{flpTitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.120.13","libs":{"sap.m":{},"sap.ui.core":{},"sap.fe.templates":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"CustomerLoyalPA128400U19.customers.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"config":{},"routes":[{"pattern":":?query:","name":"CustomersList","target":"CustomersList"},{"pattern":"Customers({key}):?query:","name":"CustomersObjectPage","target":"CustomersObjectPage"}],"targets":{"CustomersList":{"type":"Component","id":"CustomersList","name":"sap.fe.templates.ListReport","options":{"settings":{"contextPath":"/Customers","variantManagement":"Page","navigation":{"Customers":{"detail":{"route":"CustomersObjectPage"}}},"controlConfiguration":{"@com.sap.vocabularies.UI.v1.LineItem":{"tableSettings":{"type":"ResponsiveTable"}}}}}},"CustomersObjectPage":{"type":"Component","id":"CustomersObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"contextPath":"/Customers"}}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"},"sap.cloud":{"public":true,"service":"lcap.Customer_Loyal_PA128400U19"}}'
});
//# sourceMappingURL=Component-preload.js.map