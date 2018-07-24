import React, { Component } from 'react';
import './PhotoCarouselList.css';
import classnames from 'classnames';

// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import PhotoCarouselListItem from './PhotoCarouselListItem';

import PhotoCarouselListHeader from './PhotoCarouselListHeader';

class PhotoCarouselList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isListHidden: false
    };

    this.toggleCarouselList = this.toggleCarouselList.bind(this);
  }

  toggleCarouselList() {
    this.setState({ isListHidden: !this.state.isListHidden });
  }

  render() {
    const carouselListClasses = classnames('carousel-list', 'fx', {
      hide: this.state.isListHidden
    });
    const photo = this.props.photos[this.props.photoIdx] || {};
    return (
      <div className="carousel-list-container">
        <PhotoCarouselListHeader
          photoIdx={this.props.photoIdx}
          photo={photo}
          photosCount={this.props.photos.length}
          isListHidden={this.state.isListHidden}
          toggleCarouselList={this.toggleCarouselList}
        />
        <ul className={carouselListClasses}>
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
