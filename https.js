/*

HTTPS
Hypertext Transfer Protocol Secure or HTTPS is an extension of the HTTP protocol. HTTPS secures the data transfer between client and server by encrypting all of the communication.

HTTPS allows a client to safely share sensitive information with the server through an HTTP request, such as credit card information, passwords, or bank account numbers.

Assignment
Frontend developers at Fantasy Quest were prone to making mixed content requests—insecure requests from a secure website—so management has mandated the use of a safeFetch function that only allows requests to a secure endpoint.

Somehow a developer has still managed to write the wrong url! Fix the bug.

const url = 'http://api.boot.dev/v1/courses_rest_api/learn-http/users'

async function getUserById(url, id) {
  const path = `${url}/${id}`
  const response = await safeFetch(path, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'X-API-Key': apiKey,
      'Content-Type': 'application/json'
    }
  })
  return response.json()
}

// don't touch below this line

const uuid = '2f8282cb-e2f9-496f-b144-c0aa4ced56db'
const apiKey = generateKey()

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

const user = await getUserById(url, uuid)
logUser(user)

function safeFetch(url, options) {
  const parsedUrl = new URL(url)

  if (parsedUrl.protocol !== 'https:') {
    throw new Error('Insecure request. Use HTTPS protocol.')
  }
  return fetch(url, options)
}

*/

const url = "https://api.boot.dev/v1/courses_rest_api/learn-http/users";

async function getUserById(url, id) {
  const path = `${url}/${id}`;
  const response = await safeFetch(path, {
    method: "GET",
    mode: "cors",
    headers: {
      "X-API-Key": apiKey,
      "Content-Type": "application/json",
    },
  });
  return response.json();
}

// don't touch below this line

const uuid = "2f8282cb-e2f9-496f-b144-c0aa4ced56db";
const apiKey = generateKey();

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
  const user = await getUserById(url, uuid);
  logUser(user);
})();

function safeFetch(url, options) {
  const parsedUrl = new URL(url);

  if (parsedUrl.protocol !== "https:") {
    throw new Error("Insecure request. Use HTTPS protocol.");
  }
  return fetch(url, options);
}
