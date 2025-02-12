/**
 * Create a validation class similar to ‘yup’ and add validations for required, min and max
 * for strings. Expose an isValid method that returns true or false based on the argument
 * passed
 */

class StringValidator {
  constructor() {
    this.validations = [];
  }

  required(message = "Field is required") {
    this.validations.push((value) => {
      if (!value || value.trim() === "") {
        return { isValid: false, message };
      }
      return { isValid: true };
    });
    return this;
  }

  min(length, message = `Minimum length should be ${length}`) {
    this.validations.push((value) => {
      if (!value || value.length < length) {
        return { isValid: false, message };
      }
      return { isValid: true };
    });
    return this;
  }

  max(length, message = `Maximum length should be ${length}`) {
    this.validations.push((value) => {
      if (!value || value.length > length) {
        return { isValid: false, message };
      }
      return { isValid: true };
    });
    return this;
  }

  isValid(value) {
    for (const validation of this.validations) {
      const result = validation(value);
      if (!result.isValid) {
        return false;
      }
    }
    return true;
  }
}

const validator1 = new StringValidator();

validator1.required().min(3).max(10);

console.log(validator1.isValid("")); // false
console.log(validator1.isValid("ab")); // false
console.log(validator1.isValid("abcdefghijk")); // false
console.log(validator1.isValid("hello")); // true


const validator2 = new StringValidator();
validator2.required().max(10);

console.log(validator2.isValid("")); // false
console.log(validator2.isValid("ab")); // true
console.log(validator2.isValid("abcdefghijk")); // false
console.log(validator2.isValid("hello")); // true
