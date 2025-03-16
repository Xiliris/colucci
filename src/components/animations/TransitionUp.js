"use client";
import { motion } from "framer-motion";

export default function TransitionUp({ children, className, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { type: "linear", duration: 0.2, delay: delay ? delay : 0 },
      }}
      viewport={{ once: true, amount: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
