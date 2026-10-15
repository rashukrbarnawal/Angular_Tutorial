// Test file with intentional syntax errors to demonstrate CI/CD validation failures

// Error 1: Missing closing brace in function
function validateStyles() {
  console.log("Checking styles...");
  if (document.querySelector('styles.css')) {
    console.log("Styles found");
  
  // Missing closing brace

// Error 2: Unexpected token - missing semicolon and quotes
const config = {
  theme: "dark
  colors: ["red", "blue", "green"]
}

// Error 3: Invalid function declaration
function const setup()
{
  return true;
}

// Error 4: Unexpected closing bracket
const array = [1, 2, 3,, 4, 5];
}

// Error 5: Missing opening parenthesis
if true {
  console.log("This is an error");
}
