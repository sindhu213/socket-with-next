"use client";
import { createContext, useEffect, useState, useContext } from "react";
import { ISocketContext } from "../lib/definitions";
import { io, Socket } from "socket.io-client";
import { initialParams } from "../lib/place-holder";

const SocketContext = createContext<ISocketContext>(initialParams);

export function useSocket(){
    const {socket, messageGroup} = useContext(SocketContext);
    if(!socket) throw new Error("Socket is undefined. ");
    return {socket, messageGroup};
}

export function SocketProvider(
    {children,}: {children: React.ReactNode;}) 
{
    let [socketInstance, setSocketInstance] = useState<Socket | undefined>();

    //only rendered when it mounts since dep array is empty
    useEffect(() => {
        const _socket = io("http://localhost:8000"); 
        console.log("socket instance: " ,_socket.id);
        setSocketInstance(_socket);
        return () => {
            _socket.disconnect();
            setSocketInstance(undefined);
        }
    },[]);

    return (
        <SocketContext.Provider value={{socket:socketInstance, messageGroup: []}}>
            {children}
        </SocketContext.Provider>
    );
}
