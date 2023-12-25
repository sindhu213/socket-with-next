import { io } from "socket.io-client";

const socket = io("wss://localhost:8080");

socket.on("message", (incomingMessage) => {
    let element = document.createElement('li');
    element.innerHTML = incomingMessage;
    document.querySelector('ul').appendChild(element);
});


document.querySelector('button').on("click", () =>{
    const outgoingMessage = document.querySelector('input').value;
    socket.emit('message',outgoingMessage);
})