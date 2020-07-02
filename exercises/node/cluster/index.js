const http = require("http");

const server = http.createServer((req, res) => {
    req.on("error", (err) => {
        console.log("error in req", err);
    });
    res.on("error", (err) => {
        console.log("error in res", err);
    });
    if (req.method === "GET") {
        res.setHeader("Content-Type", "text/html");
        res.statusCode = 200;
        res.end(`
            <title>Machu-Pichu</title>
            <h1>${req.url}</h1>
        `);
    } else {
        res.statusCode = 405;
        res.end(`
            <h1>405 Forbidden!</h1>
        `);
    }
    setTimeout(() => {
        throw new Error("Crash!!!");
    }, 4000);
});
server.listen(8080, () => {
    console.log("Server is listening...");
});
