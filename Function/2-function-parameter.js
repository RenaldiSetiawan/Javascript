// Jika parameter dari fungsi adalah sebuah object, kita juga bisa memanfaatkan destructuring object untuk mendapatkan nilainya.
const user = {
    id: 24,
    displayName: 'ren',
    fullName: 'Renal',
};

function introduce({displayName, fullName}) {
    console.log(`${displayName} is ${fullName}`);
}

introduce(user);

// Rest Parameter
// rest parameter, dapat menggabungkan beberapa elemen menjadi satu array
function sum(...numbers) {

    let result = 0;

    for (let number of numbers) {
        result += number;
    }

    return result;
}

console.log(sum(1, 2, 2));

