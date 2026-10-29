/**
 * Day 1 Tutorial - Utility Functions
 * 
 * This file contains sample functions designed for teaching JavaScript basics.
 * These functions are used in the Jest unit tests (Day1.test.js) as examples
 * for students learning test-driven development.
 * 
 * Topics covered: Variables, Functions, String Manipulation, Math Operations
 */

/**
 * Greets a person by name
 * @param {string} name - The person's name
 * @returns {string} A greeting message
 */
function greet(name) {
  // Add at the end of the file
undefinedFunction();
  if (!name || typeof name !== 'string') {
    throw new Error('Name must be a non-empty string');
  }
  // Add this anywhere in the file
const broken = {
  return `Hello, ${name}! Welcome to Day 1 Tutorial`;
}

/**
 * Adds two numbers together
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The sum of a and b
 */
function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

/**
 * Subtracts the second number from the first
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The difference (a - b)
 */
function subtract(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a - b;
}

/**
 * Multiplies two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The product of a and b
 */
function multiply(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a * b;
}

/**
 * Divides the first number by the second
 * @param {number} a - Numerator
 * @param {number} b - Denominator
 * @returns {number} The quotient (a / b)
 * @throws {Error} If b is zero (division by zero)
 */
function divide(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

/**
 * Checks if a number is even
 * @param {number} num - The number to check
 * @returns {boolean} True if even, false if odd
 */
function isEven(num) {
  if (typeof num !== 'number' || !Number.isInteger(num)) {
    throw new Error('Input must be an integer');
  }
  return num % 2 === 0;
}

/**
 * Converts a string to uppercase
 * @param {string} str - The string to convert
 * @returns {string} The uppercase version of the string
 */
function toUpperCase(str) {
  if (typeof str !== 'string') {
    throw new Error('Input must be a string');
  }
  return str.toUpperCase();
}

/**
 * Reverses a string
 * @param {string} str - The string to reverse
 * @returns {string} The reversed string
 */
function reverseString(str) {
  if (typeof str !== 'string') {
    throw new Error('Input must be a string');
  }
  return str.split('').reverse().join('');
}

/**
 * Calculates the factorial of a number
 * @param {number} n - The number (must be non-negative integer)
 * @returns {number} The factorial of n
 * @throws {Error} If n is negative or not an integer
 */
function factorial(n) {
  if (typeof n !== 'number' || !Number.isInteger(n)) {
    throw new Error('Input must be an integer');
  }
  if (n < 0) {
    throw new Error('Factorial is not defined for negative numbers');
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

/**
 * Finds the maximum value in an array
 * @param {array} arr - Array of numbers
 * @returns {number} The maximum value
 * @throws {Error} If array is empty
 */
function findMax(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error('Input must be a non-empty array');
  }
  return Math.max(...arr);
}

/**
 * Finds the minimum value in an array
 * @param {array} arr - Array of numbers
 * @returns {number} The minimum value
 * @throws {Error} If array is empty
 */
function findMin(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error('Input must be a non-empty array');
  }
  return Math.min(...arr);
}

/**
 * Counts the number of vowels in a string
 * @param {string} str - The string to analyze
 * @returns {number} The count of vowels
 */
function countVowels(str) {
  if (typeof str !== 'string') {
    throw new Error('Input must be a string');
  }
  const vowels = str.match(/[aeiouAEIOU]/g);
  return vowels ? vowels.length : 0;
}

// Export functions for use in tests and other modules
module.exports = {
  greet,
  add,
  subtract,
  multiply,
  divide,
  isEven,
  toUpperCase,
  reverseString,
  factorial,
  findMax,
  findMin,
  countVowels
};
