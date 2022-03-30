import React from 'react';

function LikeButton(props) {
  const { countIncrease, count, color } = props;
  return (
    <div className="center">
      <button
        style={{
          background: color,
          padding: '50px',
          color: 'white',
          fontSize: '40px',
        }}
        onClick={countIncrease}
      >
        {count} Likes
      </button>
    </div>
  );
}

export default LikeButton;
