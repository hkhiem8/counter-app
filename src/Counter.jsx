import React, { useState } from "react";
import Button from "./Button";

function Counter() {
  const [value, setValue] = useState(0);

  // const [inputValue, setInputValue] = useState(0); - Add later

  const handleIncrement = (incrementValue) => {
    const newValue = value + parseInt(incrementValue, 10);
    setValue(newValue);
  };

  const handleDecrement = (decrementValue) => {
    const newValue = value - parseInt(decrementValue, 10);
    setValue(newValue);
  };

  const handleReset = (resetValue) => {
    const newValue = 0;
    setValue(newValue);
  };

  const handleReverse = (reverseValue) => {
    const newValue = -value;
    setValue(newValue);
  };


  return (
    <div>
      <h1>Please Add or Subtract</h1>
      <div className="board">
        <div id="emoji"> {value === 100 ? "💯" : "🧮"} </div>
        <div id="value" style={{ color: value < 0 ? "red" : "black" }}>
          {value}
        </div>
        <div className="container">
          <Button
            action={() =>
              handleIncrement(document.getElementById("number").value)
            }
            symbol="+"
          />
          <div className="value-form">
            <input type="number" id="number" defaultValue="0"/>
          </div>
          <Button
            action={() =>
              handleDecrement(document.getElementById("number").value)
            }
            symbol="-"
          />
          <div>
            <Button
            action={
              handleReset
            }
            symbol="reset"
            />
                      <div>
            <Button
            action={
              handleReverse
            }
            symbol="reverse"
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;