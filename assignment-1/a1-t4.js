"use strict";
// 4- Task: Create a Function to Calculate the Factorial of a Number
Object.defineProperty(exports, "__esModule", { value: true });
var prompt = require("prompt-sync")();
function calculateFactorial(factNum) {
    let factorial_result = 1;
    for (let i = 1; i <= factNum; i++) {
        factorial_result *= i;
    }
    return factorial_result;
}
let userInput = parseInt(prompt("Please enter factorial number "));
let answer = calculateFactorial(userInput);
console.log(`Factorial of ${userInput} is ${answer}`);
