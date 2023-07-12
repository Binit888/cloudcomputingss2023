import React, { useEffect, useState } from 'react';

import { dataURL } from '../constants';

const Test = () => {
  const [images, setImages] = useState([]);

  const copyToClipboard = (url) => {
    navigator.clipboard.writeText(url)
      .then(() => {
        alert('Image URL copied to clipboard!');
      })
      .catch((error) => {
        console.error('Failed to copy image URL to clipboard:', error);
      });
  };

  useEffect(() => {
    fetch(`${dataURL}/test`)
      .then(response => response.json())
      .then(data => setImages(data));
  }, []);

  return (
    <div className="page-container">
    <h2>Test</h2>
    <h3>Total number of images: {images.length}</h3>
    <div className="image-grid">
        {images.map((image,index) => (
          <div
            key={index}
            className="image-item"
            onClick={() => copyToClipboard(image.url)}
          >
            <img src={image.url} alt={image.img} />
          </div>
        ))}
      </div>
  </div>
);
};

export default Test;
