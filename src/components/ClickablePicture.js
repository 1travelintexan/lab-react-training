import React from 'react';

function ClickablePicture(props) {
  const { img, imgClicked, click, clicked } = props;
  let currentPic;
  click ? (currentPic = imgClicked) : (currentPic = img);
  return (
    <div>
      <img
        onClick={clicked}
        style={{ height: '150px' }}
        src={currentPic}
        alt="click"
      />
    </div>
  );
}

export default ClickablePicture;
