import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import Photo from '../Photo';
import Footer from '../Footer';

class Applet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: 'world'
    };
  }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
      <React.Fragment>
        <Photo />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Applet;
