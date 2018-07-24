import React, { Component } from 'react';
import './PhotoCarouselDisplay.css';

class PhotoCarouselDisplay extends Component {
  // constructor(props){
  // super();
  // this.state = {};
  // }

  render() {
    return (
      <div className="carousel-img">
        <img src={this.props.photo.photo_url + '.jpg'} alt="" />
      </div>
    );
  }
}

export default PhotoCarouselDisplay;
