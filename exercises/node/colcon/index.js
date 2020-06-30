const chalk = require("chalk");
const http = require("http");
const qs = require("querystring");

// console.log(chalk.cyan("this text is red"));
// console.log(chalk.magenta("this text is green"));

const server = http.createServer((req, res) => {
    req.on("error", (err) => console.log("err in request", err));
    res.on("error", (err) => console.log("err in response", err));

    if (req.method === "GET") {
        res.write(`
        <!doctype html>
        <html>
        <title>Colors</title>
        <form method="POST">
        <input type="text" name="text">
        <select name="color">
            <option value="red">red</option>
            <option value="blue">blue</option>
            <option value="green">green</option>
            <option value="yellow">yellow</option>
            <option value="gray">gray</option>
            <option value="magenta">magenta</option>
            <option value="cyan">cyan</option>
        </select>
        <button type="submit">Go</button>
        </form>
        </html>
        `);
        res.end();
    }
    if (req.method === "POST") {
        let body = "";

        req.on("data", (chunk) => (body += chunk));
        req.on("end", () => {
            let parseBody = qs.parse(body);
            console.log(
                chalk[parseBody.color](`${parseBody.text} clicked submit`)
            );
            res.setHeader("content-type", "text/html");
            res.statusCode = 200;
            res.write(`
                <a href="/" style="color:${parseBody.color};text-decoration: none;">
                    <h1 style="color:${parseBody.color};">Hey ${parseBody.text}</h1>
                </a>
            `);
            res.end();
        });
    }
});

server.listen(8080, () => {
    console.log("Server listening...");
});
