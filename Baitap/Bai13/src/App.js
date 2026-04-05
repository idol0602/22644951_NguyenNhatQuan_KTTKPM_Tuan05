import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>🚀 Welcome to React App with Nginx!</h1>
        <p>This React app is served by Nginx in Docker.</p>
        <button onClick={() => alert("Hello from React!")}>Click Me!</button>
      </header>
    </div>
  );
}

export default App;
