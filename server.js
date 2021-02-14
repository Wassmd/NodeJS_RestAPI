const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    // res.write('Hello World from NodeJS');
    // res.end();

    const readStrem = fs.createReadStream('./index.html');
    res.writeHead(200, {'Content-type':'text/html'}); 
    readStrem.pipe(res);
})

server.listen('3000')