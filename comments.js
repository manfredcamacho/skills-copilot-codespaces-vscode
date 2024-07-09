// Create web server
// Create a web server that listens to requests on port 3000. When a request is made to localhost:3000, the server should respond with a JSON object, containing the following data:
// {
//   "status": "success",
//   "message": "You have successfully reached the server"
// }
// The server should respond with a 404 status code for all other routes.
// Note: You should use the http module to create the server.

const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify({ status: 'success', message: 'You have successfully reached the server' }));
    res.end();
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify({ status: 'error', message: 'The server cannot find the requested page' }));
    res.end();
  }
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});