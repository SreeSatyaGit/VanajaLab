import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes, useLocation } from 'react-router-dom';
import insulin from './images/insulin.png'; 
import Publications from './Publications.js';  
import Main from './Main.js'
import People from './people.js'
import Contact from './contact.js';

function App() {
  const handleBrandClick = () => {
    alert('Vanaja Lab button clicked!');
  };
  const[pathname,setPathname] = React.useState("")
  React.useEffect(()=>{setPathname(window.location.pathname)},[window.location.pathname])


  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav className="navbar">
            <button className="navbar-brand" onClick={handleBrandClick}>
              <span className="highlight">Vanaja Lab</span>
            </button>
            <div className="navbar-links">
              <Link to="/" className="active">ABOUT</Link>
              <Link to="/publications" >Publications</Link>
              <Link to="/people">PEOPLE</Link>
              <Link to="/tools">TOOLS</Link>
              <Link to="/contact">CONTACT US</Link>
            </div> 
          </nav>
        </header>
        <main>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path="/publications" element={<Publications />} />
          <Route path="/people" element={<People />} />
          <Route path="/tools" element={<Publications />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        </main>

      </div>
    </Router>
  );
}

export default App;
