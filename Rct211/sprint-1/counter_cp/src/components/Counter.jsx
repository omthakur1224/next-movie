import React, { useState } from "react";

const Counter = ({ initCount }) => {
  const [count, setcount] = useState(initCount);

  const handleInc = () => {
    setcount((prev) => prev + 1);
  };
  return (
    <div>
      <h2 data-testid="counter-header">Counter</h2>
      <h3 data-testid="count">{count}</h3>
      <button data-testid="add-btn" onClick={handleInc}>
        +
      </button>
      <button
        data-testid="subtract-btn"
        onClick={() => setcount((prev) => prev - 1)}>
        -
      </button>
      <button
        data-testid="double-btn"
        onClick={() => setcount((prev) => prev * 2)}>
        Double
      </button>
    </div>
  );
};

export default Counter;
