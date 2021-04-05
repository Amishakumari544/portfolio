import React from "react";
import { motion } from "framer-motion";

const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -40],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5,
      },
      y: {
        yoyo: Infinity,
        duration: 0.24,
        ease: "easeOut",
      },
    },
  },
};
function Loader() {
  return (
    <div>
      <motion.div
        className="loader"
        variants={loaderVariants}
        animate="animationOne"
      ></motion.div>
    </div>
  );
}

export default Loader;
