import { Socket } from "socket.io-client";
export interface ISocketContext {
    socket: undefined | Socket
}

export interface IMessages {
    messages : string[]
    index ?: number | string
}

