import React from 'react';
import ImageSlider from './ImageSlider';

const ScrollSnapContainer = () => {
  return (
    <div className="overflow-x-auto snap-x-mandatory relative" style={{ overflowX: 'hidden' }}>
      <ImageSlider />
    </div>
  );
};

export default ScrollSnapContainer;
