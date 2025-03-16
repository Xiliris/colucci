"use client";
import { motion, useScroll } from "framer-motion";

export default function Scroll() {
  const { scrollYProgress } = useScroll();
  return (
    <div className="scroll">
      <motion.div
        className="scroll__bar"
        style={{ scaleY: scrollYProgress }}
      ></motion.div>
    </div>
  );
}
