/* // kita bisa menambahkan kode dari package menggunakan keyword import 
// tambakahn type : module didalam packgae.json
import _ from 'lodash';
 
const myArray = [1, 2, 3, 4];
let sum = 0;
 
for(let i = 0; i < myArray.length; i++) {
    sum += myArray[i];
}
 
console.log(sum);

// atau gunakan fungsi reduce
const newArr = [5, 10];
let newSum = newArr.reduce((prev, curr) => {
    return prev + curr;
}); */
 
// console.log(newSum);

test('should return the max number between 3 arguments', () => {
    expect(findMax(1, 2, 3)).toEqual(3);
    expect(findMax(5, 1, 2)).toEqual(5);
    expect(findMax(102, 404, 48)).toEqual(404);
    expect(findMax(-1, 0, -1)).toEqual(0);
    expect(findMax(2, 2, 2)).toEqual(2);
})