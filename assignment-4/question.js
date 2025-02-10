/**
 * Create a memoised function that returns the cached value when the same arguments are passed.
 */

const memoizeFunc = (cb) => {
  const cache = new Map();

  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = cb(...args);
    cache.set(key, result);
    return result;
  };
};

const add = (a, b) => a + b;
const memoizedAdd = memoizeFunc(add);

console.log(memoizedAdd(1, 2));
console.log(memoizedAdd(1, 2));
console.log(memoizedAdd(2, 3));
