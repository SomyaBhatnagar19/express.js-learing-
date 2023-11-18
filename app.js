//generally keep the name app.js can also keep server.js

//importing core modules/ files
const http = require('http'); //'./' looks for a local file if omitting this it looks for global files

//the functions in http files accessed as below
const server = http.createServer((req, res) => { //called by nodeJs whenever there is a request
    console.log(req.url, req.method, req.headers);
    res.setHeader('Content-Type', 'text/html');  //using this function we assign the header type
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write("<body>Hello this is my HTML code.</body>");
    res.write('<html>'); //it actually assigns the values that the programmer puts
    res.end();
});  //it looks for the given function to response to the responses per request

server.listen(4000) //created server has been store in const called server this listener doesnt act immideately bt listens to the incomming requests
