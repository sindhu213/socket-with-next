"use client";
import { useState } from "react";
import { useSocket } from "../context/SocketProvider";

//can use a debouncing function to prevent immediate value update
export default function ChatInterface() {
    const socket = useSocket();
    const [inputState, setInputState] = useState();

    return (
        <>
            <input type="text" placeholder="Type your message"/>
            <button>Send</button>
        </>
    )
}