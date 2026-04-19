import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const upCount = () => setCount((count) => count + 1);
  const downCount = () => setCount((count) => count > 0 ? count - 1 : 0);
  const reset = () => setCount(0);
  return (
    <div>
      <h2>カウンター：{count}</h2>
      <button onClick={upCount}>+</button>
      <button onClick={downCount} disabled={count === 0}>-</button>
      <button onClick={reset}>リセット</button>
    </div>
  );
}

export default Counter;