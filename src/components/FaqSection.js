import React from "react";
import styled from "styled-components";
import { Hide, About, Description, Image } from "../styles";
function FaqSection() {
  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <div className="question">
        <h4>How do i start?</h4>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      <div className="faq-line"></div>
      <div className="question">
        <h4>Daily Sechedule</h4>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      <div className="faq-line"></div>
      <div className="question">
        <h4>Different Payment Methods</h4>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      <div className="faq-line"></div>
      <div className="question">
        <h4>What prduct do u offer</h4>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
    </Faq>
  );
}
const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: ponter;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;
export default FaqSection;
