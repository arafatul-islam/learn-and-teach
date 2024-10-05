// Promises and the "await" keyword

// The await keyword is used to wait for a Promise to resolve.
// Once it has been resolved, the await expression returns the value of the resolved promise.

// Example with .then callback

// promise.then((message) => {
//     console.log(`Resolved with ${message}`)
//   })

// Example of awaiting a promise

// const message = await promise
// console.log(`Resolved with ${message}`)

// Assignment
// Similar to before, the applyDamage function takes a damage value and the player's current HP as inputs and returns a Promise. On line 1, call applyDamage with inputs:

// damage = 25
// currentHP = 50
// Then await the returned promise and save the resolved value in a variable called message which will be logged to the console (which is already written on line 5).

// ?

// Don't touch below this line

let message = applyDamage(25, 50).then((msg) => console.log(msg));

console.log(message);

function applyDamage(damage, currentHP) {
  return new Promise((resolve) => {
    const newHP = currentHP - damage;
    setTimeout(() => {
      resolve(
        `The player with ${currentHP} hit points suffers ${damage} points of damage and has ${newHP} hit points remaining.`
      );
    }, 1000);
  });
}
