// This file intentionally contains syntax errors to fail CI checks

// Error 1: Missing closing brace
function incomplete() {
  console.log("This function is not closed"

// Error 2: Invalid token in function declaration
function invalid_function{ {
  const x = 42;
}

// Error 3: Incomplete object literal
const obj = {
  name: "test",
  value: 123

// Error 4: Missing semicolon after statement (JavaScript allows this, but let's add another error)
const arr = [1, 2, 3]
  .map(x => x * 2)
  .filter(x => x > 0

// Error 5: Invalid syntax - random tokens
let broken = ;

// Error 6: Unmatched bracket
if (true) {
  console.log("test")
