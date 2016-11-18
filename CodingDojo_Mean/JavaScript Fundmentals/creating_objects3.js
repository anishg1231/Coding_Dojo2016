function VehicleConstructor(name, wheels, passengers, speed){
  var distance_traveled = 0
  var updateDistanceTraveled = function () {
    distance_traveled += this.speed;
    console.log("this is a private method");
  }
  this.name = name;
  this.wheels = wheels;
  this.passengers = passengers;
  this.speed = speed
  // this.makeNoise = function (noise) {
  //   // return "Ring,Ring";
  //   console.log(noise);
  // }
  }

VehicleConstructor.prototype.makeNoise = function(noise){
  // return noise;
  console.log(noise);
}

VehicleConstructor.prototype.pickUpPassengers = function (newPassengers) {
  this.passengers += newPassengers;
  return this.passengers;
};

VehicleConstructor.prototype.move = function () {
  updateDistanceTraveled()
  return this.makeNoise
};

VehicleConstructor.prototype.checkMile = function () {
  return(distance_traveled);
};

var bike = new VehicleConstructor("Bike", 2, 1, 0);
console.log(bike);
bike.makeNoise("Ring, Ring");
// bike.makeNoise("Ring, Ring");
// console.log(bike.wheels);
// var sedan = new VehicleConstructor("Acura", 4, 2);
// sedan.makeNoise("Honk, Honk");
// var bus = new VehicleConstructor("Bus", 6, 18);
// console.log(bus.pickUpPassengers(18));
// var speed = new VehicleConstructor();



// this.pickUpPassengers = function (newPassengers) {
//   this.passengers += newPassengers;
//   return this.passengers;
// }
//adding a method to the vehicle called "move"
// which calls updateDistanceTraveled and then makeNoise
// this.move = function () {
//   updateDistanceTraveled()
//   this.makeNoise
// }
// adding method called checkMile
// print distance_traveled
//   this.checkMile = function () {
//     console.log(distance_traveled);
//   }
