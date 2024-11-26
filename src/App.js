import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes, useLocation } from 'react-router-dom';
import Publications from './Publications.js';  
import Main from './Main.js'
import People from './People.js'
import Contact from './Contact.js';
import News from './News.js';
import Conferences from'./Conferences.js';

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
               <Link to="/News" onClick={() => handleLinkClick('/News')} className={pathname === '/news' ? 'active' : ''}>NEWS</Link> 
              <Link to="/Contact" onClick={() => handleLinkClick('/contact')} className={pathname === '/contact' ? 'active' : ''}>CONTACT US</Link>
              <Link to="/Conferences" onClick={() => handleLinkClick('/conferences')} className={pathname === '/conferences' ? 'active' : ''}>CONFERENCES</Link>
            </div>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path="/Publications" element={<Publications />} />
            <Route path="/People" element={<People />} />
            <Route path="/News" element={<News />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/conferences" element={<Conferences/>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
