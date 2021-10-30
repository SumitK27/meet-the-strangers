// Detects the hostname with port number automatically by "/"
const socket = io("/");

// Adding SocketIO connection to the client
socket.on("connect", () => {
    console.log("Successfully connected to SocketIO Server.");
    console.log(socket.id);
});
