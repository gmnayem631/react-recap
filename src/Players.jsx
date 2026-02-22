import React from "react";

const Players = ({ player }) => {
  return (
    <div>
      <p style={{ fontSize: "20px", fontWeight: "bold" }}>Name: {player}</p>
    </div>
  );
};

export default Players;
