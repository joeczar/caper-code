const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(cookieParser());

app.use((req, res, next) => {
    console.log(`Hit ${req.method} on ${req.url} `);

    next();
});

app.use(
    express.urlencoded({
        extended: false,
    })
);

app.get("/cookie", (req, res) => {
    console.log(req.cookies);

    res.send(`
    <!doctype html><title>Cookies</title><h1>Cookies are required to view this site.</h1>
    <h2>Please check the box if you agree</h2>
    <form method='POST'>
    <input type='checkbox' name="cookie"><button>Submit>
    </form>
    `);
});

app.post("/cookie", (req, res) => {
    res.cookie("approved", req.body.cookie);
    res.redirect(req.cookies.url);
});

app.get("/", (req, res) => {
    console.log(req.cookies);
    res.send(`
    <!doctype html><title>Hello Express!</title><h1>Hello Express!</h1>
    
    `);
});

app.use(express.static(__dirname + "/static"));

app.get("/about", (req, res) => {
    res.cookie("hasAccess", true);
    res.sendFile(__dirname + "/about.html");
});

app.get("/about/:name", (req, res) => {
    res.send(`<h3> Hi ${req.params.name} you are some where ${req.url}</h3>`);
    console.log(req.params);
});

app.get("/hello-world", (req, res) => {
    res.send(`
        <!doctype html><title>Hello Express!</title><h1>Hello World!</h1>
    `);
});

app.get("/add-cute-animals", (req, res) => {
    res.send(`
        <form method='POST'>
            <input type='text' name='animal' placeholder='animal' autocomplete='off'>
            <input type='text' name='score' placeholder='score'>
            <button>submit</button>
        </form>
    `);
});

app.get("/secrets", (req, res) => {
    console.log(req.cookies);

    if (req.cookies.hasAccess) {
        res.send(`
            <h1>Welcome to the Secret Society</h1>
        `);
    } else {
        res.redirect("/");
    }
});

app.post("/add-cute-animals", (req, res) => {
    console.log("post request", req.body);
    res.send(
        `<h1>You rated a ${req.body.animal} with ${req.body.score} points`
    );
});

app.listen(8080, () => {
    console.log("Express is up and running...");
});
