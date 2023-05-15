/**----------------Q44--------------------------- */
function make_sandwich(...ingredients: string[]) {
  console.log("\n---------------------Summary of Sandwich------------------\n");
  if (ingredients.length > 0) {
    console.log(`Your sandwich has following ingredients in it: \n`);

    ingredients.forEach((items, index) =>
      console.log(`${index + 1} - ${items}`)
    );
  } else {
    console.log("No Items for Sandwich \n");
  }
}

make_sandwich("Cheeze", "Red Sauce", "Salad", "Mayonees", "Ketchup");

make_sandwich("Tortillas", "Vegetables", "Fried chicken");

make_sandwich();
