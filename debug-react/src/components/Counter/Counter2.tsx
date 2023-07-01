import * as React from "react";

function Counter2(): React.ReactElement {
  console.log(React.useState);
  const [count, setCount] = React.useState(0);

  return (
    <>
      <div>Counter2</div>
      <div>Count = {count}</div>
      <button onClick={() => setCount(count + 1)}>increase</button>
      <button onClick={() => setCount(count - 1)}>decrease</button>
    </>
  );
}

export default Counter2;
