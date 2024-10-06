/*
JSON Syntax
JSON (JavaScript Object Notation), is a standard for representing structured data based on JavaScript's object syntax. It is commonly used to transmit data in web apps via HTTP. For example, The HTTP fetch() requests we have been using in this course have been returning Fantasy Quest locations, users, and items as JSON.

JSON supports the following primitive data types:

Strings, e.g. "Hello, World!"
Numbers, e.g. 42 or 3.14
Booleans, e.g. true
Null, e.g. null
And the following collection types:

Arrays, e.g. [1, 2, 3]
Object literals, e.g. {"key": "value"}
Because we already understand what JavaScript objects look like, understanding JSON is easy! JSON is just a stringified JavaScript object. The following is valid JSON data:

{
    "movies": [
        {
            "id": 1,
            "genre": "Action",
            "title": "Iron Man",
            "director": "Jon Favreau"
        },
        {
            "id": 2,
            "genre": "Action",
            "title": "The Avengers",
            "director": "Joss Whedon"
        }
    ]
}
Copy icon
Parsing HTTP Responses as JSON
JavaScript provides us with some easy tools to help us work with JSON. After making an HTTP request with the fetch() API, we get a Response object. That response object offers us some methods that help us interact with the response. One such method is the .json() method. The .json() method takes the response stream returned by a fetch request and returns a promise that resolves into a JavaScript object parsed from the JSON body of the HTTP response!

const resp = await fetch(...)
const javascriptObjectResponse = await resp.json()
Copy icon
Assignment
Our getLocations function is almost done, we just need to parse the response data as JSON and return it.

Note
It's important to note that the result of this method is NOT JSON. It is the result of taking JSON data from the HTTP response body and parsing that input into a JavaScript Object.

async function getLocations() {
  const url = 'https://api.boot.dev/v1/courses_rest_api/learn-http/locations'
  const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'X-API-Key': apiKey,
      'Content-Type': 'application/json'
    }
  })
  // ?
}

// Don't touch below this line

const apiKey = generateKey()

const locations = await getLocations()
console.log('Got some locations from the server.')
for (const location of locations) {
  console.log(`- name: ${location.name}, recommendedLevel: ${location.recommendedLevel}`)
}

function generateKey() {
  const characters = 'ABCDEF0123456789'
  let result = ''
  for (let i = 0; i < 16; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}

*/

async function getLocations() {
  const url = "https://api.boot.dev/v1/courses_rest_api/learn-http/locations";
  const response = await fetch(url, {
    method: "GET",
    mode: "cors",
    headers: {
      "X-API-Key": apiKey,
      "Content-Type": "application/json",
    },
  });
  return response.json();
}

// Don't touch below this line

const apiKey = generateKey();

(async () => {
  const locations = await getLocations();
  console.log("Got some locations from the server.");
  for (const location of locations) {
    console.log(
      `- name: ${location.name}, recommendedLevel: ${location.recommendedLevel}`
    );
  }
})();

function generateKey() {
  const characters = "ABCDEF0123456789";
  let result = "";
  for (let i = 0; i < 16; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
