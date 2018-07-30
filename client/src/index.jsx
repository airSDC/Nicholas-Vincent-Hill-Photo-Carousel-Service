import React from 'react';
import ReactDOM from 'react-dom';
import Applet from './components/Applet/';

import Footer from './components/Footer';

// Component level styling
import './styles/main.css';

ReactDOM.render(<Footer />, document.getElementById('footer'));

ReactDOM.render(<Applet />, document.getElementById('photo'));
