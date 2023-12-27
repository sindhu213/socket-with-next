import { Socket } from "socket.io-client";

export interface ISocketContext {
    socket: Socket | undefined,
    messageGroup : string[]
}