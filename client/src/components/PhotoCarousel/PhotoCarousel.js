import React, { Component } from 'react';
import classnames from 'classnames';
import Fa from 'react-fontawesome';

import PhotoCarouselDisplay from './PhotoCarouselDisplay';
import PhotoCarouselList from './PhotoCarouselList';
import PhotoCarouselSlider from './PhotoCarouselSlider';

const WIDTH_OF_LIST_ITEM = 140;
const carouselPadding = 0.02;

const scrollTime = 1000;
const LEFT_ARROW_KEY_CODE = 37;
const RIGHT_ARROW_KEY_CODE = 39;

// requestAnimationFrame cross browser
var requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  (() => {});

var cancelAnimationFrame =
  window.cancelAnimationFrame || window.mozCancelAnimationFrame || (() => {});

class PhotoCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };

    this.handleHideCarousel = this.handleHideCarousel.bind(this);
    this.changePhoto = this.changePhoto.bind(this);
    this.handleSlider = this.handleSlider.bind(this);

    this._carouselList = React.createRef();
    this.animationId = null;
  }

  componentDidMount() {
    document.addEventListener('keydown', e => {
      if (this.props.isHidden) {
        return;
      }
      console.log(e.keyCode);
      var direction =
        (e.keyCode === RIGHT_ARROW_KEY_CODE && 1) ||
        (e.keyCode === LEFT_ARROW_KEY_CODE && -1) ||
        false;

      direction && this.handleSlider(direction);
    });
  }

  get carouselList() {
    return this._carouselList.current;
  }

  handleSlider(changeBy) {
    this.changePhoto(this.state.index + changeBy);
  }

  handleHideCarousel() {
    if (!this.props.isHidden) {
      this.props.hideCarousel();
    }
  }

  changePhoto(newIndex, opts) {
    if (newIndex >= this.props.photos.length) {
      newIndex = 0;
    }

    if (newIndex < 0) {
      newIndex = this.props.photos.length - 1;
    }

    this.setState(
      {
        index: newIndex
      },
      () => {
        this.animate(this.carouselList.children[newIndex].offsetLeft);
      }
    );
  }

  getCenterOfScreen() {
    const screenWidth = window.innerWidth - window.innerWidth * carouselPadding;
    const halfOfListItem = WIDTH_OF_LIST_ITEM / 2;

    return (screenWidth - halfOfListItem) / 2;
  }

  animate(to) {
    const centerOfScreen = this.getCenterOfScreen();
    const lastScrollPosition = this.carouselList.scrollLeft;

    const centerPositionForItem = Math.floor(to - centerOfScreen);

    const scrollBy = Math.floor(
      (centerPositionForItem - lastScrollPosition) / 10
    );

    this.slide(centerPositionForItem, scrollBy);
  }

  clearAnimation() {
    return cancelAnimationFrame(this.animationId);
  }

  slide(to, scrollBy) {
    const isGoingDown = scrollBy < 0;
    let lastPosition = null;

    this.clearAnimation();

    const step = () => {
      const newScrollValue = this.carouselList.scrollLeft + scrollBy;
      const maxScrollLeft =
        this.carouselList.scrollWidth - this.carouselList.clientWidth;

      let hasInvalidNewPosition =
        (!isGoingDown && newScrollValue >= to) ||
        (isGoingDown && newScrollValue <= to);

      if (
        newScrollValue < 0 ||
        newScrollValue >= this.getCenterOfScreen() * 2
      ) {
        this.carouselList.scrollLeft =
          newScrollValue < 0 ? 0 : window.innerWidth;

        hasInvalidNewPosition = true;
      }

      if (hasInvalidNewPosition || newScrollValue >= maxScrollLeft) {
        this.carouselList.scrollLeft = to;
        this.clearAnimation();
        return;
      }

      this.carouselList.scrollLeft = newScrollValue;

      lastPosition = this.carouselList.scrollLeft;
      requestAnimationFrame(step);
    };

    this.animationId = requestAnimationFrame(step);
  }

  render() {
    var classes = classnames('photo-gallery-carousel', 'fx', {
      hide: this.props.isHidden
    });
    const photo = this.props.photos[this.state.index] || {};

    let color = ['red', 'blue', 'green'];

    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
    }

    return (
      <div className={classes} style={{ top: window.scrollY }}>
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
          </div>
          <PhotoCarouselSlider type="right" handleSlider={this.handleSlider} />
        </div>
        <PhotoCarouselList
          carouselList={this._carouselList}
          photoIdx={this.state.index}
          photos={this.props.photos}
          changePhoto={this.changePhoto}
        />
      </div>
    );
  }
}

export default PhotoCarousel;
