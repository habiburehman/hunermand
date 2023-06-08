import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/contact" Component={Contact} />
          <Route path="/service" Component={Services} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
