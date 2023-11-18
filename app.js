const http = require('http');

// Replace 'Your Name' with your actual name
const yourName = 'Somya';

const server = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Log your name to the console
  console.log(yourName);

  // Send your name as the response
  res.end(yourName);
});

// Listen on port 4000
const port = 4000;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
