interface Home {
  readonly resident: { name: string; age: number };
  readonly prop: string;
}

// function visitForBirthday(home: Home) {
//     // We can read and update properties from 'home.resident'.
//     console.log(`Happy birthday ${home.resident.name}!`);
//     home.resident.age++;
//     home.resident.name = 'Urooj',
//     //   home.prop = 'heml'
//   }

function evict(home: Home) {
  // But we can't write to the 'resident' property itself on a 'Home'.
  //     home.resident = {
  // //   Cannot assign to 'resident' because it is a read-only property.
  //       name: "Victor the Evictor",
  //       age: 42,
  //     };
}

interface NumberDictionary {
  [index: string]: number;

  length: number; // ok
  // name: string;
  //   Property 'name' of type 'string' is not assignable to 'string' index type 'number'.
}

// Any

let myval: any;
let myVal2: unknown;
let neverVal: never;

myval = true; // OK
myval = 42; // OK
myval = "hey!"; // OK
myval = []; // OK
myval = {}; // OK
myval = Math.random; // OK
myval = null; // OK
myval = undefined; // OK
myval = () => {
  console.log("Hey again!");
}; // OK
let myUnknownValue: unknown = myval; // throw error
myval = myVal2;
// let boolVal: boolean = myVal2;
// let numVal: string = neverVal;
// let boolVal2: boolean = true;
// neverVal = myval;

// myVal2 = boolVal;
// myVal2 = numVal;

myval = myVal2;

myVal2 = myval;

let input = document.querySelector('input["type="text"]') as HTMLInputElement;
console.log(input.value);

//Unknown

let value: unknown;

value = true; // OK
value = 42; // OK
value = "hey!"; // OK
value = []; // OK
value = {}; // OK
value = Math.random; // OK
value = null; // OK
value = undefined; // OK
value = () => {
  console.log("Hey again!");
}; // OK

//initializing the length variable which is of number type
let stringLength: number = 22;

//initializing the flower variable which is of string type
let flower: string = stringLength as unknown as string;
console.log("The length of the string is: ", stringLength);
