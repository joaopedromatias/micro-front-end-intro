import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import Header from "./components/Header";
import Home from './components/Home'

const App = () => (
  <div className="container">
    <Header />
    <Home />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
