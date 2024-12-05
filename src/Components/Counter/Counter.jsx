import React from "react";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  console.log(count);

  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
      <h2>{count}</h2>
    </div>
  );
}

export default Counter;
