import React from "react";

const Players = ({ player }) => {
  console.log(player);
  return (
    <div>
      <p style={{ fontSize: "20px", fontWeight: "bold" }}>Players{player}</p>
    </div>
  );
};

export default Players;
