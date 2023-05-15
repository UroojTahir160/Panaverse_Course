"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
inquirer_1.default
    .prompt([
    {
        type: "input",
        name: "toDoList",
        message: "Please enter your task",
    },
])
    .then((answers) => console.log(JSON.stringify(answers, null, "")));
