const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    req.on('error', (err) => {
        console.log('error in response:', err);
    });

    appendToFile(req);

    if (req.method === 'GET') {
        // redirecting a user
        logHttp(req);
        if (req.url === '/requests.txt') {
            res.setHeader('content-type', 'text/html');
            const filename = __dirname + req.url;
            console.log(filename);
            const readStream = fs.createReadStream(filename);
            // console.log(readStream);

            readStream.on('data', () => {
                readStream.pipe(res);
            })
            .on('error', (err) => {
                console.log('read Stream Error', err);
                res.end(err);
            })
            .on('close', () => {
                res.end();
            })
        } else if (req.url === '/secret-page') {
            // write code to redirect them
            res.statusCode = 302;
            res.setHeader('Location', '/hell');
            res.end('<h1>Welcome to hell!</h1>');
        } else {
            res.setHeader('content-type', 'text/html');
            res.statusCode = 200;
            // res.write("<h1>Happy HTTP Day!</h1>");
            res.write('<!doctype html>');
            res.write('<html>');
            res.write('<title>Hello World!</title>');
            res.write('<p>Hello World!</p>');
            res.end('</html>');
        }
    } else if (req.method === 'PUT') {
        logHttp(req);

        res.statusCode = 405;
        res.end('<h1>You made a put request!</h1>');
    } else if (req.method === 'POST') {
        // handle post
        res.statusCode = 302;
        logHttp(req);
        res.setHeader('content-type', 'text/html');

        res.setHeader('Location', '/');

        let body = '';

        req.on('data', (chunk) => {
            body += chunk;
        });

        req.on('end', () => {
            console.log('body: ', body);

            res.end(body);
        });
    } else if (req.method === 'HEAD') {
        // Handle head
        logHttp(req);
        res.setHeader('content-type', 'text/html');
        res.statusCode = 200;
        res.end();
    } else {
        logHttp(req);
        res.statusCode = 405;
        res.end();
    }
});

function logHttp(req) {
    console.log(`req.url:`, req.url);
    console.log(`req.method:`, req.method);
    console.log(`req.headers:`, req.headers);
}

server.listen(8080, () => {
    console.log('Server is listening...');
});

function appendToFile(req) {
    const date = new Date().toLocaleString();
    const request = req.method;
    const url = req.url;
    const usrAgent = req.headers['user-agent'];

    const logString = `${date} - ${request} - ${url} - ${usrAgent} \n`;

    fs.appendFile('requests.txt', logString, (err) => {
        if (err) {
            console.log('Error appending file', err);
        }
        console.log('Request logged');
    });
}
