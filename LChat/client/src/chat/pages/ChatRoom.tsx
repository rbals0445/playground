import React, { ChangeEvent, useEffect, useState } from "react";
import useSocket from "@chat/hooks/useSocket";
import { socket } from "@/utils/socket";

function ChatRoom(): React.ReactElement {
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [respMessage, setRespMessage] = useState<string[]>([]);
  const { connect, disconnect, sendMessage, receiveMessage } = useSocket();

  const onClickSend = (message: string) => () => {
    sendMessage("e1", message);
    setMessage("");
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    connect();
    setIsLoading(false);

    receiveMessage("e1", (resp: string) => {
      setRespMessage((prev) => [...prev, resp]);
    });

    return () => {
      disconnect();
    };
  }, []);

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <div
        style={{
          display: "flex",
          rowGap: "10px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input onChange={onChange} value={message} />
        <button onClick={onClickSend(message)}>send Message</button>
      </div>
      <div>
        {!!respMessage.length &&
          respMessage.map((elem, index) => <div key={index}>{elem}</div>)}
      </div>
    </>
  );
}

export default ChatRoom;
