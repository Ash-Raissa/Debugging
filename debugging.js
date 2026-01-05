// Syntax errors
// Example 1
if (price > 1000 {
  console.log("Expensive");
}
// missing a closing parenthesis.

// corrected version
if (price > 1000) {
  console.log("Expensive");
};

//Example 2

function add(a, b,) {
  return a + b;
}
// extra comma after parameter b

// corrected version
function add(a, b) {
  return a + b;
};

// Example 3
let produce = Beans;
console.log(produce);
// Beans should be in quotes because it's a string

// corrected version
let produce = "Beans";
console.log(produce);


// Logical Errors

// Example 1

let role = "farmer";

if (role === "farmer" && role === "manager") {
  console.log("Access granted");
};
// should use || instead of &&

// corrected version
if (role === "farmer" || role === "manager") {
  console.log("Access granted");
};


// Example 2
let pricePerKg = 2500;
let totalKg = 100;

let totalCost = pricePerKg * pricePerKg;
console.log(totalCost);
// should be pricePerKg * totalKg


// 3. Runtime Errors

// Example 1
console.log(totalAmount);
// totalAmount is not defined

// corrected version
let totalAmount = 100;
console.log(totalAmount);

// Example 2
let sale = undefined;
console.log(sale.amount);

// handled with try-catch
try {
  let sale = undefined;
  console.log(sale.amount);
} catch (error) {
  console.log("Error: Sale object is undefined");
}


// Example 3

let suppliers = null;
console.log(suppliers.length);
// cannot read property 'length' of null

// handled with conditional check  
let suppliers = null;
if (suppliers) {
  console.log(suppliers.length);
} else {
  console.log("Suppliers is null");
}   

// Testng with valid and invalid data
function printSaleAmount(sale) {
  try {
    console.log("Sale amount: " + sale.amount);
  } catch (error) {
    console.log("Error: Sale object is undefined or invalid");
  }
}

// Valid data
printSaleAmount({ amount: 5000 });

// Invalid data
printSaleAmount(undefined);























