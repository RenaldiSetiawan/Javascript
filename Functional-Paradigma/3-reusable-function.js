// fungsi map akan mengembalikan array baru
// Nilai tiap item pada array yang dikembalikan, dihasilkan dari kembalian callback function-nya
const newArray = ['Harry', 'Ron', 'Jeff', 'Thomas'].map((name) => { return `${name}!`});

console.log(newArray);

// array.filter()
// fungsi ini sangat berguna untuk melakukan proses penyaringan (filtering) terhadap nilai array yang ada
const truthyArray = [1, '', 'Hallo', 0, null, 'Harry', 14].filter((item) => Boolean(item));

console.log(truthyArray);

// penggunaan filter untuk menyaring array dari objek
const students = [
    { name: 'Harry', score: 60 },
    { name: 'James', score: 88 },
    { name: 'Ron', score: 90 },
    { name: 'Bethy', score: 75 }
];
  
const eligibleForScholarshipStudents = students.filter((student) => student.score > 85);
  
console.log(eligibleForScholarshipStudents);

// Array Reduce
/* array.reduce() adalah fungsi bawaan dari data yang bertipe array yang digunakan untuk 
mengeksekusi fungsi reducer pada setiap elemen array dan hanya mengembalikan output satu nilai saja. */
const totalScore = students.reduce((acc, student) => acc + student.score, 0);

console.log(totalScore);

// Array Some
// array.some() merupakan fungsi bawaan dari array yang cukup sering digunakan. Fungsi ini akan menghasilkan nilai boolean.
const array = [1, 2, 3, 4, 5];
const even = array.some(element => element % 2 === 0);

console.log(even);

// Array Find
// array.find() sesuai namanya digunakan untuk mencari apakah di dalam deretan nilai terdapat nilai yang sesuai dengan kriteria yang kita definisikan pada callback function.
const findJames = students.find(student => student.name === 'James');
console.log(findJames);

// Array Sort
// array.sort() untuk melakukan pengurutan nilai dari sebuah deretan nilai
// Secara default, fungsi sort akan mengubah semua nilai dalam deretan menjadi bentuk string dan mengurutkannya secara ascending.
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months); // output: [ 'Dec', 'Feb', 'Jan', 'March' ]

const array1 = [1, 30, 4, 1000, 101, 121];
array1.sort();
console.log(array1); // output: [ 1, 1000, 101, 121, 30, 4 ]


// Array Every
// array.every() mengecheck apakah semua nilai dari sebuah array sesuai dengan kriteria yang didefinisikan
// Kembalian dari array.every() adalah nilai Boolean.
const scores = [70,85,90];
const minimumScore = 65;

const examPassed = scores.every(score => score >= minimumScore);
console.log(examPassed)

// Array forEach
// untuk memanggil fungsi callback pada setiap iterasi index array
const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

 
for(let i = 0; i < names.length; i++) {
    if(names[i] === 'Jeff') continue; // Bisa!
    
    console.log(`Hello, ${names[i]}!`);
}

// Tidak Bisa! menggunakan continue
/* names.forEach((name) => {
    if(name === 'Jeff') continue; 
    console.log(`Hello, ${name}`);
}); */

