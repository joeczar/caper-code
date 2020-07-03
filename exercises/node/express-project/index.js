const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

const port = 8080;

app.use(cookieParser());

app.use(
    express.urlencoded({
        extended: false,
    })
);

app.use((req, res, next) => {
    console.log(`Hit ${req.method} on ${req.url} `);
    next();
});

app.get('/cookie', (req, res) => {
    console.log(req.cookies);

    res.send(`
    <!doctype html><title>Cookies</title><h1>Cookies are required to view this site.</h1>
    <h2>Please check the box if you agree</h2>
    <form method='POST'>
    <input type='checkbox' name="cookie"><button>Submit>
    </form>
    `);
});

app.post('/cookie', (req, res) => {
    res.cookie('approved', req.body.cookie);
    console.log('cookies post', req.cookies);
    res.redirect(req.cookies.url);
});

// check for approved cookie, set url cookie if no approved redirect to cookie
app.use((req, res, next) => {
    const cookie = req.cookies.approved === 'on';
    if (!cookie && req.url !== '/favicon.ico') {
        res.cookie('url', req.url);
        res.redirect('/cookie');
    } else {
        next();
    }
})

app.get('/', (req, res) => {
    console.log(req.cookies);
    res.send(`
    <!doctype html><title>Hello Express!</title><h1>Hello Express!</h1>
    `);
});
app.use(express.static(__dirname + '/static'));

app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
    
})