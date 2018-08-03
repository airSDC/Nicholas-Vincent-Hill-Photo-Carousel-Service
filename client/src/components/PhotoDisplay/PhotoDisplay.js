import React, { Component } from "react";
import Fa from "react-fontawesome";

const PhotoDisplay = props => {
  if (!props.photo) {
    return <div>Loading....</div>;
  }
  return (
    <div className="photo-gallery-display" onClick={props.showCarousel}>
      <div className="image-wrapper">
        <img src={props.photo.photo_url} alt="main photo" />
      </div>

      <div className="gallery-display fx">
        <div className="gallery-display-top fx">
          <button className="btn">
            <Fa name="share" /> Share
          </button>
          <button className="btn">
            <Fa name="heart-o" /> Save
          </button>
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
