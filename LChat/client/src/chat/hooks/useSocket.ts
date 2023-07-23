import { socket } from "@/utils/socket";

function useSocket() {
  const connect = () => {
    socket.connect();
  };

  const disconnect = () => {
    socket.disconnect();
  };

  const sendMessage = (
    eventName: string,
    message: any,
    cb?: (resp: string) => void
  ) => {
    socket.emit(eventName, message, cb);
  };

  return { connect, disconnect, sendMessage };
}

export default useSocket;
