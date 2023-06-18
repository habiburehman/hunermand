import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ConfigProvider } from "antd";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "gtwelsheim",
        },
      }}
    >
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/contact" Component={Contact} />
          <Route path="/services" Component={Services} />
        </Routes>
        <Footer />
      </Router>
    </ConfigProvider>
  );
}

export default App;
