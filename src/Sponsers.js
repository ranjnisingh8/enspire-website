import React from 'react';
import './Sponsers.css';

import sponserImage1 from './images/sponser1.webp';
import sponserImage2 from './images/sponser2.png';
import sponserImage3 from './images/sponser3.jpeg';

const Sponsers = () => {
  const sponsersData = [
    { image: sponserImage1, text: 'Education Sponser' },
    { image: sponserImage2, text: 'Title Sponser' },
    { image: sponserImage3, text: 'Event Sponser' },
  ];

  return (
    <div className="sponsers-container">
      <h2 className="sponsers-heading">Our Sponsers</h2>
      <div className="circle-container">
        {sponsersData.map((sponser, index) => (
          <div className="circle" key={index + 1}>
            <img src={sponser.image} alt={`Sponser ${index + 1}`} />
            <div className="overlay">
              <span className="overlay-text">{sponser.text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsers;
