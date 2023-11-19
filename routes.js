// For saving the message in the post request
const fs = require('fs');

// Function to handle requests
const requestHandler = (req, res) => {
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
}

// module.exports = requestHandler; // Export the function- method1
// module.export = {
//     //making object to export - method2
//     handler: requestHandler,
//     someText: 'Some hard Coded Text.'
// }

//method3
exports.handler = requestHandler;
exports.someText = 'Some Hard Coded Text';