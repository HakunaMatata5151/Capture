import React from "react";
import home1 from "../img/home1.png";
//import styled components
import styled from "styled-components";

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
const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;
const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;

const Image = styled.div`
  flex: 1rem;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;
export default AboutSection;
