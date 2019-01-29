const http = require('http');
const fs = require('fs');
const path = require('path');
var ext = /[\w\d_-]+\.[\w\d]+$/;
const hostname = '142.93.82.54';

const port = 8083;

const server = http.createServer((req, res) => {
	
	if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream('index.html').pipe(res);
    } else if (ext.test(req.url)) {
        fs.exists(path.join(__dirname, req.url), function (exists) {
            if (exists) {
                res.writeHead(200, {'Content-Type': 'text/html'});
                fs.createReadStream('index.html').pipe(res);
            } else {
                res.writeHead(404, {'Content-Type': 'text/html'});
                fs.createReadStream('404.html').pipe(res);
        }});
    } else {
        //  add a RESTful service
    }})

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
