"use client";
import { motion } from "framer-motion";

export default function Fade({ children, className, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: { type: "linear", duration: 0.5, delay: delay ? delay : 0 },
      }}
      viewport={{ once: true, amount: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
