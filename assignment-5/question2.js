/**
 * Implement a Fibonacci sequence generator using a generator function in JavaScript.
 */

function* fibonacci() {
  let f1 = 0;
  let f2 = 1;
  while (true) {
    yield f1;
    const temp = f1 + f2;
    f1 = f2;
    f2 = temp;
  }
}

const fib = fibonacci();

console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
