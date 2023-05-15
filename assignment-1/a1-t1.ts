// 1- Task: Create a Program to Calculate Student Grades

var prompt = require("prompt-sync")();
//
// get input from the user.
//
export {};

let english_Marks: number = parseInt(prompt("Enter your english marks? "));
let urdu_Marks: number = parseInt(prompt("Enter your urdu marks? "));

let marks_Avg = (english_Marks + urdu_Marks) / 2;

let std_grade = "";

if (marks_Avg < 60) std_grade = "F";
else if (marks_Avg >= 60 && marks_Avg < 70) std_grade = "D";
else if (marks_Avg >= 70 && marks_Avg < 80) std_grade = "C";
else if (marks_Avg >= 80 && marks_Avg < 90) std_grade = "B";
else std_grade = "A";

console.log("Your grade is: ", std_grade);
