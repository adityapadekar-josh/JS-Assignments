/**
 * Question 1
 * What is the difference between ++i and i++?
 */

// ++i: increases i by 1 before returning the new value.
// i++: increases i by 1 after returning the original value.

/**********************************************************************************************/

/**
 * Question 2
 * What do you think would happen if you pass an index beyond the range of the string?
 * Or if you pass a negative index? Try it out.
 */

// It will return undefined in both cases
let arr = [1, 2, 3];
console.log(arr[4]); // prints undefined
console.log(arr[-1]); // prints undefined

/**********************************************************************************************/

/**
 * Question 3
 * Do you think JSON.stringify would work for arrays as well? What about nested objects?
 * What happens if we pass numbers, strings, undefined, null to JSON.stringify?
 */

// arrays: yes, it works well with arrays and converts them into a valid JSON string.
// nested objects: yes, it also handles nested objects properly.
// number, string, null: it converts them into a valid JSON string.
// undefined: it is omitted from objects or becomes null in arrays.

/**********************************************************************************************/

/**
 * Question 4
 * What happens if you pass a regular/invalid JSON string to JSON.parse?
 * What will happen if such an invalid function runs in the program?
 * Will other parts of the code execute correctly after that?
 */

// it will error out. 
// if it runs in a program, the execution of the program will end when this statement is executed
// other parts before this statement will execute properly, anything after it will not execute at all






