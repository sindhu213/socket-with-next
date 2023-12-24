import { Server, Socket } from "socket.io";
import { createServer } from "http";

const httpServer = createServer();
const io = new Server(httpServer,);

//fired upon a connection from the client
io.on("connection", (socket) => {});
io.listen(3000);
