import { Socket } from "socket.io-client";
export interface ISocketContext {
    socket: undefined | Socket;
    messageGroup: string[];
}

export interface IMessages {
    messageGroup : string[]
    index ?: number
}

