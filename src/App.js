import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes, useLocation } from 'react-router-dom';
import Publications from './Publications.js';  
import Main from './Main.js'
import People from './People.js'
import Contact from './Contact.js';

function App() {
  const handleBrandClick = () => {
    alert('Vanaja Lab button clicked!');
  };
  const[pathname,setPathname] = React.useState("")
  useEffect(()=>{setPathname(window.location.pathname)},[window.location.pathname ])


  const handleLinkClick = (path) => {
    if (pathname !== path) {
      window.location.href = path;
    }
  };
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav className="navbar">
            <button className="navbar-brand" onClick={() => handleLinkClick('/')}>
              <span className="highlight">Vanaja Labs</span>
            </button>
            <div className="navbar-links">
              <Link to="/" onClick={() => handleLinkClick('/')} className={pathname === '/' ? 'active' : ''}>ABOUT</Link>
              <Link to="/Publications" onClick={() => handleLinkClick('/publications')} className={pathname === '/publications' ? 'active' : ''}>Publications</Link>
              <Link to="/People" onClick={() => handleLinkClick('/people')} className={pathname === '/people' ? 'active' : ''}>PEOPLE</Link>
              <Link to="/tools" onClick={() => handleLinkClick('/tools')} className={pathname === '/tools' ? 'active' : ''}>TOOLS</Link>
              <Link to="/Contact" onClick={() => handleLinkClick('/contact')} className={pathname === '/contact' ? 'active' : ''}>CONTACT US</Link>
            </div>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path="/Publications" element={<Publications />} />
            <Route path="/People" element={<People />} />
            <Route path="/tools" element={<Publications />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
