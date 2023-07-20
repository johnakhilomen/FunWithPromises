// Define a Vehicle constructor
function Vehicle(name) {
    this.name = name;
}

// Add methods to Vehicle's prototype
Vehicle.prototype.start = function() {
    return this.name + ' started';
}

Vehicle.prototype.stop = function() {
    return this.name + ' stopped';
}

// Define a Car constructor
function Car(name, isElectric) {
    // Call the parent constructor (Vehicle) to get its properties
    Vehicle.call(this, name);
    this.isElectric = isElectric;
}

// Set up inheritance: Make Car "subclass" of Vehicle
Car.prototype = Object.create(Vehicle.prototype);

// Since we overwrote Car's prototype, let's set the constructor property appropriately
Car.prototype.constructor = Car;

// Now we can add methods to Car's prototype
Car.prototype.displayType = function() {
    return this.isElectric ? this.name + ' is an electric car' : this.name + ' is a regular car';
}

// Now we can create instances
let tesla = new Car('Tesla', true);
console.log(tesla.start()); // Logs: "Tesla started"
console.log(tesla.displayType()); // Logs: "Tesla is an electric car"

let corolla = new Car('Corolla', false);
console.log(corolla.stop()); // Logs: "Corolla stopped"
console.log(corolla.displayType()); // Logs: "Corolla is a regular car"
