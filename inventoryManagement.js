// Write your code here

const products = ["Laptop", "Phone", "Headphones", "Monitor"];

console.log (products);

function logFirstProduct() {
  console.log(products[0]);
}

logFirstProduct();

function addProduct(earphones) {
  products.push(earphones);
   console.log(earphones);
}

function updateProductName(index, earphones) {
  products[index] = earphones;
  console.log(index, earphones);
}

function removeLastProduct() {
  products.pop();
  console.log("Last product removed");
}

// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};

