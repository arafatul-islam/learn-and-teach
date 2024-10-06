/*
Sending JSON
JSON isn't just something we get from the server, we can also send JSON data!

In JavaScript, two of the main methods we have access to are JSON.parse(), and JSON.stringify().

JSON.stringify()
JSON.stringify() is particularly useful for sending JSON.

As you may expect the JSON stringify() method does the opposite of parse. It takes a JavaScript object or value as input and converts it into a string. This is useful when we need to serialize the objects into strings to send them to our server or store them in a database.

Assignment
We need to keep track of when players discover new locations. However, there's a bug in the updateLocationById() function. It looks like the location's discovered property isn't getting saved properly by the server.

Fix the code. The body property on the object we're passing into the fetch function should be a JSON string, not a JavaScript object.
*/

async function updateLocationById(id, locationObj) {
  const path = `https://api.boot.dev/v1/courses_rest_api/learn-http/locations/${id}`;
  const response = await fetch(path, {
    method: "PUT",
    mode: "cors",
    headers: getHeaders(),
    body: JSON.stringify(locationObj),
  });
  return response.json();
}

// Don't touch below this line

const apiKey = generateKey();
const locationID = "0194fdc2-fa2f-4cc0-81d3-ff12045b73c8";

(async () => {
  const location = await getLocationById(locationID);
  console.log(
    `Location '${location.name}' fetched. Data: ${JSON.stringify(location)}`
  );

  location.discovered = true;
  await updateLocationById(locationID, location);
  console.log(`Location '${location.name}' was discovered!`);

  const updatedLocation = await getLocationById(locationID);
  console.log(
    `Location '${updatedLocation.name}' fetched. Data: ${JSON.stringify(
      updatedLocation
    )}`
  );
})();

function generateKey() {
  const characters = "ABCDEF0123456789";
  let result = "";
  for (let i = 0; i < 16; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

async function getLocationById(id) {
  const path = `https://api.boot.dev/v1/courses_rest_api/learn-http/locations/${id}`;
  const response = await fetch(path, {
    method: "GET",
    mode: "cors",
    headers: {
      "X-API-Key": apiKey,
      "Content-Type": "application/json",
    },
  });
  return response.json();
}

function getHeaders() {
  return {
    "X-API-Key": apiKey,
    "Content-Type": "application/json",
  };
}
