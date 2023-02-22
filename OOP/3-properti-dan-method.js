// Properti merupakan bagian dari class yang mendefinisikan nilai-nilai yang terkandung dalam sebuah instance class. 
class Car {
    constructor(brand, color, maxSpeed, chassisNumber) { // -> properti
        this.brand = brand;
        this.color = color;
        this.maxSpeed = maxSpeed;
        // this.chassisNumber = chassisNumber;

        // nilai properti juga bisa didefinisikan di dalam class itu sendiri.
        this.chassisNumber = `${brand}-${Math.floor(Math.random() * 1000) + 1}`;
    }
}

const car1 = new Car('BMW', 'red', 200, 'b-1');
const car2 = new Car('Audi', 'blue', 220, 'a-1');
const car3 = new Car('BMW', 'black', 250, 'b-2');

console.log(car1);
console.log(car2);
console.log(car3);

// Geter harus mengembalikan sebuah nilai dan nilai tersebut akan menjadi nilai properti.
// Setter harus menerima satu argumen yang nilainya diambil dari operand ke dua ketika melakukan assignment operator.
class Motor {
    constructor(brand, color, maxSpeed) {
        this.brand = brand;
        this.color = color;
        this.maxSpeed = maxSpeed;
        this._chassisNumber = `${brand}-${Math.floor(Math.random() * 1000)}`;
    }

    get chassisNumber() {
        return this._chassisNumber;
    }

    set chassisNumber(chassisNumber) {
        console.log('you are not allowed to change the chassis number');
    }
}

const motor = new Motor('Honda', 'red', 200);
console.log(motor.chassisNumber);

motor.chassisNumber = 'Supra-1';
console.log(motor.chassisNumber);