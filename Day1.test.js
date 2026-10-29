/**
 * Day 1 Tutorial - Jest Unit Tests
 * 
 * This file demonstrates how to write unit tests using Jest for classroom instruction.
 * Students can use this as a reference for understanding:
 * - Test structure with describe() and test()
 * - Assertions (expect)
 * - Test cases for different scenarios (happy path, edge cases, error handling)
 * 
 * To run these tests:
 *   npm install          # Install dependencies
 *   npm test             # Run all tests
 *   npm run test:watch   # Run tests in watch mode
 *   npm run test:coverage # Generate coverage report
 */

const {
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
} = require('./Day1Utils');

// ============================================================================
// TEST SUITE 1: Basic String Functions
// ============================================================================
describe('Day 1 Tutorial - String Functions', () => {
  
  test('greet() should return a personalized greeting', () => {
    const result = greet('Alice');
    expect(result).toBe('Hello, Alice! Welcome to Day 1 Tutorial');
  });

  test('greet() should throw error for empty string', () => {
    expect(() => greet('')).toThrow('Name must be a non-empty string');
  });

  test('greet() should throw error for non-string input', () => {
    expect(() => greet(123)).toThrow('Name must be a non-empty string');
  });

  test('toUpperCase() should convert string to uppercase', () => {
    expect(toUpperCase('hello')).toBe('HELLO');
  });

  test('toUpperCase() should handle mixed case', () => {
    expect(toUpperCase('HeLLo WoRLd')).toBe('HELLO WORLD');
  });

  test('toUpperCase() should throw error for non-string', () => {
    expect(() => toUpperCase(123)).toThrow('Input must be a string');
  });

  test('reverseString() should reverse a string', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  test('reverseString() should handle single character', () => {
    expect(reverseString('a')).toBe('a');
  });

  test('reverseString() should reverse a number string', () => {
    expect(reverseString('12345')).toBe('54321');
  });

  test('reverseString() should throw error for non-string', () => {
    expect(() => reverseString(null)).toThrow('Input must be a string');
  });

  test('countVowels() should count vowels in a string', () => {
    expect(countVowels('hello')).toBe(2);
  });

  test('countVowels() should handle uppercase vowels', () => {
    expect(countVowels('AEIOU')).toBe(5);
  });

  test('countVowels() should handle mixed case', () => {
    expect(countVowels('HeLLo WoRLd')).toBe(3);
  });

  test('countVowels() should return 0 for strings with no vowels', () => {
    expect(countVowels('xyz')).toBe(0);
  });

  test('countVowels() should throw error for non-string', () => {
    expect(() => countVowels(123)).toThrow('Input must be a string');
  });
});

// ============================================================================
// TEST SUITE 2: Basic Arithmetic Functions
// ============================================================================
describe('Day 1 Tutorial - Arithmetic Functions', () => {

  test('add() should return sum of two positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('add() should handle negative numbers', () => {
    expect(add(-2, -3)).toBe(-5);
  });

  test('add() should handle mixed positive and negative', () => {
    expect(add(10, -5)).toBe(5);
  });

  test('add() should handle decimals', () => {
    expect(add(1.5, 2.5)).toBe(4);
  });

  test('add() should throw error for non-numeric input', () => {
    expect(() => add('2', 3)).toThrow('Both arguments must be numbers');
  });

  test('subtract() should return difference of two numbers', () => {
    expect(subtract(10, 3)).toBe(7);
  });

  test('subtract() should handle negative results', () => {
    expect(subtract(3, 10)).toBe(-7);
  });

  test('subtract() should throw error for non-numeric input', () => {
    expect(() => subtract(10, '3')).toThrow('Both arguments must be numbers');
  });

  test('multiply() should return product of two numbers', () => {
    expect(multiply(3, 4)).toBe(12);
  });

  test('multiply() should handle negative numbers', () => {
    expect(multiply(-3, 4)).toBe(-12);
  });

  test('multiply() should handle multiplication by zero', () => {
    expect(multiply(100, 0)).toBe(0);
  });

  test('multiply() should throw error for non-numeric input', () => {
    expect(() => multiply(3, 'four')).toThrow('Both arguments must be numbers');
  });

  test('divide() should return quotient of two numbers', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('divide() should handle decimal results', () => {
    expect(divide(10, 4)).toBe(2.5);
  });

  test('divide() should throw error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
  });

  test('divide() should throw error for non-numeric input', () => {
    expect(() => divide(10, 'two')).toThrow('Both arguments must be numbers');
  });
});

