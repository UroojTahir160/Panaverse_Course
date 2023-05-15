"use strict";
// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function carDetails(car_manufacturer, car_modal, ...other_details) {
    const my_car = {
        manufacturer: car_manufacturer,
        modal: car_modal,
        other_details: other_details,
    };
    return my_car;
}
const newCar = carDetails("Audi", "2022", "Black", "2 Doors");
console.log("-----------My Car------------ \n");
console.log(newCar);
