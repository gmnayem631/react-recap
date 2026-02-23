import React, { useState } from "react";

const Batsman = () => {
  const [runs, setRuns] = useState();

  const handleSingle = () => {
    const addSingle = runs + 1;
    setRuns(addSingle);
  };
  const handleDouble = () => {
    const addDouble = runs + 2;
    setRuns(addDouble);
  };
  const handleFour = () => {
    const addFour = runs + 4;
    setRuns(addFour);
  };
  const handleSix = () => {
    const addSix = runs + 6;
    setRuns(addSix);
  };
  return (
    <div>
      <h1>Score: {runs}</h1>
      {runs >= 50 && <p>Half Century!!!</p>}
      <button onClick={handleSingle}>Single</button>
      <button onClick={handleDouble}>Double</button>
      <button onClick={handleFour}>Four</button>
      <button onClick={handleSix}>Six</button>
    </div>
  );
};

export default Batsman;
