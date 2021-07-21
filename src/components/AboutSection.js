import React from "react";
import home1 from "../img/home1.png";
//importing framer Motion
import { motion } from "framer-motion";

//import About,description and image and hide from the styles so for the sake of the ease

import { Hide, About, Description, Image } from "../styles";
import { fade, pageAnimation, titleAnim, photoAnim } from "../animation";

import Wave from "./Wave";
function AboutSection() {
  // const titleAnim = {
  //   hidden: { opacity: 0 },
  //   show: { opacity: 1, transition: { duration: 2 } },
  // };
  // const container = {
  //   hidden: { x: 100 },
  //   show: {
  //     x: 0,
  //     transition: { duration: 1, staggerChildren: 0.7, when: "afterChildren" },
  //   }, // can also use ease out which removes the jerk operation
  // };
  return (
    <About>
      <Description>
        <motion.div>
          <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          <Hide>
            <motion.h2 variants={titleAnim}>
              Your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>True.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for photographt and videoagraphy and anything we will help
          youe get your goal.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="Guy with a camera" />
      </Image>
      <Wave />
    </About>
  );
}
//styled componenet

export default AboutSection;
