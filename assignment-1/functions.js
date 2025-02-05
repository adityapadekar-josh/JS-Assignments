/**
 * Question 1
 * 1.1 What happens when you add a for loop/while loop/switch case block inside a function and use return instead of break?
 * 1.2 Do statements after the loop run?
 * 1.3 What is the return value?
 * 1.4 Can we pass a return value from within a loop?
 * 1.5 Can you return from inside an if block? What impact does that have?
 */

// 1.1 It will stop the loop and exits the function.
// 1.2 After return the statements after the loop wont execute. They will execute if there if no return in the loop
// 1.3 It is the result or output of a function, it is the value specified in the return statement
// 1.4 Yes we can pass a return value from within a loop
// 1.5 Yes, it will exit the function early with the specified return value.

/**********************************************************************************************/

/**
 * Question 2
 * Take a function that accepts a function as a parameter (also known as callback function).
 * function test(callback){
 *  callback();
 * }
 * function callbackFunc(){
 *  console.log(“Calling the callback function”)
 *  return 5;
 * }
 * Explore the following cases - what is printed in the console, and what gets returned:
 * 2.1 test(callbackFunc)
 * 2.2 test(callbackFunc())
 * 2.3 test(() => callbackFunc())
 * 2.4 What happens when you return callback() from the test function?
 * 2.5 What happens when you return callback from the test function?
 */

function test(callback) {
  return callback();
}

function callbackFunc() {
  console.log("Calling the callback function");
  return 5;
}

// 2.1
test(callbackFunc); 
// will print "Calling the callback function" and return returns 5

// 2.2
test(callbackFunc()); 
// will print "Calling the callback function" and then will error out
// as 5 is passed to test and 5 is not a function that can be called

// 2.3
test(() => callbackFunc()); 
// will print "Calling the callback function" and return returns 5

// 2.4 
// will print "Calling the callback function" and return returns 5

// 2.5
// it will return a function which can be stored in a variable that 
// can be called later

