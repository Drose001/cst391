import React, { useState } from 'react';
import './Counter.css';

const Counter = (props) => {
  const [clicks, setClicks] = useState(0);
  const [message, setMessage] = useState(props.title);

  return (
  <div className="container">
    <h2>{message}</h2>

    <p>Button clicked: {clicks} times</p>

    <button onClick={() => setClicks(clicks + 1)}>
      Click Me
    </button>

    <br /><br />

    <input 
      type="text"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
    />
  </div>
);
};

export default Counter;