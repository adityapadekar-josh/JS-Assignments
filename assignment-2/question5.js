/**
 * What will be printed to the console?
 * const testAsyncFunction = () => {
 *  return new Promise((resolve, reject) => {
 *    if (Math.random() > 0.5) {
 *      resolve('Test Resolve');
 *    } else {
 *      reject('Test Reject');
 *    }
 *  }).catch((err) => {
 *    console.log('Error caught in testAsyncFunction', err);
 *    throw new Error('Forced error');
 *  });
 * };
 * 
 * testAsyncFunction()
 * .then((res) => {
 *  console.log('Response in then block: ', res);
 * })
 * .catch((err) => console.log('Error in catch block: ', err));
 */

// The output printed on the console is:
// Response in then block:  Test Resolve