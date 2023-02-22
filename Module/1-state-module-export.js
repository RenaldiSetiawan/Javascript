// Module Export satu nilai
const coffeeStock = {
  arabica: 100,
  robusta: 150,
  liberica: 200
};

const isCoffeeMachineReady = true;

// single export
/* module.exports = coffeeStock;  */

// export dua nilai dengan memanfaatkan object literals ({ }).
module.exports = {coffeeStock, isCoffeeMachineReady}; 


// Jika menggunakan import tambakan  "type": "module", di package.json
/* const coffeeStock1 = {
  newArabica: 100,
  newRobusta: 150,
  newLiberica: 200
};

export default coffeeStock; */

// import coffeeStock from "./state.js";