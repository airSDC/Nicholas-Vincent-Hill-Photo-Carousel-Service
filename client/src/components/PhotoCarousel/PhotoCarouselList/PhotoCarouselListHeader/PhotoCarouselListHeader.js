import React, { Component } from 'react';
import './PhotoCarouselListHeader.css';
import Fa from 'react-fontawesome';

class PhotoCarouselListHeader extends Component {
  render() {
    const carouselListHideTitle = this.props.isListHidden ? 'Show' : 'Hide';
    const carouselListHideIconTitle = this.props.isListHidden ? 'up' : 'down';
    return (
      <div className="carousel-list-header fx">
        <div className="carousel-list-header-item">
          <h3>
            {this.props.photoIdx}/{this.props.photosCount}:{' '}
            {this.props.photo.description}
          </h3>
        </div>
        <div
          className="carousel-list-head-item"
          onClick={this.props.toggleCarouselList}
        >
          <h3>
            {carouselListHideTitle} photo list{' '}
            <Fa name={`sort-${carouselListHideIconTitle}`} />
          </h3>
        </div>
      </div>
    );
  }
}

export default PhotoCarouselListHeader;
