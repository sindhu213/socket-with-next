"use client";
import { useState } from "react";
import { useSocket, SocketProvider } from "../context/SocketProvider";

export default function Page() {
    //socket is undefined
    const { socket, messageGroup } = useSocket();
    const [inputState, setInputState] = useState("");

    const handleClick = () => {
        socket?.emit("message", inputState);
        messageGroup.push(inputState);
    };

    return (
        <SocketProvider>
            <input
                type="text"
                placeholder="Type your message"
                onChange={(e) => setInputState(e.target.value)}
            />
            <button onClick={handleClick}>send</button>
        </SocketProvider>
    );
}
