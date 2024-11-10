// Import portfolio functions and transaction class

import {calculatePortfolioValue} from "./portfolio.js";
import {getPortfolioAllocation} from "./portfolio.js";
import {Transaction} from "./transaction.js";

//Display total portfolio value and allocation percentages
function displayPortfolio()
{
    const totalValue = calculatePortfolioValue();
    console.log("Total Portfolio Value: $" + totalValue);

    const allocationPercentage = getPortfolioAllocation();
    console.log("Percent of portfolio value: $" + allocationPercentage);
}


//Transaction Instances

function processTransaction()
{
    try
    {
        new Transaction(DIS, "buy", 20);
        new Transaction(F, "sell", 50);
        new Transaction(MAR, "buy", 100);
    }
    catch (error)
    {
        console.log("There was an error")
    }
}

console.log("Portfolio Before Transactions:");
displayPortfolio();

processTransaction();
console.log("Portfolio After Transaction:")
displayPortfolio();