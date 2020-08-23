import React from "react";

const Number = ({ luckyNumber, highlight }) => {
  return <div className={`number ${highlight}`}>{luckyNumber}</div>;
};

export default Number;
