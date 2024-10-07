/*
The HTTP PUT method creates or more commonly, updates a representation of the target resource with the contents of the request's body. In short, it updates a resource's properties.

await fetch(url, {
   method: 'PUT',
   mode: 'cors',
   headers: {
   'Content-Type': 'application/json'
   },
   body: JSON.stringify(data)
})
Copy icon
POST vs PUT
Assignment
Complete the updateUser() and getUserById() functions. They should update and retrieve individual user resources respectively. For each fetch request:

Set the method to match the CRUD action being performed
Add Content-Type and X-API-Key headers
Set the mode to cors
Return a promise that gives the JSON from the response using the .json() method of the Response object
The updateUser function will also have to encode the user data in the body of the request using JSON.stringify.

We've included the fullURL creation logic for you in both functions, we'll be talking more about URL building in the next chapter.

async function updateUser(baseURL, id, data, apiKey) {
  const fullURL = `${baseURL}/${id}`
  // ?
}

async function getUserById(baseURL, id, apiKey) {
  const fullURL = `${baseURL}/${id}`
  // ?
}

// don't touch below this line

const userId = '2f8282cb-e2f9-496f-b144-c0aa4ced56db'
const generatedKey = generateKey()
const baseURL = 'https://api.boot.dev/v1/courses_rest_api/learn-http/users'

function generateKey() {
  const characters = 'ABCDEF0123456789'
  let result = ''
  for (let i = 0; i < 16; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}

function logUser(user) {
  console.log(`User uuid: ${user.id}, Character Name: ${user.characterName}, Class: ${user.class}, Level: ${user.level}, PVP Status: ${user.pvpEnabled}, User name: ${user.user.name}`)
}

const userData = await getUserById(baseURL, userId, generatedKey)
logUser(userData)

console.log(`Updating user with id: ${userId}`)
userData.characterName = 'Dellbiar'
userData.level = 7
userData.class = 'Warrior'
userData.pvpEnabled = true
userData.user.name = 'Allan'
const updatedUser = await updateUser(baseURL, userId, userData, generatedKey)
logUser(updatedUser)

*/

async function updateUser(baseURL, id, data, apiKey) {
  const fullURL = `${baseURL}/${id}`;
  const response = await fetch(fullURL, {
    method: "put",
    mode: "cors",
    headers: {
      "X-API-Key": apiKey,
      "CONTENT-TYPE": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
}

async function getUserById(baseURL, id, apiKey) {
  const fullURL = `${baseURL}/${id}`;
  const response = await fetch(fullURL, {
    method: "get",
    mode: "cors",
    headers: {
      "X-API-Key": apiKey,
    },
  });

  return response.json();
}

// don't touch below this line

const userId = "2f8282cb-e2f9-496f-b144-c0aa4ced56db";
const generatedKey = generateKey();
const baseURL = "https://api.boot.dev/v1/courses_rest_api/learn-http/users";

function generateKey() {
  const characters = "ABCDEF0123456789";
  let result = "";
  for (let i = 0; i < 16; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

function logUser(user) {
  console.log(
    `User uuid: ${user.id}, Character Name: ${user.characterName}, Class: ${user.class}, Level: ${user.level}, PVP Status: ${user.pvpEnabled}, User name: ${user.user.name}`
  );
}

(async () => {
  const userData = await getUserById(baseURL, userId, generatedKey);
  logUser(userData);

  console.log(`Updating user with id: ${userId}`);
  userData.characterName = "Dellbiar";
  userData.level = 7;
  userData.class = "Warrior";
  userData.pvpEnabled = true;
  userData.user.name = "Allan";
  const updatedUser = await updateUser(baseURL, userId, userData, generatedKey);
  logUser(updatedUser);
})();
