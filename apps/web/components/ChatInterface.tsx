"use client";
import { useState  } from "react";
import { useSocket } from "../context/SocketProvider";
import Messages from "./Messages";

export default function ChatInterface() {
    const {socket,messageGroup} = useSocket();
    const [inputState, setInputState] = useState<string>();

    const handleClick = () => {
        if(inputState){
            socket?.emit("message", inputState);
            messageGroup.push(inputState);
            setInputState("");
        }
    }

    return (
        <>
            <input type="text" placeholder="Type your message" onChange={(e)=>setInputState(e.target.value)}/>
            <button onClick={handleClick}>Send</button>
            <Messages messageGroupProps={{messages:messageGroup}}/>
        </>
    )
}