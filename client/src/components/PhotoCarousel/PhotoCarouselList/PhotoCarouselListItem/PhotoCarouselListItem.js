import React, { Component } from 'react';

const PhotoCarouselListItem = props => {
  const handleCarouselClick = e => {
    props.changePhoto(props.id);
  };

  return (
    <li
      className="carousel-list-item action-link"
      onClick={handleCarouselClick}
    >
      <img src={props.photo.photo_url} alt="pic" />
    </li>
  );
};

export default PhotoCarouselListItem;
