import React from 'react';
import './Team.css';

import coordinator1 from './images/coordinator1.jpeg';
import coordinator2 from './images/coordinator2.webp';
import relation1 from './images/relation1.webp';
import relation2 from './images/relation2.webp';
import eventHead1 from './images/eventHead1.webp';
import eventHead2 from './images/eventHead2.webp';
import developer1 from './images/developer1.webp';
import developer2 from './images/developer2.webp';

const Team = () => {
  return (
    <div className="team-container">
      <h2 className="team-heading">Meet Our Team</h2>

      <div className="team-category">
        <h3 className="category-heading">COORDINATORS</h3>
        <div className="team-circles">
          <div className="team-circle">
            <img src={coordinator1} alt="Coordinator 1" />
            <div className="circle-border"></div>
            <div className="overlay">
              <p className="overlay-text">Surbhi Singh</p>
            </div>
          </div>
          <div className="team-circle">
            <img src={coordinator2} alt="Coordinator 2" />
            <div className="circle-border"></div>
            <div className="overlay">
              <p className="overlay-text">Vivek Branwal</p>
            </div>
          </div>
        </div>
      </div>

      <div className="team-category">
        <h3 className="category-heading">RELATIONS</h3>
        <div className="team-circles">
          <div className="team-circle">
            <img src={relation1} alt="Relation 1" />
            <div className="circle-border"></div>
            <div className="overlay">
              <p className="overlay-text">Akshat Agrawal</p>
            </div>
          </div>
          <div className="team-circle">
            <img src={relation2} alt="Relation 2" />
            <div className="circle-border"></div>
            <div className="overlay">
              <p className="overlay-text">Rohan Agrawal</p>
            </div>
          </div>
        </div>
      </div>

      <div className="team-category">
        <h3 className="category-heading">EVENT HEAD</h3>
        <div className="team-circles">
          <div className="team-circle">
            <img src={eventHead1} alt="Event Head 1" />
            <div className="circle-border"></div>
            <div className="overlay">
              <p className="overlay-text">Shreya Patike</p>
            </div>
          </div>
          <div className="team-circle">
            <img src={eventHead2} alt="Event Head 2" />
            <div className="circle-border"></div>
            <div className="overlay">
              <p className="overlay-text">Ayush Rai</p>
            </div>
          </div>
        </div>
      </div>

      <div className="team-category">
        <h3 className="category-heading">DEVELOPERS</h3>
        <div className="team-circles">
          <div className="team-circle">
            <img src={developer1} alt="Developer 1" />
            <div className="circle-border"></div>
            <div className="overlay">
              <p className="overlay-text">Tejeshwar Reddy</p>
            </div>
          </div>
          <div className="team-circle">
            <img src={developer2} alt="Developer 2" />
            <div className="circle-border"></div>
            <div className="overlay">
              <p className="overlay-text">Chinmay Dorge</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
