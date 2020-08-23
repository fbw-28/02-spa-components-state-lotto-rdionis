import React from "react";

const Buttons = ({ generateLuckyNumbers, reset }) => {
  return (
    <div>
      <button onClick={reset}>Reset</button>
      <button onClick={generateLuckyNumbers}>Show me lucky numbers</button>
    </div>
  );
};

export default Buttons;
