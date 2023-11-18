const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    res.setHeader('Content-Type', 'text/html');

    if (req.url === '/home') {
        res.write("<html><head><title>Home Page</title></head><body>Welcome home</body></html>");
    } else if (req.url === '/about') {
        res.write("<html><head><title>About Us Page</title></head><body>Welcome to About Us page</body></html>");
    } else if (req.url === '/node') {
        res.write("<html><head><title>Node.js Project</title></head><body>Welcome to my Node Js project</body></html>");
    } else {
        res.write("<html><head><title>Not Found</title></head><body>404 - Not Found</body></html>");
    }

    res.end();
});

server.listen(4000);
