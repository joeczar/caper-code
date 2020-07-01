const http = require('http');
const fs = require('fs');
const path = require('path');
const {linkList} = require('./linkList')

const fileTypesArr = [
    ['.html', 'text/html'],
    ['.css', 'text/css'],
    ['.js', 'text/javascript'],
    ['.json', 'application/json'],
    ['.gif', 'image/gif'],
    ['.jpg', 'image/jpeg'],
    ['.png', 'image/png'],
    ['.svg', 'image/svg+xml'],
    ['.ttf', 'application/x-font-ttf'],
];
const fileTypesMap = new Map(fileTypesArr)

const server = http.createServer((req, res) => {
    req.on('error', (err) => {
        console.log('error in response', err);
    });

    if (req.method === 'GET') {
        const myPath = path.normalize(__dirname + req.url);
        
        if (req.url === '/') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            
           
            
            res.end(linkList());
        }
        if (!myPath.startsWith(__dirname + '/projects')) {
            //on Windows use '\\projects' instead of '/projects'
            res.statusCode = 403;            
            return res.end(`<h1>Verboten!</h1>`);
        }

        fs.stat(myPath, (err, stat) => {
            if (err) {
                console.log(err);
                res.statusCode = 404;
                return res.end(fourOhFour);
            }
            if (stat.isFile()) {
                stream(myPath, res);
            } else {
                if (req.url.endsWith('/')) {
                    stream(myPath + 'index.html', res);
                } else {
                    res.statusCode = 302;
                    res.setHeader('Location', req.url + '/')
                    res.end();
                }
                
            }
        });
    } else {
        res.statusCode = 405;
        res.end(`
            <h1>405 Pech Gehabt!</h1>
        `);
    }
});

server.listen(8080, () => {
    console.log('Server is listening...');
});

function stream(path, res) {
    const stream = fs.createReadStream(path);
    const [ , fileType ] = path.split('.')
    if (typeof fileTypesMap.get(`.${fileType}`) == 'undefined') {
        res.statusCode = 404;
        res.end(`
            <h1>405 Pech Gehabt!</h1>
        `);
    }
    res.setHeader('Content-Type', fileTypesMap.get(`.${fileType}`));
    stream.on('open', () => {
        stream.pipe(res);
    })
    .on('error', (err) => {
        res.statusCode = 500;
        res.end(err);
    })
    .on('close', () => {
        res.end();
    })

}
