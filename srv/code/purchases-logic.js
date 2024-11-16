/**
 * 
 * @On(event = { "CREATE" }, entity = "customer_Loyal_PA128400U19Srv.Purchases")
 * @param {Object} request - User information, tenant-specific CDS model, headers and query parameters
*/
module.exports = async function(request) {
    const { Purchases, Customers } = cds.entities;

    // Extract the purchase data from the request
    const purchaseData = request.data;

    // Ensure purchaseValue and customer are defined
    if (purchaseData.purchaseValue === undefined || purchaseData.customer_ID === undefined) {
        return request.error(400, "Purchase value and customer ID must be provided.");
    }

    // Calculate reward points
    const rewardPoints = Math.floor(purchaseData.purchaseValue / 10);

    // Update the purchase data with calculated reward points
    purchaseData.rewardPoints = rewardPoints;

    // Fetch the related customer
    const customer = await SELECT.one.from(Customers).where({ ID: purchaseData.customer_ID });

    // Ensure the customer exists
    if (!customer) {
        return request.error(404, "Customer not found.");
    }

    // Update the customer's total purchase value and total reward points
    customer.totalPurchaseValue += purchaseData.purchaseValue;
    customer.totalRewardPoints += rewardPoints;

    // Update the customer entity
    await UPDATE(Customers).set({
        totalPurchaseValue: customer.totalPurchaseValue,
        totalRewardPoints: customer.totalRewardPoints
    }).where({ ID: purchaseData.customer_ID });

    // Proceed with the creation of the purchase
    return request.data;
}