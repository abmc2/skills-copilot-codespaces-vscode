// create a web server
const http = require('http');

const server = http.createServer((req, res) => {
    // handle requests and send responses
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
