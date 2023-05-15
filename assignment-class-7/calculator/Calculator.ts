#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

function isValidUserInput(value: any) {
  if (isNaN(value))
    return chalk.bgRed.white(
      "Invalid input! Please Enter number to perform calculation"
    );
  else return true;
}

let userInput = [
  {
    name: "first_operand",
    type: "input",
    message: "Please Enter First Number",
    validate: isValidUserInput,
  },
  {
    name: "second_operand",
    type: "input",
    message: "Please Enter Second Number",
    validate: isValidUserInput,
  },
  {
    name: "operator",
    type: "list",
    message: "Enter Operation you want to perform: ",
    choices: ["+", "-", "*", "/", "%"],
  },
];

function calculate() {
  inquirer.prompt(userInput).then((answers) => {
    const num1 = parseFloat(answers.first_operand);
    const num2 = parseFloat(answers.second_operand);

    let result;

    switch (answers.operator) {
      case "+":
        result = num1 + num2;
        break;

      case "-":
        result = num1 - num2;
        break;

      case "*":
        result = num1 * num2;
        break;

      case "/":
        result = num1 / num2;
        break;

      case "%":
        result = num1 % num2;
        break;

      default:
        break;
    }

    console.log(
      chalk.bold.greenBright(`${num1} ${answers.operator} ${num2} = ${result}`)
    );
    calculateAgain();
  });
}

function calculateAgain() {
  inquirer
    .prompt([
      {
        name: "calculateAgain",
        type: "confirm",
        message: "Do you want another calculation?",
      },
    ])
    .then((answers) => {
      if (answers.calculateAgain) calculate();
      else console.log(chalk.bgMagenta.black("Thank you for using our app "));
    });
}

calculate();

export {};
