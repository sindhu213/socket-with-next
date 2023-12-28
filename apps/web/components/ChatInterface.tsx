"use client";
import { useState } from "react";
import { useSocket } from "../context/SocketProvider";
import Messages from "./Messages";

export default function ChatInterface() {
    const {socket,messageGroup} = useSocket();
    const [inputState, setInputState] = useState<string>();
    const [isClicked, setIsCLicked] = useState<boolean>(false);
    const [count, setCount] = useState<number>(0);

    const handleClick = () => {
        setIsCLicked(true);
        setCount((prevCount) => prevCount + 1);
        socket?.emit("message", inputState);
        if(inputState) messageGroup.push(inputState);
    }

    return (
        <>
            <input type="text" placeholder="Type your message" onChange={(e)=>setInputState(e.target.value)}/>
            <button onClick={handleClick}>Send</button>
            {isClicked && <Messages messageGroupProps={{messageGroup:}}/>}
        </>
    )
}