import inquirer from "inquirer";

inquirer
  .prompt([
    {
      type: "input",
      name: "toDoList",
      message: "Please enter your task",
    },
  ])
  .then((answers) => console.log(JSON.stringify(answers, null, "")));
