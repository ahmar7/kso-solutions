import React from "react";
import "./Services.css";
import Sectionheading from "./SectionHeading";
import { ServiceData } from "../Data/ServiceData";
const Services = () => {
  return (
    <div id="ourservices" className="services-main alter-bg">
      <div className="main-width">
        <Sectionheading
          titleBefore="Our"
          titleAfter="Services"
          para="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Exercitationem et nostrum quae nulla aperiam quas laudantium
          perspiciatis, commodi, eum eligendi iusto voluptates natus provident"
        />
        <div className="service-cards">
          {ServiceData.map((item, key) => (
            <div key={key} className="inner-card">
              <div className="card-data">
                <div className="card-icon">
                  <i className={item.icon}></i>
                </div>

                <div className="card-desc">
                  <h3>{item.title}</h3>
                  <p>
                    {item.para}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
