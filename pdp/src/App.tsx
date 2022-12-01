import React from "react";
import ReactDOM from "react-dom";
import Header from "home/Header";
import "./index.css";
import PDP from './components/PDP'

const App = () => (
  <div className="container">
    <Header />
    <PDP />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));