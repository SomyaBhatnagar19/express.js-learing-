const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
     
    const url = req.url;
    const method = req.method;
    
    if (url === '/') {
        res.write('<html>');
        res.write("<head><title>Enter Message</title></head>");
        res.write("<body><form action='/message' method='POST'><label>Enter your message:- </label><input type='text' name='message'><button>Send</button></form></body>")
        res.write("</html>");
        return res.end();
    }

    //for saving the message in the post request
    if(url === '/message' && method === 'POST') {
        fs.writeFileSync('message.txt', 'DUMMY');
        res.statusCode = 302; //if there is any error then the user gets redirected to this 302 error page
        res.setHeader('Location', '/'); //automatically redirects to the host being used
        return res.end();
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title><head>');
    res.write('<body><h1>Hello from my node.js server!</h1></body>')
    res.write('</html>');
    res.end();
});

server.listen(4000);
