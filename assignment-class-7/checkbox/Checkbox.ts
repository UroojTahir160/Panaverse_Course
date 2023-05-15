import inquirer from "inquirer";

inquirer
  .prompt([
    {
      name: "toppings",
      type: "checkbox",
      message: "Select your toppings",
      choices: [
        new inquirer.Separator("====THE MEAT===="),
        {
          name: "Pepperoni",
        },
        {
          name: "Ham",
        },
        {
          name: "Ground Meat",
        },
        {
          name: "Bacon",
        },
        new inquirer.Separator("====THE CHEESE===="),
        {
          name: "Mozrilla",
          checked: true,
        },
        {
          name: "chedder",
        },
        {
          name: "Parmesan",
        },
        new inquirer.Separator("====THE USUAL===="),
        {
          name: "Mushroom",
        },
        {
          name: "Tomato",
        },
        new inquirer.Separator("======The extras====="),
        {
          name: "Pineapple",
        },
        {
          name: "Olives",
          disabled: "out of stock",
        },
        {
          name: "Extra cheese",
        },
      ],
      validate: (answers) => {
        if (answers.length < 1) return "You should select at least 1 topping";
        else return true;
      },
    },
  ])
  .then((answers) => console.log(JSON.stringify(answers, null, "")));
