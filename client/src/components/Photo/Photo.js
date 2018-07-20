import React, { Component } from 'react';

import PhotoDisplay from '../PhotoDisplay';
import PhotoCarousel from '../PhotoCarousel';

class Photo extends Component {
  constructor(props) {
    super();
    this.state = {
      photos: [],
      photo: '',
      showCarousel: false
    };
  }

  componentWillMount() {
    var room = window.location.pathname;
    fetch('/api' + room + '/photos')
      .then(res => {
        return res.json();
      })
      .then(photos => {
        console.log(photos);
        this.setState({
          photos,
          photo: photos[0]
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  changePhoto() {}
  toggleCarousel() {}

  render() {
    return (
      <div className="photo-gallery">
        <PhotoDisplay photo={this.state.photo} />
        <PhotoCarousel
          photos={this.state.photos}
          hide={!this.state.showCarousel}
        />
      </div>
    );
  }
}

export default Photo;
