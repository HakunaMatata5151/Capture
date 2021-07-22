import React from "react";
import styled from "styled-components";
//Import icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
//importing styled components
import { Hide, About, Description, Image } from "../styles";
//TEST
import { scrollReveal } from "../animation";
import useScroll from "./useScroll";

function ServicesSection() {
  const [element, controls] = useScroll();
  const hidden = scrollReveal.hidden;
  return (
    <Services
      variants={scrollReveal}
      initial={hidden}
      ref={element}
      animate={controls}
    >
      <Description>
        <h2>
          High <span>quaity</span>services
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="A clock" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>

          <Card>
            <div className="icon">
              <img src={teamwork} alt="A teamwork" />
              <h3>TeamWork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>

          <Card>
            <div className="icon">
              <img src={diaphragm} alt="A diaphragm" />
              <h3>Diaphgram</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>

          <Card>
            <div className="icon">
              <img src={money} alt="A money" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt="" />
      </Image>
    </Services>
  );
}
const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;

export default ServicesSection;
