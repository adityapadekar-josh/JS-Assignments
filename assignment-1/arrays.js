const data = require("./data.json");

/**
 * Question 1
 * Take the above array of objects. Accomplish the following tasks:
 * 1.1 Write a function filterByName that accepts a string as a parameter and
 *     returns an array with only those objects where the first_name field includes that string.
 * 1.2 Use Array.map to return an array of all the email fields.
 * 1.3 Use Array.sort to return the array sorted in descending order by date_of_birth.
 * 1.4 Write a function getById that accepts a number as a parameter and returns the object where the id is equal to that number.
 */

// 1.1
function filterByName(name) {
  return data.filter((item) =>
    item.first_name.toLowerCase().includes(name.toLowerCase()),
  );
}

console.log(filterByName("Nicki"));
// [
//   {
//     id: 1,
//     first_name: "Nicki",
//     email: "ncrozier0@squarespace.com",
//     date_of_birth: "2009/05/09",
//   },
// ];

// 1.2
const emails = data.map((item) => item.email);
console.log(emails);

// 1.3
data.sort((a, b) => new Date(b.date_of_birth) - new Date(a.date_of_birth));
console.log(data);

// 1.4
function getById(id) {
  return data.find((item) => item.id === id);
}

console.log(getById(5));
// {
//   id: 5,
//   first_name: 'Venita',
//   email: 'vheap4@clickbank.net',
//   date_of_birth: '2020/10/04'
// }

console.log(getById(532)); // it will return undefined as there is no entry with id 532
// undefined

/**********************************************************************************************/

/**
 * Question 2
 * What makes a method mutating or non mutating in Javascript?
 * Find out whether each of the following methods are mutating or non-mutating. How can you verify this
 * 2.1 push
 * 2.2 pop
 * 2.3 filter
 * 2.4 find
 * 2.5 sort
 * 2.6 map
 */

// a mutating method modify the array while a non-mutating method does not modify the array.

// 2.1 push - is mutating
let arr1 = [1, 2, 3];
arr1.push(4);
console.log(arr1); // [1, 2, 3, 4] array is changed

// 2.2 pop - is mutating
let arr2 = [1, 2, 3];
arr2.pop();
console.log(arr2); // [1, 2] array is changed

// 2.3 filter - is non mutating
let arr3 = [1, 2, 3, 4];
let result1 = arr3.filter((num) => num > 2);
console.log(result1); // [3, 4]
console.log(arr3); // [1, 2, 3, 4] array is not changed

// 2.4 find - is non mutating
let arr4 = [1, 2, 3, 4];
let result2 = arr4.find((num) => num > 2);
console.log(result2); // 3
console.log(arr4); // [1, 2, 3, 4] array is not changed

// 2.5 sort - is mutating
let arr5 = [3, 1, 4, 2];
arr5.sort((num) => num > 2);
console.log(arr5); // [1, 2, 3, 4] array is changed

// 2.3 map - is non mutating
let arr6 = [1, 2, 3];
let result3 = arr6.map((num) => num * 2);
console.log(result3); // [2, 4, 6]
console.log(arr6); // [1, 2, 3] array is not changed
