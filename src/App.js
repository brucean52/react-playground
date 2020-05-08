import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <ul className="nav">
          <li><h1>React Playground</h1></li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        
        <Route path="/" exact component={Home} />
      </div>
    </Router>
  );
}

export default App;
