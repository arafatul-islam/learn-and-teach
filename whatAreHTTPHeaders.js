/*

What are HTTP Headers?
An HTTP header allows clients and servers to pass additional information with each request or response. Headers are just case-insensitive key-value pairs that pass additional metadata about the request or response.

HTTP requests from a web browser automatically carry with them many headers, including but not limited to:

The type of client (e.g. Google Chrome)
The Operating system (e.g. Windows)
The preferred language (e.g. US English)
As developers, we can also define custom headers in each request.

Headers API
The Headers API allows us to perform various actions on our request and response headers such as retrieving, setting, and removing them. We can access the headers object through the Request.headers and Response.headers properties.

Assignment
Complete the logContentType() function. It takes a response object as input and should log out the Content-Type header to the console.

Take a look at the lower section of the code to see exactly how it's being created.

Use the .get() method on the response object's headers property to get access to the header you need.

*/

function logContentType(resp) {
  console.log(resp.headers.get("Content-Type"));
}

// don't touch below this line

const apiKey = generateKey();
const bootdevAPIDomain = "api.boot.dev";

(async () => {
  const items = await getItemData(bootdevAPIDomain);
  logContentType(items);
})();

async function getItemData(domain) {
  const response = await fetch(
    `https://${domain}/v1/courses_rest_api/learn-http/items/0194fdc2-fa2f-4cc0-81d3-ff12045b73c8`,
    {
      method: "GET",
      mode: "cors",
      headers: {
        "X-API-Key": apiKey,
        "Content-Type": "application/json",
      },
    }
  );
  return response;
}

function generateKey() {
  const characters = "ABCDEF0123456789";
  let result = "";
  for (let i = 0; i < 16; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
