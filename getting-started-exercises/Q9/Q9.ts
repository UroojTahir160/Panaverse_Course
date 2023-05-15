// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name,
//print a message to them.The text of each message should be the same, but each message should be personalized
// with the person’s name.

const carNames = ["Audi", "Totota Corolla", "Honda Civic", "Ford"];
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);
// console.log(names[4]);

const messagesForCars = [
  "I currently own a",
  "I have always liked the reliability of a ",
  "One day I would love to own a ",
  "I have always been a fan of American muscle cars, and the ",
];

// for (let i = 0; i < carNames.length; i++) {
//   console.log(`${messagesForCars[i]} ${carNames[i]}`);
// }

var firstNames: string[] = [
  "BlueRay ",
  "Upchuck ",
  "Lojack ",
  "Gizmo ",
  "Do-Rag ",
];
var lastNames: string[] = ["Zzz", "Burp", "Dogbone", "Droop"];
var fullNames: string[] = [];

for (var i = 0; i < firstNames.length; i++) {
  fullNames.push(firstNames[i] + lastNames[i]);
}

console.log(fullNames);
