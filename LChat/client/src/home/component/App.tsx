import React, { useEffect, useState } from "react";
import axiosInstance from "@/base/api";
import { Link } from "react-router-dom";

function App(): React.ReactElement {
  const [roomList, setRoomList] = useState(["나루토", "사스케", "가아라"]);

  useEffect(() => {
    axiosInstance.get("/").then((res) => {
      console.log(res.data);
    });
  }, []);

  return (
    <ul>
      {roomList.map((roomName) => (
        <li key={roomName}>
          <Link to="/">{roomName}</Link>
        </li>
      ))}
    </ul>
  );
}

export default App;
