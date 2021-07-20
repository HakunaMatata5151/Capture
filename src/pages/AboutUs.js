import React from "react";
//Page component
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";
//Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
function AboutUs() {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      animate="show"
      initial="hidden"
    >
      <AboutSection />
      <ServicesSection />
      <FaqSection />
    </motion.div>
  );
}

export default AboutUs;
