// Promises in JavaScript

/* A Promise in JavaScript is very similar to making a promise in the real world. When we make a promise we are making a commitment to something. For example, I promise to explain JavaScript promises to you, my promise to you has 2 potential outcomes: it is either fulfilled, meaning I eventually explained promises to you, or it is rejected meaning I failed to keep my promise.

The Promise Object represents the eventual fulfillment or rejection of our promise and holds the resulting values. In the meantime, while we're waiting for the promise to be fulfilled, our code continues executing. Promises are the most popular modern way to write asynchronous code in JavaScript.

*/

// Declaring a Promise

/*
Here is an example of a promise that will resolve and return the string "resolved!" or reject and return the string "rejected!" after 1 second.
*/

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (getRandomBool()) {
//       resolve("resolved!");
//     } else {
//       reject("rejected!");
//     }
//   }, 1000);
// });

// function getRandomBool() {
//   return Math.random() < 0.5;
// }

// promise
//   .then((message) => {
//     console.log("promise ", message);
//   })
//   .catch((error) => {
//     console.log("promise ", error);
//   });

//   Assignment

/*

Complete the applyDamage function that takes two parameters:

damage
currentHP
It should return a Promise immediately, which will resolve or reject after 1 second because, in Fantasy Quest, dealing damage with an attack takes some time!"

If the damage inflicted would reduce the player's HP to 0 or less, the promise will reject with the string:

The player suffers DAMAGE points of damage and has fallen unconscious.

Otherwise, the promise will resolve with the string:

The player suffers DAMAGE points of damage and has NEWHP hit points remaining.

Where:

DAMAGE is the amount of damage inflicted.
NEWHP is the player's HP after the damage is applied.

*/

const applyDamage = (damage, currentHP) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (currentHP - damage < 0 || currentHP - damage == 0) {
        reject(
          `The player suffers ${damage} points of damage and has fallen unconscious.`
        );
      } else {
        resolve(
          `The player suffers ${damage} points of damage and has ${
            currentHP - damage
          } hit points remaining.`
        );
      }
    }, 1000);
  });
};

// Don't touch below this line

function runApplyDamageTest(damage, currentHP) {
  console.log(`Applying ${damage} damage to player with ${currentHP} HP...`);
  applyDamage(damage, currentHP)
    .then((message) => {
      console.log(`...applyDamage resolved with: ${message}`);
    })
    .catch((message) => {
      console.log(`...applyDamage rejected with: ${message}`);
    });
}

runApplyDamageTest(27, 50);
sleep(1100);
runApplyDamageTest(50, 50);
sleep(1100);
runApplyDamageTest(110, 100);
sleep(1100);

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
