// JSON.parse akan melakukan parsing atau konversi dari variabel json (String) menjadi sebuah object. 
let json = '{ "name": "Yoda", "age": 20 }';
 
try {
    let user = JSON.parse(json);
    console.log('data JSON: ', user);
    console.log(user.name);
    console.log(user.age);
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}

// Apabila json tidak sesuai format, maka JSON.parse akan menimbulkan eror. 
// Eror tersebut akan ditangkap oleh blok catch dan kode di dalamnya yang akan dieksekusi.
let jsonError = '{ bad json }';
 
try {
    let user = JSON.parse(jsonError);
 
    console.log(user.name);
    console.log(user.age);
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}

// throw error
let jsonNew = '{ "Country": "Jakarta" }';
 
try {
    let user = JSON.parse(jsonNew);
 
    if (!user.address) {
        throw new SyntaxError("'address' is required."); 
    }
 
    console.log(user.address); // undefined
    console.log(user.Country); 
} catch (error) {
    console.log(`JSON Error: ${error.message}`);
}

// menampilkan pesan eror sesuai eror yang muncul?
// operator instanceOf, kita bisa mendapatkan tipe dari eror yang terjadi.
try {
    // ...
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log(`JSON Error: ${error.message}`);
    } else if (error instanceof ReferenceError) {
        console.log(error.message);
    } else {
        console.log(error.stack);
    }
}