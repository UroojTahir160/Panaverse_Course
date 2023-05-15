"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
let num_array = [];
function getNumberFromUser() {
    inquirer_1.default
        .prompt([
        {
            name: "number",
            type: "number",
            message: "Enter number for array: ",
        },
    ])
        .then((answers) => {
        num_array.push(answers.number);
        if (num_array.length <= 4)
            getNumberFromUser();
        else {
            getMinSumOfArray();
            getMaxSumOfArray();
        }
    });
}
function getMinSumOfArray() {
    let minSumOfArray = 0;
    const ascending = [...num_array].sort((a, b) => a - b);
    console.log(ascending);
    for (let i = 0; i < ascending.length - 1; i++) {
        minSumOfArray += ascending[i];
    }
    console.log("Minimum sum of Array is: ", minSumOfArray);
}
function getMaxSumOfArray() {
    let maxSumOfArray = 0;
    const descending = [...num_array].sort((a, b) => b - a);
    console.log(descending);
    for (let i = 0; i < descending.length - 1; i++) {
        maxSumOfArray += descending[i];
    }
    console.log("Maximum sum of Array is: ", maxSumOfArray);
}
getNumberFromUser();
