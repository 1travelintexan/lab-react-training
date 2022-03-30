import React from 'react';
import Rating from './Rating';

function DriverCard(props) {
  const { name, rating, img, car } = props;
  let newRating = Math.round(rating);
  return (
    <div className="center">
      <div className="driver">
        <div>
          <img
            src={img}
            alt="this is the alt"
            style={{ height: '150px', width: '150px', borderRadius: '150px' }}
          />
        </div>
        <div style={{ color: 'white' }}>
          <h2>{name}</h2>
          <Rating>{newRating}</Rating>
          <h2>
            {car.model}-{car.licensePlate}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default DriverCard;
