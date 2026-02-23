import React, { useState } from "react";

const Bowler = () => {
  const [balls, setBalls] = useState(0);

  const handleBalls = () => {
    const addBall = balls + 1;

    setBalls(addBall);
  };

  return (
    <div>
      <h2>Balls Bowled: {balls}</h2>
      <p>Overs: </p>
      <button onClick={handleBalls}>Legal Ball</button>
      <button>Wide</button>
      <button>No Ball</button>
    </div>
  );
};

export default Bowler;
