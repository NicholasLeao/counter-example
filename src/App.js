import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(() => {
    return JSON.parse(localStorage.getItem("count"));
  });

  const onDecrease = (e) => setCount((prev) => prev - 1);
  const onIncrease = (e) => setCount((prev) => prev + 1);

  useEffect(() => {
    window.localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  return (
    <div className="App">
      <div className="App">
        <h1>{count}</h1>
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
      </div>
    </div>
  );
}

export default App;
