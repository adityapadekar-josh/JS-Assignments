/**
 * Question 1:
 * Declare a variable - let a.
 * On another line assign any value you like to a.
 * Log the value of a before and after assignment.
 * Try doing the same with const.
 */

// Using let
let a;
console.log(a); // will print undefined
a = 10;
console.log(a); // will print 10

// Using const
const b; // will error out as const variable must be initialized on declaration
const b = 10;
b = 12 // will error out as const variable cannot be reassigned

/**********************************************************************************************/

/**
 * Question 2
 * Use the typeof operator to find the types of different variables.
 * Specially note what t typeof operator returns for arrays, null values and NaN.
 * How can you find if a variable  an array or NaN besides typeof?
 */

// using typeof
console.log(typeof 123); // "number"
console.log(typeof "Hello"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof []); // "object"
console.log(typeof null); // "object"
console.log(typeof NaN); // "number"

// Checking for Array or NaN:
console.log(Array.isArray([1, 2, 3, 4])); // true
console.log(Number.isNaN(NaN)); // true

/**********************************************************************************************/

/**
 * Question 3
 * Use let and const to create arrays and objects.
 * Try modifying, deleting properties within the array or object.
 * What do you expect to happen in both cases? What actually happens in both cases.
 * What is the difference between an object declared as a let or a const variable?
 */
let arr1 = [1, 2, 3];
arr1.push(4); // will allow modification of array
arr1.pop(4); // will allow modification of array
arr1 = [5, 6, 7]; // will allow reassignment

const arr2 = [1, 2, 3];
arr2.push(4); // will allow modification of array
arr2.pop(4); // will allow modification of array
arr2 = [5, 6, 7]; // will error out as const variable cannot be reassigned, this is a expected behavior

let obj1 = { name: "John", email: "aditya@gmail.com" };
obj1.name = "Doe"; // will allow modification of object
delete obj1.email; // will allow modification of object
obj1 = { age: 30 }; // will allow reassignment

const obj2 = { name: "John", email: "aditya@gmail.com" };
obj2.name = "Doe"; // will allow modification of object
delete obj2.email; // will allow modification of object
obj2 = { age: 30 }; // will error out as const variable cannot be reassigned, this is a expected behavior
