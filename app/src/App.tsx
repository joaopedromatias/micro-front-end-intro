import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import "./index.css";
import Home from 'home/HomeContent'
import Cart from 'cart/CartContent'
import PDP from 'pdp/PDPContent'

const App = () => (
  <Router>
    <Routes>
      <Route  path="/" element={<Home />} />
      <Route  path="/product/:id" element={<PDP />} />
      <Route  path="/cart" element={<Cart />} />
    </Routes>
  </Router>
    
);
ReactDOM.render(<App />, document.getElementById("app"));
