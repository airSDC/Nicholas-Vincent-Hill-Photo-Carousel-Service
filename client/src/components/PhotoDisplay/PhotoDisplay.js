import React, { Component } from 'react';

const PhotoDisplay = props => {
  if (!props.photo) {
    return <div>Loading....</div>;
  }
  return (
    <div className="photo-main-display">
      <img src={props.photo.photo_url + '.jpg'} alt="main photo" />
      <div className="actions fx">
        <div className="actions-top fx">
          <button className="btn">Share</button>
          <button className="btn">Save</button>
        </div>
        <div className="actions-bottom">
          <button className="btn" onClick={props.showCarousel}>
            View Photo
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhotoDisplay;
