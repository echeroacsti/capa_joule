sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'CustomerLoyalPA128400U19/purchases/test/integration/FirstJourney',
		'CustomerLoyalPA128400U19/purchases/test/integration/pages/PurchasesList',
		'CustomerLoyalPA128400U19/purchases/test/integration/pages/PurchasesObjectPage'
    ],
    function(JourneyRunner, opaJourney, PurchasesList, PurchasesObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('CustomerLoyalPA128400U19/purchases') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePurchasesList: PurchasesList,
					onThePurchasesObjectPage: PurchasesObjectPage
                }
            },
            opaJourney.run
        );
    }
);