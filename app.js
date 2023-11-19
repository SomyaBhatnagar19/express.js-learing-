const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
     
    const url = req.url;
    const method = req.method;
    
    if (url === '/') {
        // Read existing messages from the file
        const existingMessages = fs.readFileSync('message.txt', 'utf8').split('\n').filter(Boolean);

        res.write('<html>');
        res.write("<head><title>Enter Message</title></head>");
        res.write("<body>");
        
        // Display existing messages at the top of the form
        if (existingMessages.length > 0) {
            res.write("<h2>Existing Messages:</h2>");
            res.write("<ul>");
            existingMessages.forEach(message => {
                res.write(`<li>${message}</li>`);
            });
            res.write("</ul>");
        }

        res.write("<form action='/message' method='POST'><label>Enter your message:- </label><input type='text' name='message'><button>Send</button></form>");
        res.write("</body>");
        res.write("</html>");
        return res.end();
    }

    // For saving the message in the post request
    if(url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            
            // Append the new message to the file
            fs.appendFileSync('message.txt', message + '\n');
        });
        
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my node.js server!</h1></body>')
    res.write('</html>');
    res.end();
});

server.listen(4000);
