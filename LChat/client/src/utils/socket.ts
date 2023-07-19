import { io } from "socket.io-client";

const URL = "https://localhost:443";

export const socket = io(URL, {
  autoConnect: false,
});
