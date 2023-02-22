// Parameter & Argument
// Parameter merupakan variabel yang didefinisikan sebagai inputan dari sebuah fungsi
function multiply(a, b) {
    // return a * b;
    console.log(a * b);
}
// Argument merupakan nilai atau expression yang dimasukkan ke dalam fungsi.
multiply(3, 4);

// fungsi greeting dengan parameter name dan language
function greeting(name, language) {

    if(language === "English") {
        console.log(`Good Morning ${name}!`);
    } else if (language === "Indonesia") {
        console.log(`Selamat Pagi ${name}!`);
    } else {
        console.log(`Anyoung haseyo ${name}!`);
    }

}

greeting("Harry", "Indonesia");

// function dapat menghasilkan output atau mengembalikan sebuah nilai.
function hitung(a, b) {
    return a * b;
}

let result = multiply(10, 2)

// Agar fungsi bisa mengembalikan nilai, gunakan keyword return diikuti dengan nilai yang akan dikembalikan
// Nilai kembalian tidak hanya number, bisa juga berupa string, boolean, object, array, atau tipe yang lain
function hello(name, language) {
   
    if(language === "English") {
        return `Good Morning ${name}!`
    } else if (language === "Indonesia") {
        return `Selamat Pagi ${name}!`;
    } else {
        return `Anyoung haseyo ${name}!`;
    }

}

let greetingMessage = hello("Harry", "Indonesia");
console.log(greetingMessage);