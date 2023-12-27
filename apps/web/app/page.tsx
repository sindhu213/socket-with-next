import { SocketProvider } from "../context/SocketProvider"

export default function Page(){
  return (
    <SocketProvider>
      <p>Hello, there!</p>
    </SocketProvider>
  )
}