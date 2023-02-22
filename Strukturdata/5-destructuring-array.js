const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
 
const [firstFood, secondFood, thirdFood] = favorites;
 
console.log(firstFood);
console.log(secondFood);
console.log(thirdFood);

// memilih nilai pada index tertentu menngunakan 'koma , ' untuk destrukturisasi pada array.
const [, , , fourthFood] = favorites;
 
console.log("Index terakhir: ", fourthFood);

// Destructuring Assignment
const allFood = ["mie", "rice", "milk"];
 
[myFood, herFood, sheFood, brotherFood] = allFood;
 
console.log(myFood);
console.log(herFood);
console.log(sheFood);
console.log(brotherFood); // undifiend karna data array hanya 3