/*

POST Requests
An HTTP POST request sends data to a server, typically to create a new resource.

Adding a body
The body of the request is the payload sent to the server. The special Content-Type header is used to tell the server the format of the body: application/json for JSON data in our case. POST requests are generally not safe methods to call multiple times because that would create duplicate records. For example, you wouldn't want to accidentally send a tweet twice.

await fetch(url, {
  method: 'POST',
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
Copy icon
Assignment
We need to save newly created characters on our Fantasy Quest server. We will use the getUsers function we created in the last exercise to make sure our creation logic is working.

Let's create the createUser() function. It should:

Take URL and the data body as parameters.
Call fetch. fetch() should:
Use the POST Method
Use the cors mode
Set the X-API-Key header, with apiKey as its value
Set the Content-Type header with application/json as its value
Set the body field to the stringified JSON representation of the data
Return the response's JSON body

*/

async function createUser(apiKey, url, data) {
  const response = await fetch(url, {
    method: "post",
    mode: "cors",
    headers: {
      "X-API-Key": apiKey,
      "CONTENT-TYPE": "application/json",
    },
    body: JSON.stringify(userToCreate),
  });

  return response.json();
}

// Test Suite Don't Touch Below This Line

const userToCreate = {
  characterName: "Grendel",
  class: "Warrior",
  level: 1,
  pvpEnabled: false,
  user: {
    name: "Allan",
    location: "USA",
    age: 27,
  },
};

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
  for (const user of users) {
    console.log(
      `Character name: ${user.characterName}, Class: ${user.class}, Level: ${user.level}, User: ${user.user.name}`
    );
  }
}

(async () => {
  console.log("Retrieving user data...");
  const userDataFirst = await getUsers(url, generatedKey);
  logUsers(userDataFirst);
  console.log("---");

  console.log("Creating new character...");
  const creationResponse = await createUser(generatedKey, url, userToCreate);
  console.log(`Creation response body: ${JSON.stringify(creationResponse)}`);
  console.log("---");

  console.log("Retrieving user data...");
  const userDataSecond = await getUsers(url, generatedKey);
  logUsers(userDataSecond);
  console.log("---");
})();
