import React, { Component } from 'react';
import './Photo.css';

import PhotoDisplay from '../PhotoDisplay';
import PhotoList from '../PhotoList';

class Photo extends Component {
  constructor(props) {
    super();
    this.state = {
      photos: [],
      photo: ''
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

  render() {
    return (
      <div className="photo-gallery">
        <PhotoDisplay photo={this.state.photo} />
        <PhotoList photos={this.state.photos} />
      </div>
    );
  }
}

export default Photo;
