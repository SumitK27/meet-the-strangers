const express = require("express");
const http = require("http");
const PORT = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);

// Using Static contents from the public directory
app.use(express.static("public"));

// Home route
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

// Server
server.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});
