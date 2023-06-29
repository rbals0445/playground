import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import getName from "./utils";
import test from "./test";

function LikeButton() {
  const [data, setData] = useState([]);
  const _test = test();
  const name = getName(33);

  const onClick = () => {
    const arr = Array(10)
      .fill(0)
      .map((_) => Math.random().toString(36).slice(3, 8));

    setData(arr);
  };

  return (
    <>
      <div>test={_test}</div>
      <div>name={name}</div>
      <button onClick={onClick}>random</button>
      <ul>
        {data.map((val, index) => (
          <li key={index}>{val}</li>
        ))}
      </ul>
    </>
  );
}
// onClick={(e) => onClick(e, 1, 2, 3, 4, 5, 6, 7)} 는 아래로 변환된다.

// onClick(e) {
//   return _onClick(e, 1, 2, 3, 4, 5, 6, 7);
// }

function LikeButtonWithoutDelegation() {
  const onClick = (index) => () => {
    console.log(index);
  };

  return (
    <ul onClick={() => console.log("엣헴 버블링 성공")}>
      {Array(15000).map((_, index) => (
        <li onClick={onClick(index)} key={index}>
          {index}
        </li>
      ))}
    </ul>
  );
}
// debugger;
const root = createRoot(document.getElementById("root"));
root.render(<LikeButton />);
