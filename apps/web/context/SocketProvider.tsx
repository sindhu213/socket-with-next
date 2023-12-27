"use client";
import { createContext, useEffect, useState, useContext } from "react";
import { ISocketContext } from "../lib/definitions";
import { io, Socket } from "socket.io-client";
import { initialParams } from "../lib/place-holder";

const SocketContext = createContext<ISocketContext>(initialParams);

export function useSocket(){
    return useContext(SocketContext);
}

export function SocketProvider(
    {children,}: {children: React.ReactNode;}) 
{
    let [socketInstance, setSocketInstance] = useState<Socket | undefined>(undefined);

    useEffect(() => {
        const _socket = io("http://localhost:8000");
        setSocketInstance(_socket);
        console.log("SI:" ,_socket.id);
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
