const http = require("http")

const host = "127.0.0.1"
const port = 3000

const requestListener = function (req, res) {
    if (req.url === '/test') {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/event-stream");
        res.setHeader("connection", "keep-alive");
        res.setHeader("Access-Control-Allow-Origin", "*");

        setInterval(() => {
            res.write(`data: ${JSON.stringify({number: Math.random(), message: "This text coming from server"})}\n\n`);
        }, 1000);
    } else {
        res.statusCode = 404;
        res.end("resource does not exist");
    }
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`server running ${port}`);
});