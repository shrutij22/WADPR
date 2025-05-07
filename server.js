
//5.	Create HTTP server using Node JS// Import the 'http' module
const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
    // Set response header
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    
    // Send a response
    res.end('Hello, this is a Node.js HTTP Server!');
});

// Server listens on port 3000
server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
