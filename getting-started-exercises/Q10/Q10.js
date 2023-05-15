"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
//Question 14
const guests_list = ["Aurad", "Summar", "Muqaddas"];
console.log(chalk_1.default.magenta(`*******************Guests List*******************\n`));
for (let i = 0; i < guests_list.length; i++) {
    console.log(`Dear ${guests_list[i]},  You are invited to the dinner at my house.`);
}
//Question 15
console.log(chalk_1.default.red(`\n*******************NOTICE: Sorry, ${guests_list[1]} can't make it to dinner*******************\n`));
guests_list.splice(1, 1, "Mahnoor");
console.log(chalk_1.default.magenta(`*******************Updated Guests List*******************\n`));
for (let i = 0; i < guests_list.length; i++) {
    console.log(`Dear ${guests_list[i]},  You are invited to the dinner at my house.`);
}
//Question 16
console.log(chalk_1.default.red(`\n*******************NOTICE: We have found a bigger dining table with more capacity so we are inviting some more guests*******************\n`));
guests_list.unshift("Zulkifle");
guests_list.splice(guests_list.length / 2, 1, "Amna");
guests_list.push("Saliha");
console.log(chalk_1.default.magenta(`*******************Guests List For Bigger Dinning Table*******************\n`));
for (let i = 0; i < guests_list.length; i++) {
    console.log(`Dear ${guests_list[i]},  You are invited to the dinner at my house.`);
}
//Question 17
console.log(chalk_1.default.red(`\n*******************NOTICE: SORRY!! Our Dining Table won't arrive on time so we will be inviting only two guests*************************\n`));
while (guests_list.length > 2) {
    let removedGuest = guests_list.shift();
    console.log(chalk_1.default.green(`${removedGuest}, We're sorry! We don't have enough space.`));
}
for (let i = 0; i < guests_list.length; i++) {
    console.log(chalk_1.default.blue(`${guests_list[i]}, You are on our list and invited to dinner.`));
}
while (guests_list.length > 0) {
    guests_list.pop();
}
console.log(chalk_1.default.gray(`****************** You have invited ${guests_list.length} guests*******************\n`));
