import React from 'react';
import "./styles/App.css";
import About from "./components/about.js"
import Search from "./components/search.js";
import Industries from './components/industries.js';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';


const App = () => (
  <div id='main-app'>
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Social Sentiment Search</Link></li>
          <li><Link to="/industries">Industries</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route exact path="/" element={<Search/>} />
        <Route exact path="/industries" element={<Industries/>} />
        <Route exact path="/about" element={<About/>} />
      </Routes>
    </Router>
  </div>
);

export default App;