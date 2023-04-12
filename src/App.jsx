import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(localStorage.getItem("yourCount") || 0);

  useEffect(() => {
    localStorage.setItem("yourCount", count);
  }, [count]);

  return (
    <main className="App">
      <h1>Clicks {count}</h1>
      <button
        className="btn-click"
        onClick={() => setCount((count) => JSON.parse(count) + 1)}
      >
        Click Here
      </button>
    </main>
  );
}

export default App;
