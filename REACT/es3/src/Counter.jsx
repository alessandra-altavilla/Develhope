import { useState } from "react";
import "./counter.css";
import { CounterDisplay } from "./CounterDisplay";

export default function Counter({ initValue = 0, incrementValue = 1 }) {
  const [counter, setCounter] = useState(initValue);

  function handleCounterIncrement() {
    setCounter((value) => value + incrementValue);
  }

  function handleCounterDecrement() {
    setCounter((value) => value - incrementValue);
  }

  function handleCounterReset() {
    setCounter(initValue);
  }

  return (
    <div>
      <CounterDisplay count={counter} />

      <div className="button">
        <button onClick={handleCounterIncrement}>Increment</button>
        <button onClick={handleCounterDecrement}>Decrement</button>
        <button onClick={handleCounterReset}>Reset</button>
      </div>
    </div>
  );
}
