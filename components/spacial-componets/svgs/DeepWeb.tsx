"use client";

import { motion } from "framer-motion";

export default function DeepWebIllustration() {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
      <svg
        viewBox="0 0 800 500"
        className="absolute inset-0 w-full h-full"
      >
        <defs>
          <radialGradient id="coreGlow">
            <stop offset="0%" stopColor="#60A5FA" stopOpacity="1" />
            <stop offset="100%" stopColor="#60A5FA" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="dataFlow">
            <stop offset="0%" stopColor="#2563EB" stopOpacity="0" />
            <stop offset="50%" stopColor="#60A5FA" stopOpacity="1" />
            <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background Rings */}
        {[120, 180, 250].map((size, i) => (
          <motion.circle
            key={i}
            cx="400"
            cy="250"
            r={size}
            fill="none"
            stroke="rgba(59,130,246,0.15)"
            strokeWidth="1"
            animate={{ rotate: 360 }}
            transition={{
              duration: 50 + i * 20,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              transformOrigin: "400px 250px",
            }}
          />
        ))}

        {/* Core Glow */}
        <circle
          cx="400"
          cy="250"
          r="90"
          fill="url(#coreGlow)"
          filter="url(#glow)"
        />

        {/* Orbit Nodes */}
        {[0, 60, 120, 180, 240, 300].map((deg, i) => {
          const r = 180;
          const x = 400 + r * Math.cos((deg * Math.PI) / 180);
          const y = 250 + r * Math.sin((deg * Math.PI) / 180);

          return (
            <g key={i}>
              <line
                x1="400"
                y1="250"
                x2={x}
                y2={y}
                stroke="rgba(96,165,250,0.25)"
              />

              <motion.circle
                cx={x}
                cy={y}
                r="10"
                fill="#60A5FA"
                filter="url(#glow)"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.4,
                }}
              />
            </g>
          );
        })}

        {/* Moving Data Streams */}
        {[0, 1, 2, 3].map((i) => (
          <motion.line
            key={i}
            x1="220"
            y1={150 + i * 60}
            x2="580"
            y2={150 + i * 60}
            stroke="url(#dataFlow)"
            strokeWidth="4"
            strokeLinecap="round"
            animate={{
              strokeDashoffset: [200, 0],
            }}
            strokeDasharray="20 20"
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "linear",
            }}
          />
        ))}

        {/* Floating Hidden Nodes */}
        {[...Array(25)].map((_, i) => (
          <motion.circle
            key={i}
            cx={50 + Math.random() * 700}
            cy={50 + Math.random() * 400}
            r={Math.random() * 2 + 1}
            fill="#60A5FA"
            animate={{
              opacity: [0.1, 1, 0.1],
            }}
            transition={{
              duration: 2 + Math.random() * 4,
              repeat: Infinity,
            }}
          />
        ))}
      </svg>

      {/* Center Content */}
      <motion.div
        animate={{
          boxShadow: [
            "0 0 20px rgba(59,130,246,0.2)",
            "0 0 80px rgba(59,130,246,0.8)",
            "0 0 20px rgba(59,130,246,0.2)",
          ],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="
          z-20
          flex
          flex-col
          items-center
          justify-center
          rounded-full
          border
          border-blue-500/30
          bg-slate-950/80
          backdrop-blur-xl
          w-52
          h-52
        "
      >
        <div className="text-blue-400 text-sm uppercase tracking-[0.3em]">
          Intelligence Layer
        </div>

        <h3 className="mt-2 text-4xl font-bold text-white">
          Deep Web
        </h3>

        <p className="mt-3 text-center text-slate-400 text-sm px-8">
          Private & Restricted Digital Content
        </p>
      </motion.div>
    </div>
  );
}