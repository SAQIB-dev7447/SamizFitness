"use client";
import { motion } from "framer-motion";

export default function FadeIn({ 
  children, 
  delay = 0, 
  className = "",
  direction = "up"
}: { 
  children: React.ReactNode, 
  delay?: number, 
  className?: string,
  direction?: "up" | "left" | "right" | "none"
}) {
  const getInitialY = () => {
    if (direction === "up") return 40;
    return 0;
  }
  
  const getInitialX = () => {
    if (direction === "left") return -80;
    if (direction === "right") return 80;
    return 0;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: getInitialY(), x: getInitialX() }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
