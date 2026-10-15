// This file intentionally has syntax errors to trigger CI failure
function brokenFunction() {
  const x = {
    key: "value"
  // Missing closing brace - syntax error
  
  return x;
}

// Undefined variable usage - semantic error
console.log(undefinedVariable);

// Invalid syntax - missing operator
const y = 10 +;

module.exports = brokenFunction;
