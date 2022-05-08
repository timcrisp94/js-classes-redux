console.log('hi')

const tulip = {
  type: 'flower',
  petals: 3,
  stem: true,
  colors: ['red', 'pink', 'yellow'],
  bees: true,
  occasion: ['rainy day', 'Easter', 'peace offering']
}

const sunflower = {
  type: 'flower',
  petals: 24,
  stem: true,
  colors: ['golden', 'yellow'],
  bees: true,
  occasion: ['health']
}

// create flower blue print; prototype

// properties / key-value pairs
// methods / behaviors

// instance: an object that is created by a class

class Vehicle {
  constructor(vin, make, model, fuel){
    // runs every time we instantiate a class
    // whenever we create a new vehicle, it must have these conditions:
    this.vin = vin
    this.make = make
    this.model = model
    this.fuel = fuel
  }
  start() {
    this.running = true
    console.log('vrooooom')
  }
  stop() {
    this.running = false
    console.log('car is stalled')
  }

}

const car1 = new Vehicle('RXT45102', 'Volvo', '940')
car1.start()
car1.stop()

const car2 = new Vehicle('hlkjhda', 'Subaru', 'Legacy')
car2.color = 'blue'

car2.stall = function() {
  this.running = false
  console.log('car is now stalled')
}

console.log(car2)

class Plane extends Vehicle {
  constructor(vin, make, model, airline, engine) {
    super(vin, make, model)
    this.airline = airline
    this.engine = engine
  }
}

let plane1 = new Plane()

// create the blueprint