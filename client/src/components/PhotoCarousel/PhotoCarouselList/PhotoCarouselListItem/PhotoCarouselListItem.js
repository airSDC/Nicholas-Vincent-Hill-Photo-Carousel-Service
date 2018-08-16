import React, { Component } from 'react';

const PhotoCarouselListItem = (props) => {
  const handleCarouselClick = (e) => {
    props.changePhoto(e.currentTarget, props.id);
  };

  return (
    <li className="carousel-list-item action-link" onClick={handleCarouselClick}>
      <img src={props.photo.url} alt="pic" />
    </li>
  );
};

export default PhotoCarouselListItem;
