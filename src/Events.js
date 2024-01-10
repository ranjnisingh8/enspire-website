import React, { useState } from 'react';
import './Events.css';

import circleImage1 from './images/event1.png';
import circleImage2 from './images/event2.png';
import circleImage3 from './images/event3.png';
import circleImage4 from './images/event4.png';
import circleImage5 from './images/event5.png';
import circleImage6 from './images/event6.png';
import circleImage7 from './images/event7.png';
import circleImage8 from './images/event8.png';

const Events = () => {
  const [selectedCircle, setSelectedCircle] = useState(null);

  const handleCircleClick = (circleNumber) => {
    setSelectedCircle(circleNumber);
  };

  const closeImage = () => {
    setSelectedCircle(null);
  };

  const circleImages = {
    1: circleImage1,
    2: circleImage2,
    3: circleImage3,
    4: circleImage4,
    5: circleImage5,
    6: circleImage6,
    7: circleImage7,
    8: circleImage8,
  };

  return (
    <div className="events-container">
      <h2 className="events-heading">Events</h2>
      <div className="row">
        {[1, 2, 3, 4].map((circleNumber) => (
          <React.Fragment key={circleNumber}>
            <div
              className="circle"
              onClick={() => handleCircleClick(circleNumber)}
            >
              <img
                src={circleImages[circleNumber]}
                alt={`Event ${circleNumber}`}
              />
            </div>
            {circleNumber !== 4 && <div className="line"></div>}
          </React.Fragment>
        ))}
      </div>
      <div className="row">
        {[5, 6, 7, 8].map((circleNumber) => (
          <React.Fragment key={circleNumber}>
            <div
              className="circle"
              onClick={() => handleCircleClick(circleNumber)}
            >
              <img
                src={circleImages[circleNumber]}
                alt={`Event ${circleNumber}`}
              />
            </div>
            {circleNumber !== 8 && <div className="line"></div>}
          </React.Fragment>
        ))}
      </div>
      {selectedCircle && (
        <div className="popup">
          <img
            src={circleImages[selectedCircle]}
            alt={`Event ${selectedCircle}`}
          />
          <button className="close-btn" onClick={closeImage}>
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default Events;
