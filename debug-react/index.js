import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { Counter } from "./src/components/Counter";
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
      <Counter />
    </>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<LikeButton />);
