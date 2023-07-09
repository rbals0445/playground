import React, { useState } from "react";
import getName from "my-util/dist/utils";
import test from "my-util/dist/test";
import Counter from "my-util/dist/src/components/Counter/Counter";

function App(): React.ReactElement {
  const [count, setCount] = useState(0);
  const name = getName(3);
  const _test = test();

  return (
    <React.Fragment>
      <div>This is my34 </div>
      <div>Count = {count}</div>
      <div>name = {name}</div>
      <div>test = {_test}</div>
      <button onClick={() => setCount(count + 1)}>increase</button>
      <Counter />
      <div>{/* <Counter /> */}</div>
    </React.Fragment>
  );
}

export default App;
