import { useState } from "react";

export default function UseStateHook() {
  const [count, setCount] = useState(0);
  const handleAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  const handleRemove = () => {
    setCount(count - 1);
  };

  const hookStyle = {
    margin: "10px",
    border: "5px solid red",
    padding: "10px",
  };
  return (
    <div style={hookStyle}>
      <h3>Count: {count}</h3>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
}
