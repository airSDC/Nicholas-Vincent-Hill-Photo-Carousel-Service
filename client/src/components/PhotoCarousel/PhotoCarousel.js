import React, { Component } from 'react';
import classnames from 'classnames';
// import './PhotoCarousel.css';

import PhotoCarouselDisplay from './PhotoCarouselDisplay';
import PhotoCarouselList from './PhotoCarouselList';

// var classes =

class PhotoCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoList: [],
      currentPhoto: {}
    };

    this.handleHideCarousel = this.handleHideCarousel.bind(this);
  }

  changePhoto() {}

  handleHideCarousel() {
    if (!this.props.isHidden) {
      this.props.hideCarousel();
    }
  }

  render() {
    var classes = classnames('photo-gallery-carousel', {
      hide: this.props.isHidden
    });

    return (
      <div className={classes} onClick={this.handleHideCarousel}>
        <PhotoCarouselDisplay photo={this.state.currentPhoto} />
        <PhotoCarouselList photoList={this.state.photoList} />
      </div>
    );
  }
}

export default PhotoCarousel;
