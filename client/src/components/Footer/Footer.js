import React, { Component } from 'react';
import Fa from 'react-fontawesome';

class Footer extends Component {
  render() {
    return (
      <footer className="airfec-section">
        <div className="container">
          <section className="footer-contents fx">
            <div className="footer-column">
              <h3 className="footer-column-header">Airbnb</h3>
              <ul>
                <li className="footer-column-item">
                  <a href="index.js" className="action-link">
                    Careers
                  </a>
                </li>
                <li className="footer-column-item">
                  <a href="#" className="action-link">
                    Press
                  </a>
                </li>
                <li className="footer-column-item">
                  <a href="#" className="action-link">
                    Policies
                  </a>
                </li>
                <li className="footer-column-item">
                  <a href="#" className="action-link">
                    Help
                  </a>
                </li>
                <li className="footer-column-item">
                  <a href="#" className="action-link">
                    Diversity & Belonging
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-column-header">Discover</h3>
              <ul>
                <li className="footer-column-item">
                  <a href="#" className="action-link">
                    Trust & Safety
                  </a>
                </li>
                <li className="footer-column-item">
                  <a href="#" className="action-link">
                    Invite Friends
                  </a>
                </li>
                <li className="footer-column-item">
                  <a href="#" className="action-link">
                    Gift Cards
                  </a>
                </li>
                <li className="footer-column-item">
                  <a href="#" className="action-link">
                    Airbnb Citizen
                  </a>
                </li>
                <li className="footer-column-item">
                  <a href="#" className="action-link">
                    Business Travel
                  </a>
                </li>
                <li className="footer-column-item">
                  <a href="#" className="action-link">
                    Guidebooks
                  </a>
                </li>
                <li className="footer-column-item">
                  <a href="#" className="action-link">
                    Airbnbmag
                  </a>
                </li>
                <li className="footer-column-item">
                  <a href="#" className="action-link">
                    Business Travel
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-column-header">Hosting</h3>
              <ul>
                <li className="footer-column-item">
                  <a href="#" className="action-link">
                    Why Host
                  </a>
                </li>
                <li className="footer-column-item">
                  <a href="#" className="action-link">
                    Refer Hosts
                  </a>
                </li>
                <li className="footer-column-item">
                  <a href="#" className="action-link">
                    Hospitality
                  </a>
                </li>
                <li className="footer-column-item">
                  <a href="#" className="action-link">
                    Responsible Hosting
                  </a>
                </li>
                <li className="footer-column-item">
                  <a href="#" className="action-link">
                    Community Center
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-column-header">
                <a href="#" className="action-link">
                  <Fa name="facebook" className="social-icon" />
                </a>
                <a href="#" className="action-link">
                  <Fa name="twitter" className="social-icon" />
                </a>
                <a href="#" className="action-link">
                  <Fa name="instagram" className="social-icon" />
                </a>
              </h3>
              <ul>
                <li className="footer-column-item">
                  <a href="#" className="action-link">
                    Terms
                  </a>
                </li>
                <li className="footer-column-item">
                  <a href="#" className="action-link">
                    Privacy
                  </a>
                </li>
                <li className="footer-column-item">
                  <a href="#" className="action-link">
                    Site Map
                  </a>
                </li>
              </ul>
            </div>
          </section>
          <section className="footer-sign airfec-section fx">
            <div className="footer-sign-item">© AirFec, Inc.</div>
            <div className="footer-sign-item">
              <span className="btn">
                English <Fa name="angle-down" />
              </span>
              <span className="btn">
                USD <Fa name="angle-down" />
              </span>
            </div>
          </section>
        </div>
      </footer>
    );
  }
}

export default Footer;
