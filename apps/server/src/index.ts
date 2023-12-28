import { Server } from "socket.io";
import { createServer } from "http";
import express from "express";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: { origin: "*", allowedHeaders: ["*"] }
});

io.on("connection", (socket) => {
    console.log("User connected with id:", socket.id);
    socket.on("disconnect", () => {
        console.log("User disconnected with id: ", socket.id);
    });
    socket.on("message", (incomingMessage) => {
        console.log(`${socket.id}: ${incomingMessage}`);
        socket.emit("message", incomingMessage);
    })
});

const PORT = process.env.PORT || 8000;

httpServer.listen(PORT, () =>
    console.log(`listening on port: http://localhost:${PORT}`)
);

