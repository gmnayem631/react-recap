import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleAdd = () => {
    const newCounter = counter + 1;
    setCounter(newCounter);
  };
  return (
    <div>
      <h3>Count: {counter}</h3>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default Counter;
