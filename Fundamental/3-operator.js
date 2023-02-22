// Assignment Operator
let x = 10;
let y = 5

x += y; // artinya -> x = x + y;
x -= y; // artinya -> x = x - y;
x *= y; // artinya -> x = x * y;
x /= y; // artinya -> x = x / y;
x %= y; // artinya -> x = x % y;
console.log(x);

// Comparison Operator
const aString = '10';
const aNumber = 10

console.log(aString == aNumber) // true, karena nilainya sama-sama 10
console.log(aString === aNumber) // false, karena walaupun nilainya sama, tetapi tipe datanya berbeda

// Logical Operator
/*  '&&' Logika akan menghasilkan nilai true apabila semua kondisi terpenuhi (bernilai true).
    '||' Logika akan menghasilkan nilai true apabila ada salah satu kondisi terpenuhi (bernilai true).
    '!' Digunakan untuk membalikkan suatu kondisi. 
*/
let a = 10;
let b = 12;

/* AND OPERATOR */
console.log('Operator &&: ', a < 15 && b > 10); // (true && true) -> true

/* OR operator */
console.log('Operator ||: ', a < 15 || b > 10); // (true || true) -> true
console.log('Operator ||: ', a > 15 || b > 10); // (false || true) -> true

/* NOT operator */
console.log(!(a < 15)); // !(true) -> false