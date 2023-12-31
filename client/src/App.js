// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Chat from './chat';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Chat} />
    </Router>
  );
}




import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

