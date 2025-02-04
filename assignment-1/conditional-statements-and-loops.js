/**
 * Question 1
 * Declare a variable let age = 25;.
 * Write a series of if else statements that will:
 * ○ Print child to the console if age is less than equal to 12.
 * ○ Print teen to the console if age is between 13 and 18 (inclusive).
 * ○ Print adult to the console if age is above 18
 */

let age1 = 25;
if (age1 <= 12) {
  console.log("child");
} else if (age1 >= 13 && age1 <= 18) {
  console.log("teen");
} else {
  console.log("adult");
}

/**********************************************************************************************/

/**
 * Question 2
 * Do the same using switch case.
 */

let age2 = 25;
switch (true) {
  case age2 <= 12:
    console.log("child");
    break;
  case age2 >= 13 && age2 <= 18:
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
let arraySize1 = 25;
let arr1 = [];
for (let i = 1; i <= arraySize1; i++) {
  arr1.push(i);
}

/**********************************************************************************************/

/**
 * Question 4
 * Accomplish the same using a while loop.
 */
let arraySize2 = 25;
let arr2 = [];
let i = 1;
while (i <= arraySize2) {
  arr2.push(i);
  i++;
}

/**********************************************************************************************/

/**
 * Question 5
 * Can you use return instead of break in loops?
 */
// no it return will exit the function all together not just the loop.
