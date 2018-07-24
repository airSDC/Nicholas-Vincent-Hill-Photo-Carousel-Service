import React, { Component } from 'react';
import classnames from 'classnames';
import Fa from 'react-fontawesome';
// import './PhotoCarousel.css';

import PhotoCarouselDisplay from './PhotoCarouselDisplay';
import PhotoCarouselList from './PhotoCarouselList';
import PhotoCarouselSlider from './PhotoCarouselSlider';

class PhotoCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };

    this.handleHideCarousel = this.handleHideCarousel.bind(this);
    this.changePhoto = this.changePhoto.bind(this);
    this.handleSlider = this.handleSlider.bind(this);
  }

  changePhoto(newIndex) {
    if (newIndex >= this.props.photos.length) {
      newIndex = 0;
    }

    if (newIndex < 0) {
      newIndex = this.props.photos.length;
    }

    this.setState({
      index: newIndex
    });
  }

  handleSlider(changeBy) {
    this.changePhoto(this.state.index + changeBy);
  }

  handleHideCarousel() {
    if (!this.props.isHidden) {
      this.props.hideCarousel();
    }
  }

  render() {
    var classes = classnames('photo-gallery-carousel', 'fx', {
      hide: this.props.isHidden
    });
    const photo = this.props.photos[this.state.index] || {};
    return (
      <div className={classes}>
        <div className="photo-gallery-carousel-top fx">
          <Fa
            className="action-link"
            name="times"
            size="2x"
            onClick={this.handleHideCarousel}
          />
        </div>

        <div className="carousel fx">
          <PhotoCarouselSlider type="left" handleSlider={this.handleSlider} />
          <div className="carousel-main">
            <PhotoCarouselDisplay photo={photo} />
            <div className="carousel-list-container">
              <div className="carousel-list-head fx">
                <div className="carousel-list-head-item">
                  <h3>
                    {this.state.index}/{this.props.photos.length}:{' '}
                    {photo.description}
                  </h3>
                </div>
                <div className="carousel-list-head-item">
                  <h3 />
                </div>
              </div>
              <PhotoCarouselList
                photos={this.props.photos}
                changePhoto={this.changePhoto}
              />
            </div>
          </div>
          <PhotoCarouselSlider type="right" handleSlider={this.handleSlider} />
        </div>
      </div>
    );
  }
}

export default PhotoCarousel;
