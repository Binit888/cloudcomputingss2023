import './pages/styles.css'; // Import the CSS file

import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Initial from './pages/initial';
import Main from './pages/main';
import Oai from './pages/oai';
import Play from './pages/play';
import React from 'react';
import Test from './pages/test';
import Train from './pages/train';
import Valid from './pages/valid';

const App = () => {
  return (
    <Router>
      <div>
        <nav className='navbar'>
          <Link to="/" className="projectname">Pet Detection System</Link>
          <ul>
            <li>
              <Link to="/train">Train</Link>
            </li>
            <li>
              <Link to="/valid">Valid</Link>
            </li>
            <li>
              <Link to="/test">Test</Link>
            </li>
            <li>
              <Link to="/oai">Our AI</Link>
            </li>
            <li>
              <Link to="/play">Play ground</Link>
            </li>
            <li>
              <Link to="/initial">Team</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/train" element={<Train/>} />
          <Route path="/valid" element={<Valid/>} />
          <Route path="/test" element={<Test/>} />
          <Route path="/play" element={<Play/>} />
          <Route path="/oai" element={<Oai/>} />
          <Route path="/initial" element={<Initial/>} />
          <Route path="/" element={<Main/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
