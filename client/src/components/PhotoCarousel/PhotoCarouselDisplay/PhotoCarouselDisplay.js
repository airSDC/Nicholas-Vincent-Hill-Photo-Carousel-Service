import React, { Component } from 'react';

class PhotoCarouselDisplay extends Component {
  render() {
    return (
      <div className="carousel-img">
        <img src={this.props.photo.url} alt="" />
      </div>
    );
  }
}

export default PhotoCarouselDisplay;
