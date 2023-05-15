// import * as prompt from "prompt-sync";
// const input = prompt();
// const numberForTable = input("Which table do you want to print?");
// printTable(Number(numberForTable));
// function printTable(number: number): void {
//   console.log(`-----------------TABLE OF ${number}----------------\n`);
//   for (let i = 1; i <= 10; i++) {
//     console.log(`${number} * ${i} = ${number * i}`);
//   }
// }
// let arr = ["a", "b", "c", "d", "e", "f", "g", "h"];
// arr.splice(3, 7);
// console.log(arr);
// function sum(num1: number, num2?: number): number {
//   if (typeof num2 !== "undefined") {
//     return num1 + num2;
//   }
//   return num1;
// }
// console.log(sum(1));
// let tableNumber = prompt("Please enter your name:");
// console.log("Hello, " + tableNumber + "!");
// let City = ["Lahore", "Taxila", "Quetta", "Karachi", "Karachi"];
// let City2 = "Taxila";
// let City1 = "Islamabad";
// let i;
// for (i = 0; i < City.length + 1; i++) {
//   if (City1 == City[i]) break;
// }
// if (i < City.length + 1) {
//   console.log(City1 + " is present in the Array");
// } else console.log("not found");
//   if (City2 == City[i]) {
//     console.log(City2 + " is present in the Array");
//     } else console.log("Oops!!" + City2 + " not found");
// function test() {
//   let x = 1;
//   if (true) {
//     x = 2; // x cannot be reassigned
//     console.log(x); // Output: 2
//   }
//   console.log(x); // Output: 1 (x cannot be reassigned and has its original value)
// }
// test();
// let car = {
//   color: "red",
//   modal: "HSJ23",
//   name: "Audi",
//   parts: ["Windows", "Door", "Sterring"],
//   open: {
//     close: false,
//   },
//   "invalid Identifier": "for using square brackets notation",
// };
// console.log(car["invalid Identifier"]);
import inquirer from "inquirer";
import chalk from "chalk";
async function getName() {
    let username = await inquirer.prompt([
        {
            name: "YourName",
            type: "input",
            message: "Enter Your Name: ",
        },
        {
            name: "City",
            type: "list",
            choices: ["ISB", "Gujranwala", "Mansehra"],
            message: "Select City: ",
        },
    ]);
    console.log(chalk.green(username.YourName));
    console.log(chalk.red(username.City));
}
getName();
