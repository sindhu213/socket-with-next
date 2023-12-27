"use client";
import { useState } from "react";
import { useSocket } from "../context/SocketProvider";
import Messages from "./Messages";

export default function ChatInterface() {
    const { socket, messages } = useSocket();
    const [inputState, setInputState] = useState<string>();

    const handleClick = () => {
        socket?.emit("message", inputState);
        messages?.push(inputState)
    };

    return (
        <>
            <input
                type="text"
                placeholder="Type your message"
                onChange={(event) => setInputState(event.target.value)}
            />
            <button onClick={handleClick}>Send</button>
            <Messages messagesProps={messages} />
        </>
    );
}
