import chalk from "chalk";

const places = ["Maldives", "Dubai", "Sawat", "Saudi Arabia", "Kashmir"];

console.log("Our places: ", places);

const sorted_places = [...places].sort();
console.log(
  chalk.green(`--------- Sorted Places:----------- ${sorted_places}`)
);
console.log(chalk.red(`---------Original Array: ------------ ${places}`));

const reversed_places = [...sorted_places].reverse();
console.log(
  chalk.green(`--------- Reversed Places:----------- ${reversed_places}`)
);
console.log(chalk.red(`---------Original Array: ------------ ${places}`));
