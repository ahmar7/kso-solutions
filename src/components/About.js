import React from "react";
import "./About.css";
import AboutImg from "../assets/img/about.webp";
import Sectionheading from "./SectionHeading";
const About = () => {
  return (
    <div id="aboutus" className="about-main pb-5">
      <div className="main-width">
        <Sectionheading
          titleBefore="Our"
          titleAfter="Company"
          para="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Exercitationem et nostrum quae nulla aperiam quas laudantium
          perspiciatis, commodi, eum eligendi iusto voluptates natus provident"
        />
        <div className="block-data">
          <div className="flex-block">
            <div className="about-inner">
              <img className="about-img" src={AboutImg} alt="" />
            </div>
            <div className="about-inner">
              <h3 className="about-head">About us</h3>
              <p className="para-mar">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                iusto architecto, nihil harum iste blanditiis quia natus hic
                neque repellendus. Recusandae illo,
              </p>
              <p className="para-mar">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                iusto architecto, nihil harum iste blanditiis quia natus hic
                neque repellendus. Recusandae illo,
              </p>
              <p className="para-mar">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                iusto architecto, nihil harum iste blanditiis quia natus hic
                neque repellendus. Recusandae illo
              </p>
              <a href="#" className="link-btn btn-royalblue">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
