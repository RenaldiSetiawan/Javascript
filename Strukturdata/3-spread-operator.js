// Spread operator dituliskan dengan tiga titik (...)
// untuk menyebarkan nilai array atau lebih tepatnya iterable object menjadi beberapa element

const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
console.log(favorites);
console.log(...favorites); // Spread Operator

// Spread operator dapat digunakan untuk menggabungkan dua buah array ke dalam array baru. 
const food = ["Rice", "egg", "tomat"];
const othesFood = ["Chicken", "Donut"];

const allFavorites = [...food, ...othesFood];

console.log("Gabung 2 array: ", allFavorites);

//  spread operator juga bisa digunakan untuk object literals
const obj1 = { firstName: 'Renal'};
const obj2 = { lastName: 'Stwn', gender: 'Male' };

const newObj = { ...obj1, ...obj2 };

console.log(newObj);