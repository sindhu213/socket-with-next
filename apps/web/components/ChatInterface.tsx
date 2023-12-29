"use client";
import { useEffect, useState  } from "react";
import { useSocket } from "../context/SocketProvider";
import Messages from "./Messages";

export default function ChatInterface() {
    const {socket} = useSocket();
    const [inputState, setInputState] = useState<string>();
    const [messageGroup, setMessageGroup] = useState<string[]>([]);

    const handleClick = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if(inputState){
            socket?.emit("message", inputState);
            setInputState("");
        }
    }

    useEffect(() => {
        socket?.on("message", (incomingMessage) => {
            setMessageGroup([...messageGroup, incomingMessage]);
        })
    });

    return (
        <>
            <input type="text" placeholder="Type your message" onChange={(e)=>setInputState(e.target.value)}/>
            <button onClick={handleClick}>Send</button>
            <Messages messageGroupProps={{messages:messageGroup}}/>
        </>
    )
}