import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import Header from "./components/Header";
import HomeHolder from "./components/HomeHolder";
import Home from './components/HomeContent'

const App = () => (
  <div className="container">
    <Header />
    <HomeHolder>
      <Home />
    </HomeHolder>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));