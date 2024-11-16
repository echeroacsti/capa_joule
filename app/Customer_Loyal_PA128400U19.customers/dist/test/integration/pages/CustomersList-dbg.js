sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'CustomerLoyalPA128400U19.customers',
            componentId: 'CustomersList',
            contextPath: '/Customers'
        },
        CustomPageDefinitions
    );
});