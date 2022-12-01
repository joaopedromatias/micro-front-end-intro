import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import HomeContent from './components/HomeContent'

const App = () => (
      <HomeContent />
);

ReactDOM.render(<App />, document.getElementById("app"));