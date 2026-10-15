// This file has intentional syntax errors for testing CI failure

const greeting = "Hello World"

// Missing closing brace
function sayHello( {
    console.log(greeting);
}

// Unclosed string
const message = "This is broken;

// Invalid syntax - double equals typo
if (true === {
    console.log("Broken condition");
}

// Export statement with typo
exporrt default greeting;
