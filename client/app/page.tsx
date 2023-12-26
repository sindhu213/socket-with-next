import { io } from "socket.io-client";

export default function Page() {
  const socket = io();
  return <p>Chat Application</p>;
}
