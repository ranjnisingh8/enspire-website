import React, { useState } from 'react';
import './Gallery.css';

import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';
import image5 from './images/image5.jpg';
import image6 from './images/image6.jpg';
import image7 from './images/image7.jpg';
import image8 from './images/image8.jpg';
import image9 from './images/image9.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const imagesRow1 = [image1, image2, image3]; 
  const imagesRow2 = [image4, image5, image6]; 
  const imagesRow3 = [image7, image8, image9]; 

  return (
    <div className="gallery-container">
      <h2 className="gallery-heading">Know our Gallery</h2>
      <div className="image-collage">
        {imagesRow1.map((image, index) => (
          <div
            key={index}
            className="image-wrapper"
            onClick={() => handleImageClick(image)}
          >
            <img src={image} alt={`${index + 1}`} />
            <div className="overlay">
              <span className="search-icon">&#128269;</span>
            </div>
          </div>
        ))}
      </div>
      <div className="image-collage">
        {imagesRow2.map((image, index) => (
          <div
            key={index}
            className="image-wrapper"
            onClick={() => handleImageClick(image)}
          >
            <img src={image} alt={`${index + 4}`} />
            <div className="overlay">
              <span className="search-icon">&#128269;</span>
            </div>
          </div>
        ))}
      </div>
      <div className="image-collage">
        {imagesRow3.map((image, index) => (
          <div
            key={index}
            className="image-wrapper"
            onClick={() => handleImageClick(image)}
          >
            <img src={image} alt={`${index + 7}`} />
            <div className="overlay">
              <span className="search-icon">&#128269;</span>
            </div>
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className="enlarged-image" onClick={closeImage}>
          <img src={selectedImage} alt="Enlarged" />
        </div>
      )}
    </div>
  );
};

export default Gallery;
