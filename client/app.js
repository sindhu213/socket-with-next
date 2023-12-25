const socket = io("ws://localhost:8080");

socket.on('message', (incomingMessage) => {
    const element = document.createElement('li');
    element.innerHTML = incomingMessage;
    document.querySelector('ul').appendChild(element);
}) 

document.querySelector('button').on("click", ()=>{
    const outgoingMessage = document.querySelector('input').value;
    socket.emit('message',outgoingMessage);
})