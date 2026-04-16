const products = [
  { id: 1, name: "xiami phone One night", price: 19000 },
  { id: 2, name: "iphone", price: 19000 },
  { id: 3, name: "mac book air", price: 119000 },
  { id: 4, name: "lenovo yoga laptop 2025", price: 19000 },
  { id: 5, name: "Dell inspiron laptop", price: 19000 },
  { id: 6, name: "Samsung phone note 7", price: 19000 },
  { id: 7, name: "Nokia old age phone gone", price: 19000 },
  { id: 8, name: "Phone one", price: 19000 },
];

function matchedProdcuts(products, search) {
  const mathced = [];

  for (const p of products) {
    if (p.name.toLowerCase().includes(search.toLowerCase())) {
      mathced.push(p);
    }
  }

  return mathced;
}

const output = matchedProdcuts(products, "Laptop");
console.log(output);
