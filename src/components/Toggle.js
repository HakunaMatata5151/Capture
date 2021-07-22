import React, { useState } from "react";
import { motion } from "framer-motion";
const Toggle = ({ children, title }) => {
  const [toggle, settoggle] = useState(true);

  return (
    <motion.div layout className="question" onClick={() => settoggle(!toggle)}>
      <motion.h4 layout>{title}</motion.h4>
      {toggle ? children : ""}
      <div className="faq-line"></div>
    </motion.div>
  );
};

export default Toggle;
