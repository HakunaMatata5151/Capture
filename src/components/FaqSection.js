import React, { useState } from "react";
import styled from "styled-components";
import { Hide, About, Description, Image } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import useScroll from "./useScroll";
import { scrollReveal } from "../animation";
function FaqSection() {
  const [element, controls] = useScroll();

  return (
    <Faq variants={scrollReveal} ref={element} animate={controls} initial="hidden">
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How do i Start?">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </Toggle>

        <Toggle title="Daily Sechedule">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </Toggle>

        <Toggle title="Different Payment Methods">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </Toggle>

        <Toggle title="What prduct do u offer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </Toggle>
      </AnimateSharedLayout>
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
