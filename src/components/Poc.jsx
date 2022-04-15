import React, { useState } from "react";

const Poc = () => {
  let [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(++count)}>Click me</button>
    </div>
  );
};

export default Poc;
