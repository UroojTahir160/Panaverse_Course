#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
function isValidUserInput(value) {
    if (isNaN(value))
        return chalk_1.default.bgRed.white("Invalid input! Please Enter number to perform calculation");
    else
        return true;
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
    inquirer_1.default.prompt(userInput).then((answers) => {
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
        console.log(chalk_1.default.bold.greenBright(`${num1} ${answers.operator} ${num2} = ${result}`));
        calculateAgain();
    });
}
function calculateAgain() {
    inquirer_1.default
        .prompt([
        {
            name: "calculateAgain",
            type: "confirm",
            message: "Do you want another calculation?",
        },
    ])
        .then((answers) => {
        if (answers.calculateAgain)
            calculate();
        else
            console.log(chalk_1.default.bgMagenta.black("Thank you for using our app "));
    });
}
calculate();
