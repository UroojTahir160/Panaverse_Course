// 2- Task: Create an Array Manipulation Program

let fruits = ["Apple", "Mango", "Banana", "Apricot", "Guava"];

//Append a string to the end of array
console.log("Before Push function(): ", fruits);
fruits.push("New Fruit");
console.log("After Push function(): ", fruits);

//Prepand a string to the end of array
console.log("Before Unshift function(): ", fruits);
fruits.unshift("New Fruit");
console.log("After Unshift function(): ", fruits);

//Remove a string from a specific index in the array and replace it with another string
console.log("Before splice function(): ", fruits);
fruits.splice(2, 1, "newFruit1", "newFruit2");
console.log("After splice function(): ", fruits);
