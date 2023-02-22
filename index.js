const {coffeeStock, isCoffeeMachineReady} = require('./Module/1-state-module-export');

console.log(coffeeStock);

console.log(isCoffeeMachineReady);

const makeCoffee = (type, miligrams) => {
    if (coffeeStock[type] >= miligrams) {
        console.log("Kopi berhasil dibuat!");
    } else {
        console.log("Biji kopi habis!");
    }
}
 
makeCoffee("robusta", 80);