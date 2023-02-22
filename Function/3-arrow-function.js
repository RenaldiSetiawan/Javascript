/* arrow function kita tidak perlu menuliskan keyword function setiap membuat fungsi. 
Kita tetap menuliskan parameter di dalam tanda kurung lalu diikuti dengan tanda panah (=>) sebelum kurung kurawal. */

// function declaration
function sayHello(greet) {
    console.log(`${greet}!`);
}
 
// function expression
const Welcome = function (name) {
    console.log(`Selamat Datang ${name}`)
}

// Arrow function
const sayName = (name, id) => {
    console.log(`Nama saya ${name} ${id}`)
}

// Apabila fungsi hanya memiliki satu parameter, maka kita bisa menghapuskan tanda kurung
const yourName = name => {
    console.log(`Nama saya ${name}`)
}

yourName("Layla");

// jika kita sama sekali tidak membutuhkan parameter, maka kita tetap menuliskan tanda kurung namun kosong
const sayHello = () => {
    console.log("Selamat pagi semuanya!")
};

sayHello();