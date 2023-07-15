import React, { useEffect, useState } from "react";
import axiosInstance from "@/base/api";
import { Link } from "react-router-dom";
import image from "@assets/profile.png";

function App(): React.ReactElement {
  const [roomList, setRoomList] = useState(["나루토", "사스케", "가아라"]);

  useEffect(() => {
    axiosInstance.get("/").then((res) => {
      console.log(res.data);
    });
  }, []);

  return (
    <>
      <div style={{ width: "100%", height: "65px", display: "flex" }}>
        <img src={image} style={{ width: "80px" }}></img>
        <div style={{ width: "100%" }}>
          <div>황구273 / Gyumin Han</div>
          <div>화이팅!!!!!</div>
        </div>
      </div>
      <ul>
        {roomList.map((roomName) => (
          <li key={roomName}>
            <Link to="/">{roomName}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
