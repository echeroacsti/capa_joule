sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'CustomerLoyalPA128400U19.redemptions',
            componentId: 'RedemptionsList',
            contextPath: '/Redemptions'
        },
        CustomPageDefinitions
    );
});