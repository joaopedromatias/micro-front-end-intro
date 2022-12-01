import React from "react";
import ReactDOM from "react-dom";
import Header from "home/Header";
import "./index.css";
import PDP from './components/PDP'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => (
  <Router>
      <Header />
      <Routes>
        <Route path="/product/:id" element={<PDP />}/>
      </Routes>
  </Router>
);

ReactDOM.render(<App />, document.getElementById("app"));