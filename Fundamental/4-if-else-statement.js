// Statement if akan menguji suatu kondisi. Jika kondisi bernilai true, maka blok kode di dalamnya akan dijalankan. Sebaliknya, jika bernilai false, maka proses yang ditentukan akan dilewatkan.
const isRaining = true;

if (isRaining) {
    console.log("Hari ini hujan");
}

let x = 10;

if (x > 50) {
    console.log(x);
} else {
    console.log("Nilai Kurang dari 50");
}

let language = "Indonesia";
let greeting = "Selamat Pagi";

if (language === "English") {
    greeting = "Good Morning!";
} else if (language === "Indonesia") {
    greeting = greeting;
} else if (language === "Japanese") {
    greeting = "Ohayou Gozaimasu!";
}

console.log(greeting);

// ternary operator atau conditional expressions. Dengan ini, kita bisa menuliskan if-else statement hanya dalam satu baris.
// condition ? true expression : false expression

const isMember = false;
const discount = isMember ? 0.1 : 0;
console.log(`Anda mendapatkan diskon sebesar ${discount * 100}%`)
