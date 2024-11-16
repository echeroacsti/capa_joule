sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'CustomerLoyalPA128400U19.redemptions',
            componentId: 'RedemptionsObjectPage',
            contextPath: '/Redemptions'
        },
        CustomPageDefinitions
    );
});