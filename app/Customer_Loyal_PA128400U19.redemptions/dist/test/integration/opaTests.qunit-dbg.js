sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'CustomerLoyalPA128400U19/redemptions/test/integration/FirstJourney',
		'CustomerLoyalPA128400U19/redemptions/test/integration/pages/RedemptionsList',
		'CustomerLoyalPA128400U19/redemptions/test/integration/pages/RedemptionsObjectPage'
    ],
    function(JourneyRunner, opaJourney, RedemptionsList, RedemptionsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('CustomerLoyalPA128400U19/redemptions') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRedemptionsList: RedemptionsList,
					onTheRedemptionsObjectPage: RedemptionsObjectPage
                }
            },
            opaJourney.run
        );
    }
);