/*
While the await keyword can be used in place of .then() to resolve a promise, the async keyword can be used in place of new Promise() to create a new promise.

When a function is prefixed with the async keyword, it will automatically return a Promise. That promise resolves with the value that your code returns from the function. You can think of async as "wrapping" your function within a promise.

These are equivalent:

New Promise()
function getPromiseForUserData(){
  return new Promise((resolve) => {
    fetchDataFromServerAsync().then(function(user){
      resolve(user)
    })
  })
}

const promise = getPromiseForUserData()
Copy icon
Async
async function getPromiseForUserData(){
  const user = await fetchDataFromServer()
  return user
}

const promise = getPromiseForUserData()
Copy icon
Note: await can only be used inside an async function or at the top level of a module.

Assignment
As it turns out, the await keyword can only be used within async functions.

Go ahead and try to run the code! You'll get an error.

Update our getItemData() function in our Fantasy Quest code so that it can properly await the promise returned by the fetch() call. */

async function getItemData() {
  const response = await fetch(
    "https://api.boot.dev/v1/courses_rest_api/learn-http/items",
    getSettings()
  );

  return await response.json();
}

// don't touch below this line
async function main() {
  const items = await getItemData();
  logItems(items);
}

main();

function getSettings() {
  return {
    method: "GET",
    mode: "cors",
    headers: {
      "X-API-Key": "Testing",
      "Content-Type": "application/json",
    },
  };
}

function logItems(items) {
  for (const item of items) {
    console.log(item.name);
  }
}
