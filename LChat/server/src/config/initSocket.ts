import { Server as SocketServer } from "socket.io";
import type { Server } from "https";

function initSocket(server: Server) {
  const io = new SocketServer(server);

  io.on("connection", (socket) => {
    console.log("userConnected", socket);
  });
}

export default initSocket;
