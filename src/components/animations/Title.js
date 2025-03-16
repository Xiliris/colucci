"use client";
import { motion } from "framer-motion";

const titleVariant = {
  initial: {
    opacity: 0,
    filter: "blur(50px)",
  },
  animate: ({ time }) => ({
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      duration: 0.7,
      delay: time + 0.2,
    },
  }),
};

export default function Title({ children }) {
  return (
    <>
      <Bold>YOUR CAR</Bold> <Default>IS</Default> <br />
      <Default>ALWAYS IN</Default> <Bold>GREAT</Bold> <br />
      <Bold>HANDS</Bold> <Default>WITH US</Default>
    </>
  );
}

function Bold({ children }) {
  return (
    <motion.span
      variants={titleVariant}
      initial="initial"
      whileInView="animate"
      custom={{ time: 0.3 }}
      viewport={{ once: true, amount: 0.5 }}
      className="text-main-emphasis"
    >
      {children}
    </motion.span>
  );
}
function Default({ children }) {
  return (
    <motion.span
      variants={titleVariant}
      initial="initial"
      whileInView="animate"
      custom={{ time: 0.2 }}
      viewport={{ once: true, amount: 0.5 }}
      className="text-main-primary"
    >
      {children}
    </motion.span>
  );
}
