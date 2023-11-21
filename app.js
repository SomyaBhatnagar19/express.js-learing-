const http = require('http');

const express = require('express');

const app = express();

//middleware functions
app.use((req, res, next) => {
    console.log('In the middleware!');
    next(); //the request wont be able to continue its journey to the next middleware if we dont call next
    //allows the request to continue to next middleware in line
}); //use helps assign middleware functions, the function passed in use is working for ever request
//next is a fucntion passed as argument abovewhich gets passed to other middleware function

//middleware2
app.use((req, res, next) => {
    console.log('In 2nd middleware!');
    res.send(<h1>Hello from Express.js!</h1>);
    // instead of using res.write we use send, this method automatically sets the content as text/html
});
const server = http.createServer(app);

server.listen(4000);
