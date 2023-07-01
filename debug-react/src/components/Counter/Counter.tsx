import React, { useState } from "react";

function Counter(): React.ReactElement {
  console.log(useState);
  const [count, setCount] = useState(0);

  return (
    <>
      <div>Counter</div>
      <div>Count = {count}</div>
      <button onClick={() => setCount(count + 1)}>increase</button>
      <button onClick={() => setCount(count - 1)}>decrease</button>
    </>
  );
}

export default Counter;
