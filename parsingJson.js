/*
Parsing JSON
Parse
The JSON.parse() method takes a JSON string as input and constructs the JavaScript value/object described by the string. This allows us to work with the JSON as an object!

const json = '{"title": "Avengers Endgame", "Rating":4.7, "inTheaters":false}';
const obj = JSON.parse(json)

console.log(obj.title)
// Avengers Endgame
Copy icon
Assignment
It's common for developers to write local tests using mock (or fake) data that looks like real data. Let's ensure that the JSON format that the backend Fantasy Quest developers provided to us is valid JSON! It would be a shame to write a bunch of code just to find out the backend has given us the wrong format.

Complete the parseLocation function. Use a try/catch block to safely call JSON.parse on the locationString provided. Keep in mind that JSON.parse throws an error if it is given a string that isn't valid JSON.

If you can parse the string successfully, use the printLocationObj function to print the parsed object. If an error was thrown, just log invalid json string to the console.

*/

function parseLocation(locationString) {
  try {
    const parsedData = JSON.parse(locationString);
    printLocationObj(parsedData);
  } catch (error) {
    console.log(`invalid json string`);
  }
}

// don't touch below this line

function printLocationObj(parsed) {
  console.log(`id: ${parsed.id}`);
  console.log(`discovered: ${parsed.discovered}`);
  console.log(`name: ${parsed.name}`);
  console.log(`recommendedLevel: ${parsed.recommendedLevel}`);
}

parseLocation(`
  {
    "discovered": false,
    "id": "0194fdc2-fa2f-4cc0-81d3-ff12045b73c8",
    "name": "Bandit Camp",
    "recommendedLevel": 14
  }
  `);

console.log("---");

parseLocation(`
  {
    "discovered":true,
    "id":"2f8282cb-e2f9-496f-b144-c0aa4ced56db",
    "name":"Irondeep",
    "recommendedLevel":6
  }
  `);

console.log("---");

parseLocation(`
  {
    "discovered":false,
    "id":"0f12951e-0a74-4846-a1e0-10b33b13112f"
    "name":"Tavern",
    "recommendedLevel":1
  }
  `);
