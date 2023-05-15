"use strict";
/**
 * List prompt example
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
inquirer_1.default
    .prompt([
    {
        type: "list",
        name: "theme",
        message: "What do you want to do?",
        choices: [
            "Order a pizza",
            "Make a reservation",
            new inquirer_1.default.Separator(),
            "Ask for opening hours",
            {
                name: "Contact support",
                disabled: "Unavailable at this time",
            },
            {
                name: "Another work",
                disabled: "Disable",
            },
            "Talk to the receptionist",
        ],
    },
    {
        type: "list",
        name: "size",
        message: "What size do you need?",
        choices: ["Jumbo", "Large", "Standard", "Medium", "Small", "Micro"],
        //   filter(val) {
        //     return val.toLowerCase();
        //   },
    },
])
    .then((answers) => {
    console.log(JSON.stringify(answers, null, " "));
});
