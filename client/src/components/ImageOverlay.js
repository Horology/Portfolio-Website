import React from 'react';

const ImageOverlay = () => {
  return <div className = ' image-container'>
    <canvas id="clock" width="150" height="150">
      <img src="images/clock.png" width="150" height="150" alt=""/>
    </canvas>
  </div>;
};

export default ImageOverlay;
