// 1. Inventory Stock Aggregation
// Problem Statement
// You are given a list of product transactions. Each transaction contains:
// productName
// type (either "purchase" or "sale")
// quantity
// Your task is to calculate the final stock quantity for each product.

//input
const transactions = [
  { product: "Laptop", type: "purchase", quantity: 10 },
  { product: "Mobile", type: "purchase", quantity: 20 },
  { product: "Laptop", type: "sale", quantity: 4 },
  { product: "Mobile", type: "sale", quantity: 5 },
  { product: "Tablet", type: "purchase", quantity: 7 },
  { product: "Laptop", type: "purchase", quantity: 3 }
];

// declare map for storing stock data
const stock = new Map();

//iterate for each transaction
transactions.forEach((transaction)=>{
    if(transaction.type==="purchase"){
        // for purchase increase quantity count
        stock.set(transaction.product,(stock.get(transaction.product)??0)+transaction.quantity)
    }else if(transaction.type==="sale"){
        // for sale decrease quantity count
        stock.set(transaction.product,(stock.get(transaction.product))-transaction.quantity)
    }
})

//print output
stock.forEach((value,key)=>{
console.log(key+" = "+value);
})


