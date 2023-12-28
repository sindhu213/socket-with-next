import { SocketProvider } from "../context/SocketProvider"
import ChatInterface from "../components/ChatInterface"

export default function Page(){
  return (
    <SocketProvider>
      <ChatInterface/>
    </SocketProvider>
  )
}
