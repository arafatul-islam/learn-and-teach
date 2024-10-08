/*

Welcome to Web Servers
In a way, this course is where everything you've learned so far on the Boot.dev back-end track comes together. Building web servers is the bread-and-butter of a backend developer's day-to-day work.

This course assumes you already have a solid understanding of Go. If you don't, take a step back and take our Go course.

Goals of this course
Understand what web servers are and how they power real-world web applications
Build a production-style HTTP server in Go, without the use of a framework
Use JSON, headers, and status codes to communicate with clients via a RESTful API
Learn what makes Go a great language for building fast web servers
Use type safe SQL to store and retrieve data from a Postgres database
Implement a secure authentication/authorization system with well-tested cryptography libraries
Build and understand webhooks and API keys
Document the REST API with markdown
What is a server?
A web server is just a computer that serves data over a network, typically the Internet. Servers run software that listens for incoming requests from clients. When a request is received, the server responds with the requested data.

client server model

Any server worth its salt can handle many requests at the same time. In Go, we use a new goroutine for each request to handle them concurrently. Let's start by practicing with goroutines.

Assignment
In this course, we'll be working on a product called "Chirpy". Chirpy is a social network similar to Twitter.

One of Chirpy's servers is processing requests unbelievably slowly. Use a goroutine to fix the bug in the handleRequests (not handleRequest) function. The server should be able to process all the requests within the time limit. 

*/

const requestHandler = async (reqs) => {
  for (const req of reqs) {
    await handleRequest(req);
  }
};

const handleRequest = async (req) => {
  console.log(`Handling request for ${req.path}`);
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a 2-second delay
  console.log(`Done with request for ${req.path}`);
};

const main = () => {
  const reqs = [];
  for (let i = 0; i < 4; i++) {
    reqs.push({ path: `/path/${i}` });
    setTimeout(() => console.log(`Added request: /path/${i}`), 500 * i); // Simulate 500ms interval
  }

  setTimeout(() => {
    requestHandler(reqs).then(() => {
      console.log("5 seconds passed, killing server");
    });
  }, 500 * 4); // Start processing after all requests are added
};

main();
