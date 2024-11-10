//Create the Transaction Module

import {assets} from './asset.js';
import {getAssetId} from './asset.js';

//Define and export Transaction Class
export class Transaction 
{
    constructor(assetId, type, quantity)
    {
        this.assetId = assetId;
        this.type = type;
        this.quantity = quantity;
        this.apply();
    }
}

apply()
{
    if (this.type === "buy")
    {
        this.asset.quantity += this.quantity;
    }
    else if (this.type === "sell")
    {
        if (this.asset.quantity >= this.quantity)
        {
            this.asset.quantity -= this.quantity;
        }
        else 
        {
            throw new error('Insufficient quantity for sale of ${this.asset.name}');
        }
    }
    else 
    {
        throw new error('Type must be "buy" or "sell"');
    }
};