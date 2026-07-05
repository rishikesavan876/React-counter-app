import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <div>
      <h1> Counter App</h1>

      <h2>Count: {count}</h2>

      <button onClick={increase}>Increment</button>

      <button onClick={decrease}>Decrement</button>
    </div>
  );
}

export default Counter;