import React from 'react';
import './Header.css'
import Logo from '../assets/img/logo-web.jpg'
const Header = () => {
    return (
      <div className="main-header">
        <div className="info-nav">
          <div className="flex-info main-width">
            <div className="right-info">
              <div className="flex-row">
                <i class="fa-sharp fa-solid fa-phone"></i>
                <p className="info-line">802.867.5309</p>
              </div>
              <div className="flex-row">
                <i class="fa-solid fa-envelope"></i>
                <p className="info-line">info@kso-solutions.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="main-nav">
          <div className="main-width">
            <div className="nav-logo">
              <a href="#">
                
                <img src={Logo} alt="" />
              </a>
            </div>
            <div className="header-navigation"></div>
          </div>
        </div>
      </div>
    );
}

export default Header;
