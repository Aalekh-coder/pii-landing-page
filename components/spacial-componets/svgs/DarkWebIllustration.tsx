"use client";

import { motion } from "framer-motion";

const nodes = [
  { x: 500, y: 150, r: 12 },
  { x: 300, y: 280, r: 10 },
  { x: 500, y: 280, r: 10 },
  { x: 700, y: 280, r: 10 },
  { x: 220, y: 450, r: 9 },
  { x: 400, y: 450, r: 9 },
  { x: 600, y: 450, r: 9 },
  { x: 780, y: 450, r: 9 },
  { x: 500, y: 620, r: 14 },
];

const connections = [
  [500, 150, 300, 280],
  [500, 150, 500, 280],
  [500, 150, 700, 280],

  [300, 280, 220, 450],
  [300, 280, 400, 450],

  [500, 280, 400, 450],
  [500, 280, 600, 450],

  [700, 280, 600, 450],
  [700, 280, 780, 450],

  [220, 450, 500, 620],
  [400, 450, 500, 620],
  [600, 450, 500, 620],
  [780, 450, 500, 620],
];

export default function DarkWebIllustration() {
  return (
    <div className="relative h-[750px] w-full overflow-hidden rounded-3xl bg-black">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_70%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="absolute left-1/2 top-[15%] h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[180px]" />

      <div className="absolute left-[20%] top-[40%] h-[250px] w-[250px] rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute right-[15%] top-[35%] h-[300px] w-[300px] rounded-full bg-blue-600/10 blur-[150px]" />
      {/* Core Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="
          absolute
          left-1/2
          top-[620px]
          h-52
          w-52
          -translate-x-1/2
          rounded-full
          bg-blue-600/20
          blur-[120px]
        "
      />

      <svg viewBox="0 0 1000 750" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="oklch(70.7% 0.165 254.624)" />
            <stop offset="100%" stopColor="#0033A0" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Network */}
        {connections.map((line, i) => (
          <motion.line
            key={i}
            x1={line[0]}
            y1={line[1]}
            x2={line[2]}
            y2={line[3]}
            stroke="url(#lineGradient)"
            strokeWidth="1.5"
            strokeDasharray="10 10"
            animate={{
              strokeDashoffset: [100, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            opacity={0.5}
          />
        ))}

        {/* Data packets */}
        {connections.map((line, i) => (
          <motion.circle
            key={`packet-${i}`}
            r="4"
            fill="#06B6D4"
            filter="url(#glow)"
            animate={{
              cx: [line[0], line[2]],
              cy: [line[1], line[3]],
            }}
            transition={{
              duration: 2 + (i % 3),
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

        {/* Nodes */}
        {nodes.map((node, i) => (
          <g key={i}>
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={node.r + 8}
              fill="oklch(70.7% 0.165 254.624)"
              opacity="0.2"
              animate={{
                scale: [1, 1.4, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              style={{
                transformOrigin: `${node.x}px ${node.y}px`,
              }}
            />

            <circle
              cx={node.x}
              cy={node.y}
              r={node.r}
              fill="#0F172A"
              stroke="oklch(70.7% 0.165 254.624)"
              strokeWidth="2"
            />
          </g>
        ))}
      </svg>

      {/* Rotating Onion Ring */}
       <motion.div
    animate={{
      rotate: 360,
    }}
    transition={{
      duration: 20,
      repeat: Infinity,
      ease: "linear",
    }}
    className="
      absolute
      left-1/2
      top-[150px]
      h-40
      w-40
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      border
      border-blue-400/40
    "
  />

  <motion.div
    animate={{
      scale: [1, 1.6],
      opacity: [0.6, 0],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeOut",
    }}
    className="
      absolute
      left-1/2
      top-[150px]
      h-24
      w-24
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      border
      border-cyan-400
    "
  />

      {/* Top Hidden Service */}
      <div
        className="
          absolute
          left-1/2
          top-[150px]
          z-20
          flex
          h-24
          w-24
          -translate-x-1/2
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          border
          border-blue-500/50
          bg-slate-950
          text-xs
          font-semibold
          text-blue-300
        "
      >
        .ONION
      </div>

      {/* Bottom Hub */}
      <motion.div
        animate={{
          boxShadow: [
            "0 0 20px oklch(62.3% 0.214 259.4)",
            "0 0 60px oklch(62.3% 0.214 259.815)",
            "0 0 20px oklch(62.3% 0.214 259.4)",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="
          absolute
          left-1/2
          top-[620px]
          z-20
          flex
          h-36
          w-36
          -translate-x-1/2
          -translate-y-1/2
          flex-col
          items-center
          justify-center
          rounded-full
          border
          border-cyan-500/40
          bg-slate-950
          backdrop-blur-xl
        "
      >
        <div className="mt-2 text-sm font-bold text-cyan-300">DARK WEB</div>

        <div className="text-[10px] text-slate-400">Hidden Services</div>
      </motion.div>
    </div>
  );
}
