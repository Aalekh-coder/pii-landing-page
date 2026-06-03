"use client";

import { motion } from "framer-motion";

const lines = [
  "> Initializing Intelligence Engine...",
  "> Connecting to distributed nodes...",
  "> Parsing metadata streams...",
  "> Indexing surface web sources...",
  "> Correlating digital identities...",
  "> Mapping hidden relationships...",
  "> Threat analysis in progress...",
  "> Intelligence score generated.",
];

export default function HackerTerminal() {
  return (
    <div className="relative w-full max-w-3xl mx-auto">
      {/* Glow */}
      <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="
          relative
          overflow-hidden
          rounded-3xl
          border border-blue-500/20
          bg-[#050816]
          backdrop-blur-xl
          shadow-[0_0_80px_rgba(59,130,246,0.15)]
        "
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-blue-500/10">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>

          <div className="text-xs text-blue-300 font-mono">
            TSN Intelligence Terminal
          </div>
        </div>

        {/* Code */}
        <div className="relative p-6 h-[350px] overflow-hidden font-mono">
          {lines.map((line, index) => (
            <motion.div
              key={line}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: index * 0.5,
              }}
              className="mb-3 text-blue-300"
            >
              {line}
            </motion.div>
          ))}

          {/* Blinking Cursor */}
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{
              repeat: Infinity,
              duration: 1,
            }}
            className="text-blue-400"
          >
            █
          </motion.span>

          {/* Scan Line */}
          <motion.div
            animate={{
              y: [-350, 350],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              left-0
              w-full
              h-12
              bg-gradient-to-b
              from-transparent
              via-blue-500/10
              to-transparent
            "
          />
        </div>
      </motion.div>
    </div>
  );
}