"use client";
import { io, Socket } from "socket.io-client";
import { useContext, createContext, useEffect, useState } from "react";
import { ISocketContext } from "../lib/definitions";
import { initialParams } from "../lib/placeholder-data";

const SocketContext = createContext<ISocketContext>(initialParams);

export function useSocket() {
    return useContext(SocketContext);
}

export function SocketProvider({ children }: { children: React.ReactNode }) {
    let [socketInstance, setSocketInstance] = useState<Socket | undefined>(
        undefined
    );
    useEffect(() => {
        const newSocket = io("http://localhost:8000");
        setSocketInstance(newSocket);
        return () => {
            newSocket.disconnect();
            setSocketInstance(undefined);
        };
    }, []);

    return (
        <SocketContext.Provider
            value={{ socket: socketInstance, messageGroup: [] }}
        >
            {children}
        </SocketContext.Provider>
    );
}
