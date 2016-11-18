
function VehicleConstructor(name, wheels, passengers){
  this.name = name;
  this.wheels = wheels;
  this.passengers = passengers;
  this.makeNoise = function (noise) {
    // return "Ring,Ring";
    console.log(noise);
  }
  this.pickUpPassengers = function (newPassengers) {
    this.passengers += newPassengers;
    return this.passengers;
  }

}

var bike = new VehicleConstructor("Bike", 2, 1);
bike.makeNoise("Ring, Ring");
console.log(bike.wheels);
var sedan = new VehicleConstructor("Acura", 4, 2);
sedan.makeNoise("Honk, Honk");
var bus = new VehicleConstructor("Bus", 6, 18);
console.log(bus.pickUpPassengers(18));
