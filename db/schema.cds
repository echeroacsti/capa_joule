namespace Customer_Loyal_PA128400U19;

using { S4HANA_Joule_Product } from '../srv/external/S4HANA_Joule_Product.cds';

using { cuid } from '@sap/cds/common';

entity Customers : cuid
{
    name : String(100)
        @mandatory;
    email : String(100);
    customerNumber : Integer;
    totalPurchaseValue : Integer;
    totalRewardPoints : Integer;
    totalRedeemedRewardPoints : Integer;
    purchases : Association to many Purchases on purchases.customer = $self;
    redemptions : Association to many Redemptions on redemptions.customer = $self;
}

annotate Customers with @assert.unique :
{
    name : [ name ],
};

entity Purchases : cuid
{
    purchaseValue : Integer;
    rewardPoints : Integer;
    selectedProduct : String(100);
    customer : Association to one Customers;
}

entity Redemptions : cuid
{
    redeemedAmount : Integer;
    customer : Association to one Customers;
}
