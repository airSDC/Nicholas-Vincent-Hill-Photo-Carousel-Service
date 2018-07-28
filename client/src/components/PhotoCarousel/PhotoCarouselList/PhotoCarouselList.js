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
    this.handleChangePhoto = this.handleChangePhoto.bind(this);

    // this._carouselList = React.createRef();
  }

  get carouselList() {
    return this.props.carouselList.current;
  }

  animationAction() {
    return this.state.isListHidden ? 'closing' : 'opening';
  }

  componentDidMount() {
    this.carouselList.addEventListener('animationend', () => {
      const actionName = this.animationAction();
      this.carouselList.classList.remove(actionName);
    });

    // console.log(el.scrollLeft);
  }

  toggleCarouselList() {
    this.setState({
      isListHidden: !this.state.isListHidden
    });
  }

  handleChangePhoto(target, id) {
    this.props.changePhoto(id);
  }

  render() {
    const carouselListClasses = classnames(
      'carousel-list',
      'fx',
      this.animationAction(),
      {
        'carousel-list-hide': this.state.isListHidden
      }
    );
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
        <div className="carousel-list-animation-container">
          <ul className={carouselListClasses} ref={this.props.carouselList}>
            {this.props.photos.map((photo, idx) => (
              <PhotoCarouselListItem
                photo={photo}
                id={idx}
                key={idx}
                changePhoto={this.handleChangePhoto}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default PhotoCarouselList;
