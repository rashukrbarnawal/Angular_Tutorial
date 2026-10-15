const words = ['Hexaview', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6);

const result1=words.map(word=>word.replace('e','$#@'));

// Intentional syntax error - missing closing parenthesis
console.log(result1; //statement1
console.log(result);   // statement2

// More syntax errors to trigger CI failure
const badvar = {
  key1: "value1"
  key2: "value2"  // Missing comma
};

function incompleteFunc() {
  const x = 5 +; // Invalid syntax
}
