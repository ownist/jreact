/**
 * Object এর total price বের করো
 *
 * ```js
 * const products = [
 * {name: "phone", price: 500},
 * {name: "laptop", price: 1000},
 * {name: "tablet", price: 300}
 * ];
 * ```
 *
 * Task: সব price যোগ করো
 *
 * Expected: 1800
 */

const products = [
  { name: "phone", price: 500 },
  { name: "laptop", price: 1000 },
  { name: "tablet", price: 300 },
];
let totalPrice = 0;

products.forEach((product) => {
  totalPrice += product.price;
});
console.log(totalPrice);
