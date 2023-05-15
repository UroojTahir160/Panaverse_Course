// 3- Task: Create a Function to Determine the Discount Amount for a Product

var prompt = require("prompt-sync")();
//
// get input from the user.
//
export {};

let prod_price = parseInt(prompt("Please enter product price?"));
let discount_percentage = parseInt(
  prompt("How much discount you are offering on this product?")
);

function calculateDiscountedAmount(
  prod_price: number,
  discount_percentage: number
) {
  if (discount_percentage >= 50) {
    return -1;
  } else {
    let discountedAmount = prod_price * (discount_percentage / 100);
    return discountedAmount;
  }
}

let discounted_amount = calculateDiscountedAmount(
  prod_price,
  discount_percentage
);

if (discounted_amount < 0)
  console.log(
    "***************Discount Percentage is invalid******************"
  );
else {
  console.log("\n----------------Receipt-----------------\n");
  console.log(`Product Original Price: ----------- ${prod_price}`);
  console.log(`Discount % on Product: ----------- ${discount_percentage}`);
  console.log(`Discounted Amount on Product: ----------- ${discounted_amount}`);
  console.log(`Your Bill is : ----------- ${prod_price - discounted_amount}\n`);
}
