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

// Store Connected Users
let connectedPeers = [];

// Adding SocketIO connection to the server
io.on("connection", (socket) => {
    // Get the connected user's ID
    console.log("User Connected to SocketIO server");
    console.log(socket.id);

    // Add the connected user to the connected users list
    connectedPeers.push(socket.id);
    console.log(connectedPeers);

    // If client disconnects
    socket.on("disconnect", () => {
        console.log("User Disconnected");

        // Remove the disconnected user from the connected users list
        const newConnectedPeers = connectedPeers.filter((peerSocketId) => {
            peerSocketId !== socket.id;
        });
        connectedPeers = newConnectedPeers;
        console.log(connectedPeers);
    });
});

// Server
server.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});
