import React from 'react';
import { useState } from 'react';

function Carousel(props) {
  const { images } = props;
  const [currentImgIndex, setCurrentImageIndex] = useState(0);
  const handleLeft = () => {};
  const handleRight = () => {
    if (currentImgIndex + 1 < images.length) {
      setCurrentImageIndex(currentImgIndex + 1);
    } else {
      setCurrentImageIndex(0);
    }
  };

  return (
    <div>
      <img src={images[currentImgIndex]} alt="carousel" />
      <div>
        <button
          onClick={() => {
            handleLeft();
          }}
        >
          Left
        </button>
        <button
          onClick={() => {
            handleRight();
          }}
        >
          Right
        </button>
      </div>
    </div>
  );
}

export default Carousel;
