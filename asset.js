// Define and export an array of assets

export const assets = 
[
  {id: "DIS", name: "The Walt Disney Company", type: "stock", price: 99.02, quantity: 500},
  {id: "MAR", name: "Marriott International, Inc.", type: "stock", price: 280.20, quantity: 100},
  {id: "F", name: "Ford Motor Company", type: "stock", price: 10.97, quantity: 800},
  {id: "GRMN", name: "Garmin Ltd.", type: "stock", price: 212.72, quantity: 250},
];

//Export Function
export function getProductById(id) 
{
  return productList.find(product => product.id === id);
}
