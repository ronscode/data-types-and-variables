/* Problem: Amazing Numbers

You will receive a number, check if it is amazing 
An amazing is a number, which sum of digits includes 9
Print it in format "{number} Amazing? {True or False}" 

https://www.w3schools.com/jsref/jsref_obj_number.asp
https://www.w3schools.com/jsref/jsref_tostring_number.asp
https://www.w3schools.com/jsref/jsref_includes.asp
*/

function solve(num) {
  num = num.toString();
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += Number(num[i]);
  }
  let result = sum.toString().includes('9'); // returns a boolean 
  console.log( (result) ? `${num} Amazing? True` : `${num} Amazing? False`);
}

solve(1233); // 1 + 2 + 3 + 3 = 9 (true)
solve(999); // 9 + 9 + 9 = 27 (false, no 9 in result)