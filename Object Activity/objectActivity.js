let car = {
    type: "Honda",
    model: "Civic",
    color: "Black"
};

console.log("Type of car object", typeof car); //type of car

car.type = "Toyota"; //update type
console.log("Updated car:", car);

car.wheels = 4; //add wheels property
console.log("Car with wheels:", car);
