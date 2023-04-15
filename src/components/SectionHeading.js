import React from "react";
import "./SectionHeading.css";
const Sectionheading = (props) => {
  return ( 
      <div className="heading-block  pt-5 pb-5">
        <h1>
          <span className="royalblue">{props.titleBefore}</span> {props.titleAfter}
        </h1>
        <p>
          {props.para}
        </p>
      </div>
   
  );
};

export default Sectionheading;
