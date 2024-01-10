import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from './images/logo.png'

const Navbar = () => {
  const [navbarBackground, setNavbarBackground] = useState('transparent');

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
      setNavbarBackground('#3afdba');
    } else {
      setNavbarBackground('transparent');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="navbar" style={{ backgroundColor: navbarBackground }}>
      <div className="navbar-container">
        <div className="logo-container">
          <img src={logo} alt="Logo" />
        </div>
        <ul className="nav-links">
          <li><a href="#app.js">Home</a></li>
          <li><a href="#Events.js">Events</a></li>
          <li><a href="#Sponser.js">Sponsers</a></li>
          <li><a href="#Team.js">Team</a></li>
          <li><a href="#Gallery.js">Gallery</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;