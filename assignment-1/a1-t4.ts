// 4- Task: Create a Function to Calculate the Factorial of a Number

var prompt = require("prompt-sync")();
//
// get input from the user.
//
export {};

function calculateFactorial(factNum: number) {
  let factorial_result = 1;
  for (let i = 1; i <= factNum; i++) {
    factorial_result *= i;
  }
  return factorial_result;
}

let userInput = parseInt(prompt("Please enter factorial number "));
let answer = calculateFactorial(userInput);
console.log(`Factorial of ${userInput} is ${answer}`);
