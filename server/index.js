import {createServer} from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer,{});

io.on("connection",(socket) => {
    console.log("User connected.");
    socket.on("message",(incomingMessage)=>{
        console.log(incomingMessage);
    })
})

httpServer.listen(8080, () => {
    console.log("Listening on http://localhost:8080");
})