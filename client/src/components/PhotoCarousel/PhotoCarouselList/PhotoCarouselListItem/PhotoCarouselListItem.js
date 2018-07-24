import React, { Component } from 'react';

const PhotoCarouselListItem = props => {
  const handleCarouselClick = e => {
    props.changePhoto(props.id);
  };

  return (
    <div className="carousel-list-item" onClick={handleCarouselClick}>
      <img src={'/assests/room2.jpg' || props.photo.photo_url} alt="pic" />
    </div>
  );
};

export default PhotoCarouselListItem;