// ============================================================================
// TEST SUITE 3: Number Analysis Functions
// ============================================================================
describe('Day 1 Tutorial - Number Analysis Functions', () => {

  test('isEven() should return true for even numbers', () => {
    expect(isEven(4)).toBe(true);
    expect(isEven(0)).toBe(true);
    expect(isEven(-2)).toBe(true);
  });

  test('isEven() should return false for odd numbers', () => {
    expect(isEven(3)).toBe(false);
    expect(isEven(1)).toBe(false);
    expect(isEven(-3)).toBe(false);
  });

  test('isEven() should throw error for non-integer', () => {
    expect(() => isEven(2.5)).toThrow('Input must be an integer');
  });

  test('isEven() should throw error for non-number', () => {
    expect(() => isEven('four')).toThrow('Input must be an integer');
  });

  test('factorial() should calculate factorial of positive numbers', () => {
    expect(factorial(0)).toBe(1);
    expect(factorial(1)).toBe(1);
    expect(factorial(5)).toBe(120);
    expect(factorial(6)).toBe(720);
  });

  test('factorial() should throw error for negative numbers', () => {
    expect(() => factorial(-1)).toThrow('Factorial is not defined for negative numbers');
  });

  test('factorial() should throw error for non-integer', () => {
    expect(() => factorial(2.5)).toThrow('Input must be an integer');
  });

  test('factorial() should throw error for non-number', () => {
    expect(() => factorial('five')).toThrow('Input must be an integer');
  });
});

// ============================================================================
// TEST SUITE 4: Array Functions
// ============================================================================
describe('Day 1 Tutorial - Array Functions', () => {

  test('findMax() should find the maximum value in an array', () => {
    expect(findMax([1, 5, 3, 9, 2])).toBe(9);
  });

  test('findMax() should handle single element array', () => {
    expect(findMax([42])).toBe(42);
  });

  test('findMax() should handle negative numbers', () => {
    expect(findMax([-5, -2, -10, -1])).toBe(-1);
  });

  test('findMax() should handle mixed positive and negative', () => {
    expect(findMax([-5, 10, -2, 20, 3])).toBe(20);
  });

  test('findMax() should throw error for empty array', () => {
    expect(() => findMax([])).toThrow('Input must be a non-empty array');
  });

  test('findMax() should throw error for non-array', () => {
    expect(() => findMax('not an array')).toThrow('Input must be a non-empty array');
  });

  test('findMin() should find the minimum value in an array', () => {
    expect(findMin([1, 5, 3, 9, 2])).toBe(1);
  });

  test('findMin() should handle single element array', () => {
    expect(findMin([42])).toBe(42);
  });

  test('findMin() should handle negative numbers', () => {
    expect(findMin([-5, -2, -10, -1])).toBe(-10);
  });

  test('findMin() should handle mixed positive and negative', () => {
    expect(findMin([-5, 10, -2, 20, 3])).toBe(-5);
  });

  test('findMin() should throw error for empty array', () => {
    expect(() => findMin([])).toThrow('Input must be a non-empty array');
  });

  test('findMin() should throw error for non-array', () => {
    expect(() => findMin(null)).toThrow('Input must be a non-empty array');
  });
});

// ============================================================================
// INTEGRATION TEST: Combining Multiple Functions
// ============================================================================
describe('Day 1 Tutorial - Integration Tests', () => {

  test('should combine arithmetic operations correctly', () => {
    // Test: (10 + 5) * 2 = 30
    const step1 = add(10, 5);
    const result = multiply(step1, 2);
    expect(result).toBe(30);
  });

  test('should handle string and number operations together', () => {
    const name = 'john';
    const greeting = greet(toUpperCase(name.slice(0, 1)) + name.slice(1));
    expect(greeting).toContain('Hello, John');
  });

  test('should work with array and arithmetic functions', () => {
    const numbers = [10, 20, 30, 40, 50];
    const max = findMax(numbers);
    const min = findMin(numbers);
    const difference = subtract(max, min);
    expect(difference).toBe(40);
  });
});
