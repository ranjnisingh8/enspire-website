import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Navbar'; 
import Sponsers from './Sponsers'; 
import Events from './Events'; 
import Gallery from './Gallery'; 
import Team from './Team'; 
import img1 from './images/diamond.png';
import img2 from './images/enspire.png';

const App = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <div className="image-container larger" style={{ top: '20%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <img src={img1} alt="Centered" className="black_diamond" />
          <div className="image-container smaller" style={{ position: 'absolute', top: '20%', left: '30%', transform: `translate(-50%, -50%) translateY(${scrollY}px)` }}>
            <img src={img2} alt="Scrolling" />
          </div>
        </div>
        <Sponsers />
        <Events />
        <Gallery />
        <Team />
      </div>
    </div>
  );
};

export default App;
