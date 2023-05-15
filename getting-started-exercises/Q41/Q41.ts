const magicians = ["Hakoona matata", "Alaadin", "Aurad", "Rumi"];

/**----------------Q41--------------------------- */
function showMagicians(magicians: string[]) {
  for (let index = 0; index < magicians.length; index++) {
    console.log(`${index + 1}. ${magicians[index]}`);
  }
  console.log(`-------------------------------------------`);
}

/**----------------Q42--------------------------- */
function makeGreat(magicians: string[]) {
  for (let index = 0; index < magicians.length; index++) {
    magicians[index] = `${magicians[index]} - The Great`;
  }
  showMagicians(magicians);
}

// makeGreat(magicians);

/**----------------Q43--------------------------- */
//making copy of magician array
const magician_copy = [...magicians];

makeGreat(magician_copy); //magicians copy that will print The Great
showMagicians(magicians); //Original Array
