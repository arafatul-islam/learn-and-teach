/*

async/await makes error handling easier
try and catch are the standard way to handle errors in JavaScript, the trouble is, the original Promise API with .then didn't allow us to make use of try and catch blocks.

Luckily, the async and await keywords do allow it, yet another reason to prefer the newer syntax.

.catch() callback on promises
The .catch() method works similarly to the .then() method, but it fires when a promise is rejected instead of resolved.

Example with .then and .catch callbacks
fetchUser().then(function(user){
  console.log(`user fetched: ${user}`)
}).catch(function(err){
  console.log(`an error was thrown: ${err}`)
});
Copy icon
Example of awaiting a promise
try {
  const user = await fetchUser()
  console.log(`user fetched: ${user}`)
} catch (err) {
  console.log(`an error was thrown: ${err}`)
}
Copy icon
As you can see, the async/await version looks just like normal try/catch JavaScript!

Assignment
We're trying to fetch the worldwide leaderboard from the Fantasy Quest servers, but we're getting an error! Fortunately, it's just because the server is down, there's nothing wrong with the fetchLeaderBoard function.

However, as good software engineers, we need to handle our server being down cleanly and display an error message to our users.

Wrap the network call within a try/catch block. Within the catch block, log the text:

Our servers are down, but we will be up and running soon

const leaderboard = await fetchLeaderBoard();
console.log(leaderboard);

// don't touch below this line

async function fetchLeaderBoard() {
  const response = await fetch("https://fantasyquest.servers");
  return response.json();
}

*/
(async () => {
  try {
    const leaderboard = await fetchLeaderBoard();
    console.log(leaderboard);
  } catch (error) {
    console.log(`Our servers are down, but we will be up and running soon`);
  }
})();

// don't touch below this line

async function fetchLeaderBoard() {
  const response = await fetch("https://fantasyquest.servers");
  return response.json();
}
