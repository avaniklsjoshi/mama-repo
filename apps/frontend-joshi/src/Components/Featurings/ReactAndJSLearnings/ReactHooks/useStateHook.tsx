import React, { FunctionComponent, useState } from "react";

// our components props accept a number for the initial value
const Counter: FunctionComponent<{ initial?: number }> = ({ initial = 0 }) => {
  const [clicks, setClicks] = useState(initial);
  return (
    <>
      <p>Clicks: {clicks}</p>
      <button onClick={() => setClicks(clicks + 1)}>+</button>
      <button onClick={() => setClicks(clicks - 1)}>-</button>
    </>
  );
};

export default Counter;
