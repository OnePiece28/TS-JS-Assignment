// Q12. Product Management System - module using ES Module export
export function displayProduct(product) {
  console.log("----- Product Details -----");
  console.log("ID       :", product.id);
  console.log("Name     :", product.name);
  console.log("Price    : ₹" + product.price);
  console.log("Category :", product.category);
}
