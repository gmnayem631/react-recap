import React, { useState } from "react";

const ShowHide = () => {
  const [display, setDisplay] = useState("show");

  const handleHide = () => {
    setDisplay("hide");
  };
  const handleShow = () => {
    setDisplay("show");
  };

  return (
    <div>
      <h2 className={display}>Hello React Learners!</h2>
      <button onClick={handleShow}>Show</button>
      <button onClick={handleHide}>Hide</button>
    </div>
  );
};

export default ShowHide;
