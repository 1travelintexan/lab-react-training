import React from 'react';
import starFilled from '../starFilled.png';
import starEmpty from '../starEmpty.png';

function Rating(props) {
  let starsArr = [];
  let solidNumber = Math.round(props.children);
  let solidStarImg = <img className="stars" src={starFilled} alt="stars" />;
  let emptyStarImg = <img className="stars" src={starEmpty} alt="stars" />;

  for (let i = 0; i < 5; i++) {
    if (solidNumber > 0) {
      starsArr.push(solidStarImg);
      solidNumber--;
    } else {
      starsArr.push(emptyStarImg);
    }
  }
  return (
    <div>
      <div>
        <div className="stars-div">{starsArr}</div>
      </div>
    </div>
  );
}

export default Rating;
