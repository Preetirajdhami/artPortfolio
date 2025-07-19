"use client"

import { motion } from "framer-motion"

interface BouncingDotsProps {
  size?: "sm" | "md" | "lg"
  variant?: "primary" | "text" | "subtle"
}

export function BouncingDots({ size = "md", variant = "primary" }: BouncingDotsProps) {
  const sizeClasses = {
    sm: "w-2 h-2",
    md: "w-3 h-3",
    lg: "w-4 h-4",
  }

  const containerClasses = {
    sm: "space-x-1",
    md: "space-x-2",
    lg: "space-x-3",
  }

  const colors = {
    primary: "#154930",
    text: "#3A4D39",
    subtle: "#15493080", // primary with opacity
  }

  return (
    <div className={`flex items-center justify-center ${containerClasses[size]}`}>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className={`${sizeClasses[size]} rounded-full`}
          style={{ backgroundColor: colors[variant] }}
          animate={{
            y: ["0%", "-50%", "0%"],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 0.8,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.15,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
