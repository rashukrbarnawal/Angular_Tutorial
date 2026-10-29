/**
 * Class Test File - JavaScript Testing Demonstration
 * This file demonstrates basic JavaScript testing concepts
 * Perfect for classroom demonstrations of unit testing
 */

// Simple utility functions to test
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero not allowed");
  }
  return a / b;
}

function isEven(num) {
  return num % 2 === 0;
}

function isOdd(num) {
  return num % 2 !== 0;
}

// Simple Test Framework
class SimpleTest {
  constructor(name) {
    this.name = name;
    this.passed = 0;
    this.failed = 0;
    this.tests = [];
  }

  assertEqual(actual, expected, message) {
    if (actual === expected) {
      this.passed++;
      console.log(`✓ PASS: ${message}`);
      this.tests.push({ status: 'pass', message });
    } else {
      this.failed++;
      console.log(`✗ FAIL: ${message} (expected: ${expected}, got: ${actual})`);
      this.tests.push({ status: 'fail', message, expected, actual });
    }
  }

  assertTrue(value, message) {
    if (value === true) {
      this.passed++;
      console.log(`✓ PASS: ${message}`);
      this.tests.push({ status: 'pass', message });
    } else {
      this.failed++;
      console.log(`✗ FAIL: ${message} (expected true, got ${value})`);
      this.tests.push({ status: 'fail', message });
    }
  }

  assertFalse(value, message) {
    if (value === false) {
      this.passed++;
      console.log(`✓ PASS: ${message}`);
      this.tests.push({ status: 'pass', message });
    } else {
      this.failed++;
      console.log(`✗ FAIL: ${message} (expected false, got ${value})`);
      this.tests.push({ status: 'fail', message });
    }
  }

  summary() {
    const total = this.passed + this.failed;
    console.log(`\n========== TEST SUMMARY: ${this.name} ==========`);
    console.log(`Total: ${total} | Passed: ${this.passed} | Failed: ${this.failed}`);
    console.log(`Success Rate: ${total > 0 ? ((this.passed / total) * 100).toFixed(2) : 0}%`);
    console.log(`==============================================\n`);
    return { total, passed: this.passed, failed: this.failed };
  }
}

// Run Tests
console.log("🚀 Starting Class Test Suite\n");

const mathTests = new SimpleTest("Math Operations");

// Addition Tests
mathTests.assertEqual(add(2, 3), 5, "2 + 3 should equal 5");
mathTests.assertEqual(add(-1, 1), 0, "-1 + 1 should equal 0");
mathTests.assertEqual(add(0, 0), 0, "0 + 0 should equal 0");

// Subtraction Tests
mathTests.assertEqual(subtract(5, 3), 2, "5 - 3 should equal 2");
mathTests.assertEqual(subtract(0, 5), -5, "0 - 5 should equal -5");

// Multiplication Tests
mathTests.assertEqual(multiply(4, 5), 20, "4 * 5 should equal 20");
mathTests.assertEqual(multiply(-2, 3), -6, "-2 * 3 should equal -6");

// Division Tests
mathTests.assertEqual(divide(10, 2), 5, "10 / 2 should equal 5");
mathTests.assertEqual(divide(7, 2), 3.5, "7 / 2 should equal 3.5");

// Number Type Tests
const numberTests = new SimpleTest("Number Type Checks");

numberTests.assertTrue(isEven(4), "4 should be even");
numberTests.assertFalse(isEven(5), "5 should not be even");
numberTests.assertTrue(isOdd(3), "3 should be odd");
numberTests.assertFalse(isOdd(2), "2 should not be odd");

// Show summaries
mathTests.summary();
numberTests.summary();

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    add,
    subtract,
    multiply,
    divide,
    isEven,
    isOdd,
    SimpleTest
  };
}
