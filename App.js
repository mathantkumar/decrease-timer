import "./styles.css";
import React, { useEffect } from "react";

export default function App() {
  const [count, setCount] = React.useState(10);
  const [isPause, setIsPause] = React.useState(false);

  const decreaseCounter = () => {
    if (count > 0 && !isPause) {
      setTimeout(() => {
        setCount(count - 1);
      }, 1000);
    }
  };
  useEffect(() => {
    decreaseCounter();
  }, [count]);

  const handlePause = () => {
    setIsPause(true);
  };

  const handleResume = () => {
    setIsPause(false);
    setCount(count - 1);
  };

  return (
    <div className="App">
      {count}
      <button onClick={handlePause}>pause</button>
      <button onClick={handleResume}>resume</button>
    </div>
  );
}
