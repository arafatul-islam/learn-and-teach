/*

URL Paths
The URL Path comes right after the domain (or port if one is provided) in a URL string.

In this URL:

`http://testdomain.com/root/next`
Copy icon
The path is:

/root/next
Copy icon
Path conventions
Many static websites (websites where the content does not change, as opposed to dynmaic web applications) use paths as a direct mapping to the path to the server's file system. For example, If I was running a static web server for "mystaticstate.com" from the root of my file system, a GET request to http://mystaticstate.com/documents/hello.txt would serve the file at /documents/hello.txt from my server.

Most dynamic web applications don't use this simple mapping of URL path -> file path. Technically, a URL path is just a string that the web server can do what it wants with, and modern websites take advantage of that flexibility. Some common examples of what paths are used for include:

The hierarchy of pages on a website, whether or not that reflects a server's file structure
Parameters passed into an HTTP request, like the ID of a resource
The version of the API
The type of resource being requested
Assignment
Fix the getResources function. This is a flexible function that, given a path, makes a GET request to the fantasy quest server and returns the response body. Update the fullURL string so that it's the base URL, in our case https://api.boot.dev, concatenated with the given path.

async function getResources(path) {
  const fullURL = `https://api.boot.dev`

  const response = await fetch(fullURL, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'X-API-Key': generateKey(),
      'Content-Type': 'application/json'
    }
  })
  const resources = await response.json()
  return resources
}

// don't touch below this line

const locations = await getResources('/v1/courses_rest_api/learn-http/locations')
console.log('Locations:')
logResources(locations)
console.log(' --- ')

const items = await getResources('/v1/courses_rest_api/learn-http/items')
console.log('Items:')
logResources(items)
console.log(' --- ')

const users = await getResources('/v1/courses_rest_api/learn-http/users')
console.log('Users:')
logResources(users)

function logResources(resources) {
  for (const resource of resources) {
    console.log(` - ${JSON.stringify(resource)}`)
  }
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

async function getResources(path) {
  const fullURL = `https://api.boot.dev${path}`;

  const response = await fetch(fullURL, {
    method: "GET",
    mode: "cors",
    headers: {
      "X-API-Key": generateKey(),
      "Content-Type": "application/json",
    },
  });
  const resources = await response.json();
  return resources;
}

// don't touch below this line

(async () => {
  const locations = await getResources(
    "/v1/courses_rest_api/learn-http/locations"
  );
  console.log("Locations:");
  logResources(locations);
  console.log(" --- ");

  const items = await getResources("/v1/courses_rest_api/learn-http/items");
  console.log("Items:");
  logResources(items);
  console.log(" --- ");

  const users = await getResources("/v1/courses_rest_api/learn-http/users");
  console.log("Users:");
  logResources(users);
})();

function logResources(resources) {
  for (const resource of resources) {
    console.log(` - ${JSON.stringify(resource)}`);
  }
}

function generateKey() {
  const characters = "ABCDEF0123456789";
  let result = "";
  for (let i = 0; i < 16; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
