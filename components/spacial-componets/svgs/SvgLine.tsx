"use client";
import { motion } from "framer-motion";

export function StartLine(props: React.SVGProps<SVGAElement>) {
  return (
    <svg
      width="600"
      height="200"
      viewBox="0 0 600 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <motion.linearGradient
          id="line-one-gradient"
          gradientUnits="userSpaceOnUse"
          initial={{
            x1: "0%",
            x2: "10%",
          }}
          animate={{
            x1: "90%",
            x2: "100%",
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
        >
          <stop stopColor="rgba(59,130,246,0)" />
          <stop offset="0.4" stopColor="#3B82F6" />
          <stop offset="0.5" stopColor="#60A5FA" />
          <stop offset="0.6" stopColor="#3B82F6" />
          <stop offset="1" stopColor="rgba(59,130,246,0)" />
        </motion.linearGradient>
      </defs>

      {/* Base Line */}
      <path
        d="M50 100 L550 100"
        stroke="rgba(255,255,255,0.15)"
        strokeWidth="2"
      />

      {/* Animated Line */}
      <path
        d="M50 100 L550 100"
        stroke="url(#line-one-gradient)"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Nodes */}
      <circle cx="50" cy="100" r="8" fill="#3B82F6" />
      <circle cx="300" cy="100" r="8" fill="#3B82F6" />
      <circle cx="550" cy="100" r="8" fill="#3B82F6" />
    </svg>
  );
}
