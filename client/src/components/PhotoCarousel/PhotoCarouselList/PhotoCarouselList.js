import React, { Component } from 'react';
import './PhotoCarouselList.css';

import PhotoCarouselListItem from './PhotoCarouselListItem';

import PhotoCarouselListHeader from './PhotoCarouselListHeader';

class PhotoCarouselList extends Component {
  render() {
    const photo = this.props.photos[this.props.photoIdx] || {};
    return (
      <div className="carousel-list-container">
        <PhotoCarouselListHeader
          photoIdx={this.props.photoIdx}
          photo={photo}
          photosCount={this.props.photos.length}
          islistHidden={this.props.islistHidden}
        />
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
      </div>
    );
  }
}

export default PhotoCarouselList;
