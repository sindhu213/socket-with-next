"use client";

import { io, Socket} from "socket.io-client";
import { useContext, createContext, useEffect, useState } from "react";
import { ISocketContext } from "../lib/definitions";

const SocketContext = createContext<ISocketContext>({socket:undefined, });

export function useSocket(){
    return useContext(SocketContext);
}

export function SocketProvider(
    { children }: { children: React.ReactNode }
) {
    let [socket, setSocket] = useState<Socket | undefined>(undefined);
    useEffect(() => {
        const newSocket = io("http://localhost:8000");
        setSocket(newSocket);
        return () => {
            newSocket.disconnect();
        };
    }, []);

    return (
        <SocketContext.Provider value={{ socket }}>
            {children}
        </SocketContext.Provider>
    );
}

