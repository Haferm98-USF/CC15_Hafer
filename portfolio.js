// Create the portfolio module
// import assets
import {assets} from './asset.js';
// create export function
export funciton calculatePortfolioValue() 
{
  return assets.reduce((total, asset) => total + asset.price * asset.quantity, 0);
}

export function getPortfolioAllocation() 
{
 const totalValue = calculatePortfolioValue();
  return assets.map(asset => ({name: asset.name, allocation: ((asset.price * asset.quantity) / totalValue * 100}));
}
