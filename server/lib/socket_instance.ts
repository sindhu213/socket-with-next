import { Server as HTTPServer, createServer } from "http";
import { Server as IOServer, Socket} from "socket.io";

class SocketInstance {
  private io : IOServer;
  private httpServer : HTTPServer;

  constructor() {
    this.httpServer = createServer();
    this.io = new IOServer(this.httpServer, {});
  }

  public connectionManager(){
    const io = this.io;
    io.on("connection", (socket:Socket) => {
        console.log("A user connected. ");
        socket.on("disconnection", () => {
            console.log("A user disconnected. ");
        })
    })
  }

  public getParams() {
    return [this.io, this.httpServer];
  }
}

export default SocketInstance;