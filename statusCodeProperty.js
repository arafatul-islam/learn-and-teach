/* 
Status Code Property
The Response has a .status property that contains the status code of the response.

Assignment
Update the getUserCode function to return the status code of the response.

You get a 404 response when requesting a user for an ID that doesn't exist!

Tip
The .ok property of a response indicates whether a response was successful (in the range of 200 - 299) or not. */

async function getUserCode(url, apiKey) {
  const response = await fetch(url, {
    method: "GET",
    mode: "cors",
    headers: {
      "X-API-Key": apiKey,
    },
  });
  return response.status;
}

// Don't touch below this line

const generatedKey = generateKey();

(async () => {
  const invalidId = "invalid-id";
  const codeFirst = await getUserCode(
    `https://api.boot.dev/v1/courses_rest_api/learn-http/users/${invalidId}`,
    generatedKey
  );
  console.log(`id: ${invalidId}, status code: ${codeFirst}`);

  const validId = "0194fdc2-fa2f-4cc0-81d3-ff12045b73c8";
  const codeSecond = await getUserCode(
    `https://api.boot.dev/v1/courses_rest_api/learn-http/users/${validId}`,
    generatedKey
  );
  console.log(`id: ${validId}, status code: ${codeSecond}`);
})();

function generateKey() {
  const characters = "ABCDEF0123456789";
  let result = "";
  for (let i = 0; i < 16; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
