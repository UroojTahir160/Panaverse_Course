"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
function CheckUserNameAndPassword(value) {
    const isValidPassword = value.match(/^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i);
    if (value === "Urooj" || value === "Urooj123")
        return true;
    return "Please Enter valid username or password";
}
inquirer_1.default
    .prompt([
    {
        name: "name",
        type: "input",
        message: "Please Enter your name",
        validate: CheckUserNameAndPassword,
    },
    {
        name: "password",
        type: "password",
        message: "Enter Your Password",
        validate: CheckUserNameAndPassword,
    },
    {
        name: "orderMenu",
        type: "list",
        message: "What do you want to Order",
        choices: ["Pizza", "Macronies", "Pasta", "Chicken Karahi"],
    },
    {
        name: "size",
        type: "rawlist",
        message: "What is the size/serving of your order",
        choices: [
            {
                name: "Large",
            },
            {
                name: "Medium",
            },
            {
                name: "Quarter",
                disabled: "Not Available",
            },
            {
                name: "Small",
            },
        ],
    },
])
    .then((answers) => console.log(JSON.stringify(answers, null, " ")));
