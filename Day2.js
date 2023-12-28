const words = ['Hexaview', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6);

const result1=words.map(word=>word.replace('e','$#@'));

console.log(result1); //statement1
console.log(result);   // statement2