import { useInView } from "react-intersection-observer"; // useInView threhold equals to the percentile that it shows

import React from "react";
import { useAnimation } from "framer-motion";

const useScroll = () => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.5 });
  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }
  return [element, controls];
};

export default useScroll;
