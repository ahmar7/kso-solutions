import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-main">
      <div className="main-width footer-inner">
        <div className="footer-flex">
          <div className="  col-lg-4 about-content col-sm-6 col-md-6 mb-5">
            <div className="footer-head">
              <h3>About</h3>
            </div>
            <div className="footer-desc">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates eos expedita dolore praesentium, vitae dolorem
                placeat rerum dolorum totam alias corrupti sapiente velit iusto
                incidunt accusamus doloremque maiores modi illum.
              </p>
              <button className="link-btn btn-royalblue">Learn More</button>
            </div>
          </div>
          <div className="col-sm-6 footer-links col-md-6 col-lg-2 mb-5">
            <div className="footer-head">
              <h3>Quick Links</h3>
            </div>
            <div className="footer-nav">
              <a href="#">Home</a>
              <a href="#aboutus">About</a>
              <a href="#ourservices">Services</a>
              <a href="#ourteam">Team</a>
              <a href="#contactus">Contact</a>
            </div>
          </div>
          {/* <div className="col-sm-6 footer-links col-md-6 col-lg-3 mb-5">
            <div className="footer-head">
              <h3>Latest News</h3>
            </div>
            <div className="footer-nav">
              <a>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</a>
              <a>dolor laborum natus voluptates ullam qui excepturi cum</a>
              <a>
                Fuga ipsum inventore facere sint quis provident odit optio quasi
              </a>
            </div>
          </div> */}
          <div className="col-sm-6 footer-links col-md-6 col-lg-3 mb-5">
            <div className="footer-head">
              <h3>Contact Us</h3>
            </div>
            <div className="footer-nav">
              <a>Address: KSO Solutions Vermont, USA</a>
              <a>Phone: 802.867.5309</a>
              <a>Email: info@kso-solutions.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
