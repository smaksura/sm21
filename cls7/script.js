let num = 5;
num>4? console.log("num is greater than 4 "):console.log("num is less than 4");

//const numbers = [10,20,30,40,50,60,70];
//let [a,b,c,d,...restnumbers] = numbers;
//console.log(a,b,c,d,restnumbers);

let numbers = [1,2,3,4,5,6,7]
let evennumber = numbers.filter(number => number %2==0);
console.log(evennumber);
let pownumber = evennumber.map(number =>Math.pow (number,2));
console.log(pownumber);

const colors = ['red', 'green', 'blue'];
const [ second, third,...color] = colors;
console.log( second, third,...color);

