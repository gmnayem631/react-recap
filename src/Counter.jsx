import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleAdd = () => {
    const addOne = counter + 1;
    setCounter(addOne);
  };

  const handleSubtract = () => {
    const subtractOne = counter - 1;
    setCounter(subtractOne);
  };

  const handleReset = () => {
    setCounter(0);
  };

  return (
    <div>
      <h3>Counter: {counter}</h3>
      <div style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
        <button onClick={handleAdd}>+ 1 </button>
        <button onClick={handleSubtract}>- 1 </button>
        <button onClick={handleReset}> Reset </button>
      </div>
    </div>
  );
};

export default Counter;
