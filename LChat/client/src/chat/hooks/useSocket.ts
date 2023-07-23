import { socket } from "@/utils/socket";

function useSocket() {
  const connect = () => {
    socket.connect();
  };

  const disconnect = () => {
    socket.disconnect();
  };

  const receiveMessage = (
    eventName: string,
    cb: (response: string) => void
  ) => {
    socket.on(eventName, (response) => {
      cb(response);
    });
  };

  const sendMessage = (
    eventName: string,
    message: any,
    cb?: (response: string) => void
  ) => {
    socket.emit(eventName, message, cb);
  };

  return { connect, disconnect, sendMessage, receiveMessage };
}

export default useSocket;
