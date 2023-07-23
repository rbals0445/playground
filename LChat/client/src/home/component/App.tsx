import React, { useEffect, useState } from "react";
import axiosInstance from "@/base/api";
import { Link } from "react-router-dom";
import image from "@assets/profile.png";

function App(): React.ReactElement {
  const [roomList, setRoomList] = useState(["나루토", "사스케", "가아라"]);
  console.log("App");
  useEffect(() => {
    axiosInstance.get("/").then((res) => {
      console.log(res.data);
    });
  }, []);

  return (
    <>
      <div>
        <div
          style={{
            width: "100%",
            height: "105px",
            display: "flex",
            justifyContent: "center",
            paddingTop: "40px",
          }}
        >
          <img src={image} style={{ width: "80px" }}></img>
          <div>
            <div>황구273 / Gyumin Han</div>
            <div>화이팅!!!!!</div>
          </div>
        </div>
        <h1 style={{ padding: "20px 0", textAlign: "center" }}>Room List</h1>
        <hr />
        <ul
          style={{
            marginTop: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {roomList.map((roomName) => (
            <li key={roomName}>
              <Link to="/chat">{roomName}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
