sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'CustomerLoyalPA128400U19/customers/test/integration/FirstJourney',
		'CustomerLoyalPA128400U19/customers/test/integration/pages/CustomersList',
		'CustomerLoyalPA128400U19/customers/test/integration/pages/CustomersObjectPage'
    ],
    function(JourneyRunner, opaJourney, CustomersList, CustomersObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('CustomerLoyalPA128400U19/customers') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheCustomersList: CustomersList,
					onTheCustomersObjectPage: CustomersObjectPage
                }
            },
            opaJourney.run
        );
    }
);