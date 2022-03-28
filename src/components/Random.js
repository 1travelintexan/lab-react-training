import React from 'react';

function Random(props) {
  let number = Math.floor(Math.random() * (props.max - props.min) + props.min);
  return (
    <div>
      <h3>
        Random value between {props.min} and {props.max}: {number}
      </h3>
    </div>
  );
}

export default Random;
