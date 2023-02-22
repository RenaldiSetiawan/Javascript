// switch statement untuk melakukan pengecekan banyak kondisi dengan lebih mudah dan ringkas.
let language = "Indonesia";
let greeting = null;

switch (language) {
    case "English":
        greeting = "Good Morning!";
        break;
    case "Indonesia":
        greeting = "Selamat Pagi";
        break;
    case "Japanese":
        greeting = "Ohayou Gozaimasu!";
        break;
    default:
        greeting = "Selamat Pagi!";
}

console.log(greeting);