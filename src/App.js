import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import List from './pages/List';
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
          <li>
            <Link to="/list/">List</Link>
          </li>
        </ul>
        
        <Route path="/" exact component={Home} />
        <Route path="/list/" component={List} />
      </div>
    </Router>
  );
}

export default App;
