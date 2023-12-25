import http from "http";
import { Server } from "socket.io";

const httpServer = http.createServer();
const io = new Server(httpServer, {
    cors: { origin: "*" }
});

io.on("connection",(socket)=>{
    console.log("A user connected.");
    socket.on("message",(incomingMessage) => {
        console.log(incomingMessage);
        io.emit("message", incomingMessage);
    })
})

httpServer.listen(8080, () => {
	console.log('Listening on http://localhost:8080/');
})