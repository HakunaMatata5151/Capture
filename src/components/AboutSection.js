import React from "react";
import home1 from "../img/home1.png";
function AboutSection() {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>we work to made</h2>
          </div>
          <div className="hide">
            <h2>
              Your <span>dreams</span> come
            </h2>
          </div>
          <div className="hide">
            <h2>True.</h2>
          </div>
        </div>
        <p>
          Contact us for any photgraphy videography ideas that u have. We have
          professionals with amazing skills.
        </p>
      </div>
      <div className="img">
        <img src={home1} alt="Guy with a camera" />
      </div>
    </div>
  );
}

export default AboutSection;
