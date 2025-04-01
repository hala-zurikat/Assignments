/**(1,1)(1,2)(1,3) 
/**(2,1)(2,2)(2,3) 
/**(3,1)(3,2)(3,3) 
*/
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`(${i},${j})`);
  }
}
let arr1 = [1, 2, 3, 4, 5];
console.log(arr1.map((y) => y * 3));

let arr4 = [1, 2, 2, 3, 3, 4, 5];
arr4 = arr4.filter((value, index, arr) => arr.indexOf(value) === index);
console.log(arr4);

let arr = [
  { name: "husam", age: 30 },
  { name: "ali", age: 40 },
  { name: "ahmad", age: 22 },
];
arr.sort((a, b) => a.age - b.age);
console.log(arr);
