"use client";

import { motion } from "framer-motion";
import { Mail, Smartphone, Globe, Wallet, User, Server } from "lucide-react";

const nodes = [
  {
    icon: Smartphone,
    label: "Mobile",
    x: "15%",
    y: "20%",
  },
  {
    icon: Mail,
    label: "Email",
    x: "80%",
    y: "18%",
  },
  {
    icon: User,
    label: "Username",
    x: "12%",
    y: "75%",
  },
  {
    icon: Wallet,
    label: "Crypto",
    x: "82%",
    y: "72%",
  },
  {
    icon: Globe,
    label: "Domain",
    x: "50%",
    y: "8%",
  },
  {
    icon: Server,
    label: "IP Address",
    x: "50%",
    y: "88%",
  },
];

export default function IdentifierTracingAnimation() {
  return (
    <div className="relative w-full h-[550px] overflow-hidden rounded-3xl">
      {/* Glow */}
      <div className="absolute inset-0  blur-3xl" />

      {/* Radar */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 w-[420px] h-[420px] -translate-x-1/2 -translate-y-1/2"
      >
        <div
          className="
          absolute inset-0 rounded-full
          border border-blue-500/20
        "
        />

        <div
          className="
          absolute inset-0 rounded-full
          bg-[conic-gradient(from_0deg,transparent,rgba(59,130,246,.25),transparent)]
        "
        />
      </motion.div>

      {/* Center Intelligence Core */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-36
          h-36
          rounded-full
          bg-linear-to-br
          from-blue-500
          to-indigo-700
          flex
          items-center
          justify-center
          shadow-[0_0_60px_rgba(59,130,246,.6)]
        "
      >
        <div className="text-center">
          <div className="text-4xl mb-2">◎</div>
          <div className="text-xs tracking-widest text-white">INTELLIGENCE</div>
        </div>
      </motion.div>

      {/* Nodes */}
      {nodes.map((node, i) => {
        const Icon = node.icon;

        return (
          <motion.div
            key={node.label}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: i * 0.2,
            }}
            className="absolute"
            style={{
              left: node.x,
              top: node.y,
            }}
          >
            {/* Connection */}
            <svg
              className="absolute pointer-events-none"
              style={{
                width: "400px",
                height: "400px",
                left: "-150px",
                top: "-150px",
              }}
            >
              <motion.line
                x1="200"
                y1="200"
                x2="150"
                y2="150"
                stroke="#3B82F6"
                strokeWidth="1.5"
                strokeDasharray="8 8"
                animate={{
                  strokeDashoffset: [20, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "linear",
                }}
              />
            </svg>

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 3 + i,
              }}
              className="
                w-20
                h-20
                rounded-2xl
                bg-blue-500/10
                backdrop-blur-xl
                border
                border-blue-500/20
                flex
                flex-col
                items-center
                justify-center
              "
            >
              <Icon size={24} className="text-blue-400 mb-1" />

              <span className="text-[10px] text-blue-100">{node.label}</span>
            </motion.div>
          </motion.div>
        );
      })}

      {/* Floating Intelligence Keywords */}
      {[
        "Digital Footprint",
        "Correlation",
        "OSINT",
        "Monitoring",
        "Metadata",
        "Identity",
      ].map((word, i) => (
        <motion.div
          key={word}
          animate={{
            y: [0, -20, 0],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            repeat: Infinity,
            duration: 4 + i,
          }}
          className="
            absolute
            text-blue-400/50
            text-xs
            font-mono
          "
          style={{
            left: `${10 + i * 15}%`,
            top: `${15 + (i % 2) * 60}%`,
          }}
        >
          {word}
        </motion.div>
      ))}

      {/* Scan Line */}
      <motion.div
        animate={{
          y: [-550, 550],
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
          h-24
          bg-gradient-to-b
          from-transparent
          via-blue-500/10
          to-transparent
        "
      />
    </div>
  );
}
