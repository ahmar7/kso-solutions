import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
      <div className="main-banner">
        <div className="banner-bg">
          <div className="bg-overlay">
            <h1>Welcome</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
              earum. adipisicing elit. Veniam, earum
            </p>
            <div className="btn-flex">
                <a className="btn-royalblue">Learn More</a>
                <a className="white-btn">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Banner;
