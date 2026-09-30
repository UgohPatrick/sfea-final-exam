const products = [
  { name: "Laptop", price: 250000 },
  { name: "Mouse", price: 15000 },
  { name: "Keyboard", price: 30000 },
  { name: "Monitor", price: 180000 }
];

// a. Products costing more than 50000 [1]
const expensiveProducts = products.filter(product => product.price > 50000);
console.log(expensiveProducts);
// [{ Laptop, 250000 }, { Monitor, 180000 }]

// b. New array containing only product names [1]
const productNames = products.map(product => product.name);
console.log(productNames);
// ["Laptop", "Mouse", "Keyboard", "Monitor"]

// c. Total price of all products [1]
const totalPrice = products.reduce((total, product) => total + product.price, 0);
console.log(totalPrice);
// 475000

// d. First product costing more than 200000 [1]
const firstExpensive = products.find(product => product.price > 200000);
console.log(firstExpensive);
// { name: "Laptop", price: 250000 }