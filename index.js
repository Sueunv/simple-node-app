const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end('Hello from Suhana\'s Node App CI/CD 🚀');
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

