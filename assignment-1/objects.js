/**
 * Question 1
 * How will you create a new copy of the object below while updating the value of address.details[0] to “5“?
 * {
 *    name:”Harry Potter”,
 *    age: 12,
 *    address: {
 *        details: [“4”, “Privet Drive”],
 *        area:”Little Whinging”,
 *        city: “Surrey”,
 *        state: “England”
 *    }
 * }
 */

const newObj = {
  ...obj,
  address: {
    ...obj.address,
    details: ["5", ...obj.address.details.slice(1)] 
  }
};

console.log(newObj);

/**********************************************************************************************/

/**
 * Question 2
 * Write a function filterObj that will filter out all the keys of a flat object that have objects or arrays using Object.keys and Object.entries.
 * Example:
 * let obj = {
 *    a: "Apple",
 *    b: ["Basketball", "Baseball"],,,,
 *    c: {
 *        call: "cellphone"
 *    },
 *    d: "Dog"
 * }
 *
 * filterObject(obj) //This should return {a:”Apple”, d:”Dog”}
 */

function filterObj(obj) {
  let result = {};
  Object.entries(obj).forEach(([key, value]) => {
    if (typeof value !== "object" || value === null) {
      result[key] = value;
    }
  });
  return result;
}
