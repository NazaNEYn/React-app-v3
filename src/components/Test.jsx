import { useState } from "react";

const Test = () => {
  const [text, setText] = useState(0);

  const increase = () => {
    setText(text + 1);
  };
  const reset = () => {
    setText(0);
  };

  const remove = () => {
    if (text > 0) {
      setText(text - 1);
    }
  };
  return (
    <div>
      <div className="container">
        <h2>Sheep Counter</h2>
        <div className="text">{"🐑".repeat(text)}</div>
        <div className="mini-box">
          <div className="increase">
            <span>Add</span>
            <button onClick={increase}>+</button>
          </div>
          <div className="reset">
            <span>Reset</span>
            <button onClick={reset}>-</button>
          </div>
          <div className="remove">
            <span>Remove</span>
            <button onClick={remove}>-</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
