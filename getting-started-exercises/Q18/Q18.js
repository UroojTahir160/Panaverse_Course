"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const places = ["Maldives", "Dubai", "Sawat", "Saudi Arabia", "Kashmir"];
console.log("Our places: ", places);
const sorted_places = [...places].sort();
console.log(chalk_1.default.green(`--------- Sorted Places:----------- ${sorted_places}`));
console.log(chalk_1.default.red(`---------Original Array: ------------ ${places}`));
const reversed_places = [...sorted_places].reverse();
console.log(chalk_1.default.green(`--------- Reversed Places:----------- ${reversed_places}`));
console.log(chalk_1.default.red(`---------Original Array: ------------ ${places}`));
