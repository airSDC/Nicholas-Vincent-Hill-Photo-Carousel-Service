import React, { Component } from 'react';
import './PhotoCarouselList.css';

import PhotoCarouselListItem from './PhotoCarouselListItem';

class PhotoCarouselList extends Component {
  render() {
    return (
      <ul className="carousel-list fx">
        {this.props.photos.map((photo, idx) => (
          <PhotoCarouselListItem
            photo={photo}
            id={idx}
            key={idx}
            changePhoto={this.props.changePhoto}
          />
        ))}
      </ul>
    );
  }
}

export default PhotoCarouselList;
