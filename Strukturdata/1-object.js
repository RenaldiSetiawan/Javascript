// Object
const user = {
    firstName: "Renal",
    lastName: "Stwn",
    age: 19,
    isJedi: true,
    "Country": "Indonesia"
};

console.log(`Halo, nama saya ${user.firstName} ${user.lastName}`);
console.log(`Umur saya ${user.age} tahun`);
console.log(`Saya berasal dari ${user["Country"]}`);

// Untuk mengubah nilai properti di dalam object kita gunakan assignment operator (=).
user.Country = "Jakarta";
console.log(user.Country);