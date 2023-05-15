import chalk from "chalk";
import inquirer from "inquirer";
import { Add } from "./Add.js";
import { Division } from "./Division.js";
import { Multiplication } from "./Multiplication.js";
import { Subtract } from "./Subtract.js";

function getUserInput() {
  inquirer
    .prompt([
      {
        name: "num1",
        type: "number",
        message: "Enter 1st number: ",
      },
      {
        name: "num2",
        type: "number",
        message: "Enter 2nd number: ",
      },
      {
        name: "operation",
        type: "list",
        message: "Which operation you want to perform?",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
      },
    ])
    .then((answers) => {
      const num1 = answers.num1;
      const num2 = answers.num2;
      switch (answers.operation) {
        case "Addition":
          const add_result = Add(num1, num2);
          console.log(chalk.green(`${num1} + ${num2} = ${add_result}`));
          break;
        case "Subtraction":
          const subtract_result = Subtract(num1, num2);
          console.log(chalk.green(`${num1} - ${num2} = ${subtract_result}`));
          break;
        case "Multiplication":
          const multiply_result = Multiplication(num1, num2);
          console.log(chalk.green(`${num1} * ${num2} = ${multiply_result}`));
          break;
        case "Division":
          const divide_result = Division(num1, num2);
          console.log(chalk.green(`${num1} / ${num2} = ${divide_result}`));
          break;
      }
    });
}

getUserInput();
