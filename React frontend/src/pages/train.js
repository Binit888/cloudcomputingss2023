import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { dataURL } from '../constants';

const Train = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getData()
  }, []);

  const getData= async()  => {
    let data=await axios.get(`${dataURL}/train`)
    setImages(data.data)
  }

  return (
    <div className="page-container">
    <h2>Train</h2>
    <h3>Total number of images: {images.length}</h3>
    <div className="image-grid">
      {images.map((image,index) => (
        <div key={index} className="image-item">
          <img src={image.url} alt={image} />
        </div>
      ))}
    </div>
  </div>
);
};

export default Train;
