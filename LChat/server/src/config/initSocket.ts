import { Server as SocketServer } from "socket.io";
import type { Server } from "https";

function initSocket(server: Server) {
  const io = new SocketServer(server, {
    cors: {
      origin: "https://localhost:9000",
    },
  });

  io.on("connection", (socket) => {
    console.log("userConnected");

    socket.on("disconnect", () => {
      console.log("user Disconencted");
    });

    socket.on("e1", (msg, cb) => {
      console.log(msg);
      cb(`${msg} msg 좀 추가합니다`);
      // io.emit("create-something", msg + "msg 좀 추가합니다"); // sender 포함.
      // socket.broadcast.emit으로 발신자 제외하고 모두 보내기 가능
    });
  });
}

export default initSocket;
