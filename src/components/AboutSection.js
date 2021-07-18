import React from "react";
import home1 from "../img/home1.png";
//import styled
import styled from "styled-components";
//import About,description and image and hide from the styles so for the sake of the ease

import { Hide, About, Description, Image } from "../styles";

function AboutSection() {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>we work to made</h2>
          </Hide>
          <Hide>
            <h2>
              Your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>True.</h2>
          </Hide>
        </div>
        <p>
          Contact us for any photgraphy videography ideas that u have. We have
          professionals with amazing skills.
        </p>
      </Description>
      <Image>
        <img src={home1} alt="Guy with a camera" />
      </Image>
    </About>
  );
}
//styled componenet

export default AboutSection;
