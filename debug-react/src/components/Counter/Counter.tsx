import React, { useState } from "react";
import getName from "@/utils";
import test from "@/test";
interface ICounter {
  prop1?: string;
}

function Counter({ prop1 = "" }: ICounter): React.ReactElement {
  const [count, setCount] = useState(0);
  console.log(prop1);

  const _test = test();
  const name = getName(33);

  return (
    <>
      <div>Count 32</div>
      <div>
        _test : {_test} _name: {name}
      </div>
      <div>Count = {count}</div>
      <button onClick={() => setCount(count + 1)}>increase</button>
      <button onClick={() => setCount(count - 1)}>decrease</button>
    </>
  );
}

export default Counter;
