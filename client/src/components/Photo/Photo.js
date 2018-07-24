import React, { Component } from 'react';

import PhotoDisplay from '../PhotoDisplay';
import PhotoCarousel from '../PhotoCarousel';

class Photo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      photo: {},
      isCarouselHidden: true
    };

    this.showCarousel = this.showCarousel.bind(this);
    this.hideCarousel = this.hideCarousel.bind(this);
  }

  componentDidMount() {
    var room = window.location.pathname;
    fetch('/api' + room + '/photos')
      .then(res => {
        return res.json();
      })
      .then(({ results: photos }) => {
        this.setState({
          photos: photos,
          photo: photos[0]
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  showCarousel() {
    this.setState({ isCarouselHidden: false });
  }

  hideCarousel() {
    this.setState({ isCarouselHidden: true });
  }

  render() {
    return (
      <div className="photo-gallery">
        <PhotoDisplay
          photo={this.state.photo}
          showCarousel={this.showCarousel}
        />
        <PhotoCarousel
          photos={this.state.photos}
          isHidden={this.state.isCarouselHidden}
          hideCarousel={this.hideCarousel}
        />
      </div>
    );
  }
}

export default Photo;
