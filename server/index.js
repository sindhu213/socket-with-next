import { Server } from "socket.io";
import { createServer } from "http";
import express from 'express';
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";


const app = express();
const httpServer = createServer(app); 
const io = new Server(httpServer,{});
const __dirname = dirname(fileURLToPath(import.meta.url));
const clientPath = path.resolve(__dirname, "../client")


app.use(express.static(clientPath));
app.get('/',(request, response)=>{
    response.sendFile(clientPath + "/index.html");
})


io.on("connection", (socket) => {
    console.log("A user connected. ", socket.id);
})


httpServer.listen(3000, () => {
    console.log("Server started at http://localhost:3000");
})