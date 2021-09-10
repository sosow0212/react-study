import React from "react";
import { useState } from "react";

function SetState() {
  
  const [Number, setNumber] = useState(0);
  const [Text, setText] = useState("")

  const increaseNum = () => {
    setNumber(Number+1);
  }

  const decreaseNum = () => {
    setNumber(Number-1);
  }

  return (
    <div>
      <h1>Using setState</h1>
      <h2>Number : {Number} </h2>
      <button onClick={increaseNum}>Increase Number</button>
      <button onClick={decreaseNum}>Decrease Number</button>
    </div>
  );
}

export default SetState;
