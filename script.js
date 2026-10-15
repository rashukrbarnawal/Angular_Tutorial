let count=1;

function incrementFunction() {
   count++;
   {
    var a=10;
    let b=20;
    console.log(a)
    console.log(b)
   }
   console.log("Inside Function"+ a);
}
incrementFunction()




// Intentional syntax errors for CI failure
a=10

var a;
a=10
b="10"

// Missing closing bracket and parenthesis
const obj = {
  method: function() {
    return "value"
  // Missing closing brace
;

// Invalid variable reference
console.log(undefinedVar)

a===b
