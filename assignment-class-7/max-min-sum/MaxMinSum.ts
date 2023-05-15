import inquirer from "inquirer";

let num_array: number[] = [];

function getNumberFromUser() {
  inquirer
    .prompt([
      {
        name: "number",
        type: "number",
        message: "Enter number for array: ",
      },
    ])
    .then((answers) => {
      num_array.push(answers.number);
      if (num_array.length <= 4) getNumberFromUser();
      else {
        getMinSumOfArray();
        getMaxSumOfArray();
      }
    });
}

function getMinSumOfArray() {
  let minSumOfArray = 0;

  const ascending = [...num_array].sort((a: number, b: number) => a - b);
  console.log(ascending);

  for (let i = 0; i < ascending.length - 1; i++) {
    minSumOfArray += ascending[i];
  }
  console.log("Minimum sum of Array is: ", minSumOfArray);
}

function getMaxSumOfArray() {
  let maxSumOfArray = 0;

  const descending = [...num_array].sort((a: number, b: number) => b - a);
  console.log(descending);

  for (let i = 0; i < descending.length - 1; i++) {
    maxSumOfArray += descending[i];
  }
  console.log("Maximum sum of Array is: ", maxSumOfArray);
}

getNumberFromUser();
