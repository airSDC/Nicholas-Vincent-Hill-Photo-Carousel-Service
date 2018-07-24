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
    this._carouselList = React.createRef();
  }

  get carouselList() {
    return this._carouselList.current;
  }

  animationAction() {
    return this.state.isListHidden ? 'closing' : 'opening';
  }

  componentDidMount() {
    // // console.log(this.carouselList);
    this.carouselList.addEventListener('animationend', () => {
      const actionName = this.animationAction();
      this.carouselList.classList.remove(actionName);
      console.log('animation is now done');
      // this.setState({ isListHidden: !this.state.isListHidden });
    });
  }

  toggleCarouselList() {
    // const isNowHidden = !this.state.isListHidden;
    // this.carouselList.classList.add(this.nextAnimationAction());
    this.setState({
      isListHidden: !this.state.isListHidden
    });
  }

  render() {
    console.log('list rerender');
    const carouselListClasses = classnames('carousel-list', 'fx', {
      hide: this.state.isListHidden,
      opening: !this.state.isListHidden,
      closing: this.state.isListHidden
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
        <div className="carousel-list-animation-container">
          <ul className={carouselListClasses} ref={this._carouselList}>
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
      </div>
    );
  }
}

export default PhotoCarouselList;
