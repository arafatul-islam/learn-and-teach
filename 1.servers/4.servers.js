/*

Server
We're building a fully-fledged web server from scratch on your local machine. The test suite will make HTTP requests to your local server over localhost. Your server will run in one terminal, while you submit tests with the Boot.dev CLI in another terminal.

Setup
Tools you'll need
A code editor. I use VS code, but you can use whatever you're comfortable with.
A command line. I work on Mac OS/Linux, so my instructions will be in Bash. I recommend WSL 2 if you're on Windows so you can still use Linux commands.
The Go toolchain with version 1.22+.
The Boot.dev CLI to run the tests. Go ahead and install it following the instructions in the README, then run bootdev login to authenticate.
The lessons in this course require at least version 1.22 of Go. If you're using an older version, you'll run into some frustrating issues!

Set up your project
Create a new GitHub/GitLab repository for your Chirpy project, and clone it down onto your local machine. Use go mod init to create a new Go module for the project, and add a main.go file. That's where you'll be writing your code for each assignment.

Do not delete your work after each assignment! Each lesson will build upon the previous ones so we'll be reusing a lot of code.

Assignment
The Go standard library makes it easy to build a simple server. Your task is to build and run a server that binds to localhost:8080 and always responds with a 404 Not Found response.

Steps
Create a new http.ServeMux
Create a new http.Server struct.
Use the new "ServeMux" as the server's handler
Set the .Addr field to ":8080"
Use the server's ListenAndServe method to start the server
Build and run your server (e.g. go build -o out && ./out)
Open http://localhost:8080 in your browser. You should see a 404 error because we haven't connected any handler logic yet. Don't worry, that's what is expected for the tests to pass for now.
While your server is still running, run and submit the HTTP tests using the Boot.dev CLI tool in another terminal window.

Tips
Use go mod init to create a Go module for your project
Each time you change your code you'll need to rebuild and restart your server
Use Git to save your work as you go

*/
