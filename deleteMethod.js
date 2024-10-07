/*

Delete
The DELETE method does exactly what you expect: it deletes a specified resource.

Example
// This deletes the location with ID: 52fdfc07-2182-454f-963f-5f0f9a621d72
const url = 'https://api.boot.dev/v1/courses_rest_api/learn-http/locations/52fdfc07-2182-454f-963f-5f0f9a621d72'

await fetch(url, {
  method: 'DELETE',
  mode: 'cors'
})
Copy icon
Assignment
Users need to be able to delete their player accounts! Complete the deleteUser function. It should send a DELETE request to the given fullURL. You'll need to set the method, mode and headers. Like before, set the X-API-Key header to equal the given apiKey.


async function deleteUser(baseURL, id, apiKey) {
  const fullURL = `${baseURL}/${id}`
  // ?
}

// don't touch below this line

const userId = '0194fdc2-fa2f-4cc0-81d3-ff12045b73c8'
const generatedKey = generateKey()
const url = 'https://api.boot.dev/v1/courses_rest_api/learn-http/users'

async function getUsers(url, apiKey) {
  const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'X-API-Key': apiKey
    }
  })
  return response.json()
}

function generateKey() {
  const characters = 'ABCDEF0123456789'
  let result = ''
  for (let i = 0; i < 16; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}

function logUsers(users) {
  console.log('Logging user records:')
  for (const user of users) {
    console.log(`User uuid: ${user.id}, Character name: ${user.characterName}, Class: ${user.class}, Level: ${user.level}, User: ${user.user.name}`)
  }
}

const users = await getUsers(url, generatedKey)
logUsers(users)
console.log('---')

await deleteUser(url, userId, generatedKey)
console.log(`Deleted user with id: ${userId}`)
console.log('---')

const newUsers = await getUsers(url, generatedKey)
logUsers(newUsers)
console.log('---')

*/

async function deleteUser(baseURL, id, apiKey) {
  const fullURL = `${baseURL}/${id}`;
  const response = await fetch(fullURL, {
    method: "delete",
    mode: "cors",
    headers: {
      "X-API-Key": apiKey,
      "CONTENT-TYPE": "application/json",
    },
  });

  return response.json();
}

// don't touch below this line

const userId = "0194fdc2-fa2f-4cc0-81d3-ff12045b73c8";
const generatedKey = generateKey();
const url = "https://api.boot.dev/v1/courses_rest_api/learn-http/users";

async function getUsers(url, apiKey) {
  const response = await fetch(url, {
    method: "GET",
    mode: "cors",
    headers: {
      "X-API-Key": apiKey,
    },
  });
  return response.json();
}

function generateKey() {
  const characters = "ABCDEF0123456789";
  let result = "";
  for (let i = 0; i < 16; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

function logUsers(users) {
  console.log("Logging user records:");
  for (const user of users) {
    console.log(
      `User uuid: ${user.id}, Character name: ${user.characterName}, Class: ${user.class}, Level: ${user.level}, User: ${user.user.name}`
    );
  }
}

(async () => {
  const users = await getUsers(url, generatedKey);
  logUsers(users);
  console.log("---");

  await deleteUser(url, userId, generatedKey);
  console.log(`Deleted user with id: ${userId}`);
  console.log("---");

  const newUsers = await getUsers(url, generatedKey);
  logUsers(newUsers);
  console.log("---");
})();
