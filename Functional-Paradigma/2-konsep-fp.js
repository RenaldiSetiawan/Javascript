// Pure Function
/* Pure Function merupakan konsep dari pembuatan fungsi yang mengharuskan fungsi 
untuk tidak bergantung terhadap nilai yang berada di luar fungsi atau parameternya */

//pure function juga dilarang keras untuk mengubah nilai yang berada di luar baik secara sengaja atau tidak sengaja
const hitungLuasLingkaran = (jariJari) => {
    return 3.14 * (jariJari * jariJari);
};

console.log(hitungLuasLingkaran(4));
console.log(hitungLuasLingkaran(4));
console.log(hitungLuasLingkaran(8));
console.log(hitungLuasLingkaran(8));

// Agar lebih mudah dalam mengetahui apakah fungsi yang Anda buat sudah pure atau belum, pastikan 3 konsep ini ada pada fungsi yang Anda buat.
/*  1. Mengembalikan nilai yang sama bila inputannya (nilai parameter) sama.
    2. Hanya bergantung pada argumen yang diberikan.
    3. Tidak menimbulkan efek samping. */
const createPersonWithAge = (age, person) => {
    return { ...person, age };
};

const person = {
    name: "Bobo",
};

const newPerson = createPersonWithAge(18, person);

console.log({
    person,
    newPerson,
});

// Imutability
// Immutable berarti sebuah objek tidak boleh diubah setelah objek tersebut dibuat.
const user = {
    firstname: 'Harry',
    lastName: 'Protter', // ups, typo!
}

const renameLastNameUser = (newLastName, user) => {
    user.lastName = newLastName;
}

renameLastNameUser('Potter', user);

console.log(user);

// Rekursif merupakan teknik pada sebuah function yang memanggil dirinya sendiri.
const countDown = start => {
    console.log(start);
    if (start > 0) countDown(start - 1);
};

countDown(10);

// Higher-Order Function
const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const arrayMap = (arr, action) => {
    const loopTrough = (arr, action, newArray = [], index = 0) => {
        const item = arr[index];1
        if (!item) return newArray;
        return loopTrough(arr, action, [...newArray, action(arr[index])], index + 1);
    }

    return loopTrough(arr, action);
}


const newNames = arrayMap(names, (name) => `${name}!`);

console.log({
    names,
    newNames,
});