import SocketInstance from "./lib/socket_instance";

const PORT = process.env.PORT ? process.env.PORT : 3000;
const socket = new SocketInstance();
const [, httpServer] = socket.getParams();

socket.connectionManager();
httpServer.listen(PORT, () => {
    console.log(`Listening to port: http://localhost:${PORT}`);
})