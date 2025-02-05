/**
 * Question 1
 * Declare a variable let age = 25;.
 * Write a series of if else statements that will:
 * ○ Print child to the console if age is less than equal to 12.
 * ○ Print teen to the console if age is between 13 and 18 (inclusive).
 * ○ Print adult to the console if age is above 18
 */

let age = 25;
if (age <= 12) {
  console.log("child");
} else if (age >= 13 && age <= 18) {
  console.log("teen");
} else {
  console.log("adult");
}

/**********************************************************************************************/

/**
 * Question 2
 * Do the same using switch case.
 */

age = 25;
switch (true) {
  case age <= 12:
    console.log("child");
    break;
  case age >= 13 && age <= 18:
    console.log("teen");
    break;
  default:
    console.log("adult");
}

/**********************************************************************************************/

/**
 * Question 3
 * Declare a variable let arraySize = 25;.
 * Using a for loop, add numbers from one onwards into an array till the arraySize is reached.
 */
let arraySize = 25;
let arr1 = [];
for (let i = 1; i <= arraySize; i++) {
  arr1.push(i);
}

/**********************************************************************************************/

/**
 * Question 4
 * Accomplish the same using a while loop.
 */
arraySize = 25;
let arr2 = [];
let i = 1;
while (i <= arraySize) {
  arr2.push(i);
  i++;
}

/**********************************************************************************************/

/**
 * Question 5
 * Can you use return instead of break in loops?
 */
// no it return will exit the function all together not just the loop.
