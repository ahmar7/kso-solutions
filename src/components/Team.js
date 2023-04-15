import React from "react";
import Sectionheading from "./SectionHeading";
import './Team.css'

import { TeamData } from "../Data/TeamData";
const Team = () => {
  return (
    <div id="ourteam" className="team-main mb-5">
      <div className="main-width">
        <Sectionheading
          titleBefore="Our"
          titleAfter="Team"
          para="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Exercitationem et nostrum quae nulla aperiam quas laudantium
          perspiciatis, commodi, eum eligendi iusto voluptates natus provident"
        />
        <div className="team-area">
          <div className="team-flex">
            {TeamData.map((item, key) => (
              <div key={key} className="team-member">
                <div className="img">
                  <img src={item.img} alt="" />
                </div>
                <h3 className="titleName text-left mt-4">{item.title}</h3>
                <h4 className="team-desc text-left">{item.desc}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
