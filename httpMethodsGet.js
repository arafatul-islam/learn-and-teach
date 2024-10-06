/*

HTTP Methods - GET
HTTP defines a set of methods. We must choose one to use each time we make an HTTP request. The most common ones include:

GET
POST
PUT
DELETE
The GET method is used to "get" a representation of a specified resource. It doesn't take (remove) the data from the server but rather gets a representation, or copy, of the resource in its current state. A GET request is considered a safe method to call multiple times because it shouldn't alter the state of the server.

Making a GET request using the Fetch API
In this course, we have been and will continue to use the Fetch API to make HTTP requests. The fetch() method accepts an optional init object parameter as its second argument that we can use to define things like:

method: The HTTP method of the request, like GET.
headers: The headers to send.
mode: Used for security, we'll talk about this in future courses.
body: The body of the request. Often encoded as JSON.
Example GET request using fetch:

await fetch(url, {
  method: 'GET',
  mode: 'cors',
  headers: {
    'sec-ch-ua-platform': 'macOS'
  }
})
Copy icon
Assignment
We need to write a reusable function that retrieves all of the Fantasy Quest users from our server.

Complete the getUsers() function. It should:

Call fetch using the url parameter. The fetch call should:
Use the 'GET' Method
Use the 'cors' mode
Add an X-API-Key header with apiKey as the value
Return the resulting JSON data from the response
We've done this all before, but now you're writing it all from scratch!

*/

async function getUsers(url, apiKey) {
  const response = await fetch(url, {
    method: "get",
    mode: "cors",
    headers: {
      "X-API-Key": apiKey,
    },
  });

  return response.json();
}

// Don't touch below this line

const generatedKey = generateKey();
const url = "https://api.boot.dev/v1/courses_rest_api/learn-http/users";

(async () => {
  const users = await getUsers(url, generatedKey);
  logUsers(users);
})();

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
