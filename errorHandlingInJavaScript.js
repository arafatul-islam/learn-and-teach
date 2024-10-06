/* 
Error handling in JavaScript
When something goes wrong while a program is running, JavaScript uses the try/catch paradigm for handling those errors. Try/catch is fairly common, Python uses a similar mechanism.

First, an error is thrown
For example, let's say we try to access a property on an undefined variable. JavaScript will automatically "throw" an error.

const speed = car.speed
// The code crashes with the following error:
// "ReferenceError: car is not defined"
Copy icon
Trying and catching errors
By wrapping that code in a try/catch block, we can handle the case where car is not yet defined.

try {
  const speed = car.speed
} catch (err) {
  console.log(`An error was thrown: ${err}`)
  // the code cleanly logs:
  // "An error was thrown: ReferenceError: car is not defined"
}
Copy icon
Handling a new error object
When handling a thrown Error object, you must access the message property of the error object to display it correctly to the console.

let err = new Error('This is the error message');

try {
  // computation
} catch (err) {
  console.log(`An error was thrown: ${err.message}`)
  // the code cleanly logs:
  // "An error was thrown: This is the error message"
}
Copy icon
Assignment
The following code is failing to execute. It is throwing an error string that isn't being handled gracefully. As a result, the entire program is crashing.

Properly handle the error in the code by wrapping all of the function calls within a single try...catch block. The catch block should log any error messages to the console, without extra formatting.

*/

try {
  printCharacterStats(4);
  printCharacterStats("ten");
  printCharacterStats(10);
} catch (error) {
  console.log("this is a error message:", error);
}

// don't touch below this line

function printCharacterStats(level) {
  if (isNaN(level)) {
    throw new Error("Parameter is not a number!");
  }
  console.log(`Your character is level ${level}!`);
}
