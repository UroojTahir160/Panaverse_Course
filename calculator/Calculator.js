"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const inquirer_1 = __importDefault(require("inquirer"));
const Add_js_1 = require("./Add.js");
const Division_js_1 = require("./Division.js");
const Multiplication_js_1 = require("./Multiplication.js");
const Subtract_js_1 = require("./Subtract.js");
function getUserInput() {
    inquirer_1.default
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
                const add_result = (0, Add_js_1.Add)(num1, num2);
                console.log(chalk_1.default.green(`${num1} + ${num2} = ${add_result}`));
                break;
            case "Subtraction":
                const subtract_result = (0, Subtract_js_1.Subtract)(num1, num2);
                console.log(chalk_1.default.green(`${num1} - ${num2} = ${subtract_result}`));
                break;
            case "Multiplication":
                const multiply_result = (0, Multiplication_js_1.Multiplication)(num1, num2);
                console.log(chalk_1.default.green(`${num1} * ${num2} = ${multiply_result}`));
                break;
            case "Division":
                const divide_result = (0, Division_js_1.Division)(num1, num2);
                console.log(chalk_1.default.green(`${num1} / ${num2} = ${divide_result}`));
                break;
        }
    });
}
getUserInput();
