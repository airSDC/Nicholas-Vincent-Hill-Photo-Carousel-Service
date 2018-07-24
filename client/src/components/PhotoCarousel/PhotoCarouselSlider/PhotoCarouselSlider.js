import React, { Component } from 'react';
import classnames from 'classnames';
import Fa from 'react-fontawesome';

const PhotoCarouselSlider = props => {
  const isRight = props.type === 'right';
  const classes = classnames('carousel-slider', {
    right: isRight
  });
  return (
    <div className={classes}>
      <Fa
        className="action-link"
        name={`arrow-${props.type}`}
        size="2x"
        onClick={() => props.handleSlider(isRight ? 1 : -1)}
      />
    </div>
  );
};

export default PhotoCarouselSlider;
