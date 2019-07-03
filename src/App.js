import React from "react";
import { Route, Link } from "react-router-dom";
import About from "./components/about";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Link to="/about">About</Link>
      <Route path="/about" component={About} />
    </div>
  );
}

export default App;
