const words = ['Hexaview', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6);

const result1=words.map(word=>word.replace('e','$#@'));

console.log(result1); //statement1
console.log(result);   // statement2

// SYNTAX ERROR: Missing closing brace
function brokenFunction() {
    const x = 5;
    return x * 2;
    // Missing closing brace intentionally
