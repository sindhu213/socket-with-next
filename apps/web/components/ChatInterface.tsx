"use client";
import { useState } from "react";
import { useSocket } from "../context/SocketProvider";

export default function ChatInterface() {
    const {socket,messageGroup} = useSocket();
    const [inputState, setInputState] = useState<string>();

    const handleClick = () => {
        socket?.emit("message", inputState);
        if(inputState) messageGroup.push(inputState);
    }

    return (
        <>
            <input type="text" placeholder="Type your message" onChange={(e)=>setInputState(e.target.value)}/>
            <button onClick={handleClick}>Send</button>
        </>
    )
}