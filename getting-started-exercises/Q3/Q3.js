"use strict";
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase,
// uppercase, and titlecase.
let person_name = "Urooj Tahir is a girl";
console.log("Uppercase: ", person_name.toUpperCase());
console.log("Lowercase: ", person_name.toLowerCase());
console.log("Titlecase: ", person_name.replace(/\b\w/g, (l) => l.toUpperCase())); // prints "John Smith"
