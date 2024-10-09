/*

Fileservers
A fileserver is a kind of simple web server that serves static files from the host machine. Fileservers are often used to serve static assets for a website, things like:

HTML
CSS
JavaScript
Images
Assignment
The Go standard library makes it super easy to build a simple fileserver. Build and run a fileserver that serves a file called index.html from its root at http://localhost:8080. That file should contain this HTML:

<html>

<body>
    <h1>Welcome to Chirpy</h1>
</body>

</html>
Copy icon
Steps
Add the HTML code above to a file called index.html in the same root directory as your server
Use the http.NewServeMux's .Handle() method to add a handler for the root path (/).
Use a standard http.FileServer as the handler
Use http.Dir to convert a filepath (in our case a dot: . which indicates the current directory) to a directory for the http.FileServer.
Re-build and run your server
Test your server by visiting http://localhost:8080 in your browser
Run the tests using the CLI

*/

