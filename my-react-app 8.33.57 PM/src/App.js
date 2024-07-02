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
  useEffect(()=>{setPathname(window.location.pathname)},[window.location.pathname ])

  console.log(pathname,'pathname')

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
              <Link to="/publications" onClick={() => handleLinkClick('/publications')} className={pathname === '/publications' ? 'active' : ''}>Publications</Link>
              <Link to="/people" onClick={() => handleLinkClick('/people')} className={pathname === '/people' ? 'active' : ''}>PEOPLE</Link>
              <Link to="/tools" onClick={() => handleLinkClick('/tools')} className={pathname === '/tools' ? 'active' : ''}>TOOLS</Link>
              <Link to="/contact" onClick={() => handleLinkClick('/contact')} className={pathname === '/contact' ? 'active' : ''}>CONTACT US</Link>
            </div>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Main />} />
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
