import inquirer from "inquirer";

function CheckUserNameAndPassword(value: string) {
  const isValidPassword = value.match(
    /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i
  );
  if (value === "Urooj" || value === "Urooj123") return true;
  return "Please Enter valid username or password";
}

inquirer
  .prompt([
    {
      name: "name",
      type: "input",
      message: "Please Enter your name",
      validate: CheckUserNameAndPassword,
    },
    {
      name: "password",
      type: "password",
      message: "Enter Your Password",
      validate: CheckUserNameAndPassword,
    },
    {
      name: "orderMenu",
      type: "list",
      message: "What do you want to Order",
      choices: ["Pizza", "Macronies", "Pasta", "Chicken Karahi"],
    },
    {
      name: "size",
      type: "rawlist",
      message: "What is the size/serving of your order",
      choices: [
        {
          name: "Large",
        },
        {
          name: "Medium",
        },
        {
          name: "Quarter",
          disabled: "Not Available",
        },
        {
          name: "Small",
        },
      ],
    },
  ])
  .then((answers) => console.log(JSON.stringify(answers, null, " ")));
