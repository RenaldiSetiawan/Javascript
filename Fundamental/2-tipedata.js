// mendeklarasikan variabel tanpa menginisialisasikan nilainya, variabel tersebut menjadi undefined.
let a;
console.log(typeof(a)); 
//Fungsi typeof() digunakan untuk memastikan tipe data pada variabel dengan mengembalikan tipe data tersebut dalam bentuk teks.

// number
let b = 10;
console.log(typeof(b));

// Operator
let c = 5;
let d = 15;

console.log(c + d)
console.log(c - d)
console.log(c * d)
console.log(c / d)
console.log(c % d)

//  increment (++) dan decrement (--) digunakan untuk menambahkan atau mengurangi nilai 1 pada nilai variabel yang ada sekarang\
let postfix = 5;
postfix++;
console.log('postfix: ', postfix);

let prefix = 5;
prefix--;
console.log('prefix: ', prefix);

// String
let say = "Hello";
console.log("Tipe data: ", typeof(say));

// variabel ke dalam sebuah string template
const myName = "stwn";
console.log(`Hello, my name is ${myName}.`);

// Boolean
let x = true;
let y = false;
console.log(typeof(x))
console.log(typeof(y))

// operator komparasi seperti lebih dari (>) atau kurang dari (<)
const numberOne = 10;
const numberTwo = 12;

let isTrue = numberOne < numberTwo;
let isFalse = numberOne > numberTwo;

console.log(isTrue);
console.log(isFalse);

// Null biasa digunakan sebagai nilai sementara pada variabel, tapi sebenarnya nilai tersebut “tidak ada”.
let someLaterData = null;
console.log(someLaterData);