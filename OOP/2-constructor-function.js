// JavaScript sendiri bukanlah bahasa pemrograman berbasis class karena sebelum hadirnya sintaks ES6
// JavaScript bukanlah class-based language, melainkan prototype-based language

function Car(brand, color, maxSpeed, chassisNumber) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.chassisNumber = chassisNumber;
  }
   
  Car.prototype.drive = function() {
    console.log(`${this.brand} ${this.color} is driving`);
  }
   
  Car.prototype.reverse = function() {
    console.log(`${this.brand} ${this.color} is reversing`);
  }
   
  Car.prototype.turn = function() {
    console.log(`${this.brand} ${this.color} is turning`);
  }
   
  // Membuat objek mobil dengan constructor function Car
  const car1 = new Car('Toyota', 'Silver', 200, 'to-1');
  const car2 = new Car('Honda', 'Black', 180, 'ho-1');
  const car3 = new Car('Suzuki', 'Red', 220, 'su-1');
   
  console.log(car1);
  console.log(car2);
  console.log(car3);
   
  car1.drive();
  car2.drive();
  car3.drive();


  // Sintaks Class di ES6
  class Food {
    constructor(name, price, amount) {
      this.name = name;
      this.price = price;
      this.amount = amount;
    }
   
    hot() {
      console.log(`${this.name} ${this.price} is hot`);
    }
   
    cool() {
      console.log(`${this.name} ${this.price} is cool`);
    }
   
    normal() {
      console.log(`${this.name} ${this.price} is normal`);
    }
  }
   
  // Membuat objek mobil dengan constructor function Car
  const food1 = new Food('Mie', 5000, '1-Qty');
  const food2 = new Food('Orange Juice', 10000, '2-Qty');
  const food3 = new Food('Rice', 6000, '1-Qty');
   
  console.log(food1);
  console.log(food2);
  console.log(food3);
   
  food1.hot();
  food2.cool();
  food3.normal();