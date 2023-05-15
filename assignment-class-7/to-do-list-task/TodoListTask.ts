import inquirer from "inquirer";
import chalk from "chalk";

let tasks: string[] = [];

function showTasksList(title: string, tasks: string[]) {
  console.log(chalk.green(title));
  console.log(chalk.blue(tasks.join(" , \n")));
}

function getTaskFromUser() {
  inquirer
    .prompt([
      {
        name: "newTask",
        type: "input",
        message: "Enter your pending task: ",
      },
      {
        name: "addTaskAgain",
        type: "confirm",
        message: "Do you want to enter another task?",
      },
    ])
    .then((answers) => {
      tasks.push(answers.newTask);

      if (answers.addTaskAgain) {
        getTaskFromUser();
      } else {
        showTasksList("-------Todo List----------", tasks);
        manipulateTaskList();
        // selectCompletedTasks();
      }
    });
}

function manipulateTaskList() {
  inquirer
    .prompt([
      {
        name: "operationOnList",
        type: "list",
        message: "You can update your list by using following operations: ",
        choices: [
          {
            name: "Mark task COMPLETED that you have done",
          },
          {
            name: "DELETE unwanted Taks",
          },
        ],
      },
    ])
    .then((answers) =>
      console.log(
        answers.operationOnList.includes("COMPLETED")
          ? selectCompletedTasks()
          : deleteTask()
      )
    );
}

function selectCompletedTasks() {
  inquirer
    .prompt([
      {
        name: "tasksCompleted",
        type: "checkbox",
        message: "Select the tasks you have completed",
        choices: tasks,
      },
    ])
    .then((answers) => {
      showTasksList(
        "-----------Tasks Completed-----------",
        answers.tasksCompleted
      );

      tasks = tasks.filter((task) => !answers.tasksCompleted.includes(task));

      if (tasks.length > 0) {
        showTasksList("-----------Pending Tasks-----------", tasks);
        manipulateTaskList();
      } else console.log("Wohooo! You are all caught up!");
    });
}

function deleteTask() {
  inquirer
    .prompt([
      {
        name: "deleteTask",
        type: "list",
        message: "Select the tasks you want to delete",
        choices: tasks,
      },
    ])
    .then((answers) => {
      console.log(
        chalk.red(`Task named as '${answers.deleteTask}' has been deleted! \n`)
      );
      tasks = tasks.filter((task) => !answers.deleteTask.includes(task));

      if (tasks.length > 0) {
        showTasksList("-----------Pending Tasks-----------", tasks);
        manipulateTaskList();
      } else console.log("No Pending Tasks...");
    });
}

getTaskFromUser();
