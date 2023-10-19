import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const isHidden = count === 0;

  return (
    <>
      <section>
        <h2>Counter</h2>
        <p style={{ visibility: isHidden ? "hidden" : "visible" }}>{count}</p>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </section>
    </>
  );
};

export default Counter;
