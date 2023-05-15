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
