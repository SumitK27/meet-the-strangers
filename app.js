const express = require("express");
const http = require("http");
const PORT = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);
const io = require("socket.io")(server);

// Using Static contents from the public directory
app.use(express.static("public"));

// Home route
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

// Adding SocketIO connection to the server
io.on("connection", (socket) => {
    console.log("User connected to SocketIO server.");
    console.log(socket.id);
});

// Server
server.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});
