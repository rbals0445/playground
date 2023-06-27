import React, { useState } from "react";
import getName from "my-util/utils";
import { test } from "my-util/test";

function App(): React.ReactElement {
  const [count, setCount] = useState(0);
  const name = getName();
  const _test = test();

  return (
    <>
      <div>This is my34 </div>
      <div>Count = {count}</div>
      <div>name = {name}</div>
      <div>test = {_test}</div>
      <button onClick={() => setCount(count + 1)}>increase</button>
    </>
  );
}

export default App;
