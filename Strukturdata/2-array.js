// Array 
let myArray = ["Cokelat", 42.5, 22, true, "Programming"];
console.log(myArray);

// indeks dimulai dari 0
console.log(myArray[4]);

//mengakses nilai array lebih dari index-nya, maka hasilnya akan undefined
console.log(myArray[5]);

console.log("Panjang nilai myArray adalah " + myArray.length + ".");

// push() -> menambahkan data ke dalam array
myArray.push('JavaScript');
console.log(myArray);

// pop() -> mengeluarkan data atau elemen terakhir dari array.
myArray.pop();
console.log(myArray);

// shift() -> mengeluarkan elemen pertama dari array.
// unshift() -> menambahkan elemen di awal array.
const newArr = ["Red", 10.5, 2, false, "Code"];

newArr.shift();
newArr.unshift("Blue");

console.log(newArr);

// splice() ->  menghapus elemen
newArr.splice(2, 1);   // Menghapus dari index 2 sebanyak 1 elemen
console.log(newArr);