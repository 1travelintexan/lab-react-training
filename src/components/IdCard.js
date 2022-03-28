import React from 'react';
import '../App.css';

function IdCard(props) {
  const { lastName, firstName, gender, height, birth, picture } = props;

  let date = birth.toString().split(' ').slice(0, 4).join(' ');
  return (
    <div className="card">
      <div>
        <img src={picture} alt="selfie" />
      </div>
      <div>
        <div className="flex">
          <h4>First Name:</h4>
          <p>{firstName}</p>
        </div>
        <div className="flex">
          <h4>Last Name:</h4>
          <p>{lastName}</p>
        </div>
        <div className="flex">
          <h4>Gender:</h4>
          <p>{gender}</p>
        </div>
        <div className="flex">
          <h4>Height:</h4>
          <p>{height}</p>
        </div>
        <div className="flex">
          <h4>Birth:</h4>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
}

export default IdCard;
