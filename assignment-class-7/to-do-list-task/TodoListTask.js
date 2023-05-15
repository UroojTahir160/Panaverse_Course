"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
let tasks = [];
function showTasksList(title, tasks) {
    console.log(chalk_1.default.green(title));
    console.log(chalk_1.default.blue(tasks.join(" , \n")));
}
function getTaskFromUser() {
    inquirer_1.default
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
        }
        else {
            showTasksList("-------Todo List----------", tasks);
            manipulateTaskList();
            // selectCompletedTasks();
        }
    });
}
function manipulateTaskList() {
    inquirer_1.default
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
        .then((answers) => console.log(answers.operationOnList.includes("COMPLETED")
        ? selectCompletedTasks()
        : deleteTask()));
}
function selectCompletedTasks() {
    inquirer_1.default
        .prompt([
        {
            name: "tasksCompleted",
            type: "checkbox",
            message: "Select the tasks you have completed",
            choices: tasks,
        },
    ])
        .then((answers) => {
        showTasksList("-----------Tasks Completed-----------", answers.tasksCompleted);
        tasks = tasks.filter((task) => !answers.tasksCompleted.includes(task));
        if (tasks.length > 0) {
            showTasksList("-----------Pending Tasks-----------", tasks);
            manipulateTaskList();
        }
        else
            console.log("Wohooo! You are all caught up!");
    });
}
function deleteTask() {
    inquirer_1.default
        .prompt([
        {
            name: "deleteTask",
            type: "list",
            message: "Select the tasks you want to delete",
            choices: tasks,
        },
    ])
        .then((answers) => {
        console.log(chalk_1.default.red(`Task named as '${answers.deleteTask}' has been deleted! \n`));
        tasks = tasks.filter((task) => !answers.deleteTask.includes(task));
        if (tasks.length > 0) {
            showTasksList("-----------Pending Tasks-----------", tasks);
            manipulateTaskList();
        }
        else
            console.log("No Pending Tasks...");
    });
}
getTaskFromUser();
