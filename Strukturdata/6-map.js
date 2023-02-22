// Untuk mendefinisikan Map gunakan
const myMap = new Map();

// menetapkan nilai dari Map secara langsung, gunakan array multi dimensi
const tryMap = new Map([
    ['1', 'a String key'],  // element pertama arr = key, dan yg ke 2 = value
    [1, 'a number key'],
    [true, true]
]);

console.log(tryMap);

// mendapatkan nilainya berdasarkan key tertentu dengan metode get().
// Lalu, untuk menambahkan pasangan key-value baru gunakan metode set()
const country = new Map([
    ["Jakarta", "Indonesia"],
    ["London", "England"],
    ["Tokyo", "Japan"]
]);

console.log(country.size);
console.log(country.get("Tokyo")); // mendapat elemet dari key arr
country.set("New Delhi", "India"); // menambah elemen arr dengan key dan value
console.log(country.size);
console.log(country.get("New Delhi"));
console.log(country);