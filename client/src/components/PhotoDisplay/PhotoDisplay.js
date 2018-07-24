import React, { Component } from 'react';

const PhotoDisplay = props => {
  if (!props.photo) {
    return <div>Loading....</div>;
  }
  return (
    <div className="photo-gallery-display" onClick={props.showCarousel}>
      <img src={props.photo.photo_url} alt="main photo" />
      <div className="gallery-display fx">
        <div className="gallery-display-top fx">
          <button className="btn">Share</button>
          <button className="btn">Save</button>
        </div>
        <div className="gallery-display-bottom">
          <button className="btn" onClick={props.showCarousel}>
            View Photo
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhotoDisplay;
