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
    socket.join("naruto"); // socket을 naruto 채널에 구독

    socket.on("disconnect", () => {
      console.log("user Disconencted");
    });
    console.log(socket.id);

    socket.on("e1", (msg, cb) => {
      // console.log(msg);
      // cb("hello");
      io.to("naruto").emit("e1", msg);
      // io.emit("e1", "hello"); // sender 포함.
      // socket.broadcast.emit으로 발신자 제외하고 모두 보내기 가능
    });
  });
}

export default initSocket;
