"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
inquirer_1.default
    .prompt([
    {
        name: "toppings",
        type: "checkbox",
        message: "Select your toppings",
        choices: [
            new inquirer_1.default.Separator("====THE MEAT===="),
            {
                name: "Pepperoni",
            },
            {
                name: "Ham",
            },
            {
                name: "Ground Meat",
            },
            {
                name: "Bacon",
            },
            new inquirer_1.default.Separator("====THE CHEESE===="),
            {
                name: "Mozrilla",
                checked: true,
            },
            {
                name: "chedder",
            },
            {
                name: "Parmesan",
            },
            new inquirer_1.default.Separator("====THE USUAL===="),
            {
                name: "Mushroom",
            },
            {
                name: "Tomato",
            },
            new inquirer_1.default.Separator("======The extras====="),
            {
                name: "Pineapple",
            },
            {
                name: "Olives",
                disabled: "out of stock",
            },
            {
                name: "Extra cheese",
            },
        ],
        validate: (answers) => {
            if (answers.length < 1)
                return "You should select at least 1 topping";
            else
                return true;
        },
    },
])
    .then((answers) => console.log(JSON.stringify(answers, null, "")));
