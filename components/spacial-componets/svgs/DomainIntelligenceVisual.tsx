"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Server,
  Database,
  Shield,
  Network,
  GitBranch,
} from "lucide-react";

const nodes = [
  {
    icon: Server,
    label: "Hosting",
    x: "15%",
    y: "30%",
  },
  {
    icon: Database,
    label: "DNS",
    x: "85%",
    y: "30%",
  },
  {
    icon: Shield,
    label: "SSL",
    x: "15%",
    y: "75%",
  },
  {
    icon: GitBranch,
    label: "Assets",
    x: "85%",
    y: "75%",
  },
];

export default function DomainIntelligenceVisual() {
  return (
    <div className="relative h-[550px] w-full overflow-hidden rounded-3xl ">

      {/* Grid */}
      <div
        className="
        absolute inset-0 opacity-15
        [background-image:radial-gradient(#3b82f6_1px,transparent_1px)]
        [background-size:22px_22px]
      "
      />

      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-blue-500/5 blur-3xl" />

      {/* Orbit Rings */}
      {[220, 320, 420].map((size, i) => (
        <motion.div
          key={size}
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 40 + i * 15,
            ease: "linear",
          }}
          className="absolute left-1/2 top-1/2"
          style={{
            width: size,
            height: size,
            marginLeft: -size / 2,
            marginTop: -size / 2,
          }}
        >
          <div className="h-full w-full rounded-full border border-blue-500/10" />
        </motion.div>
      ))}

      {/* Connection Lines */}
      <svg
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
      >
        <line
          x1="50%"
          y1="50%"
          x2="15%"
          y2="30%"
          stroke="rgba(59,130,246,.25)"
          strokeWidth="1.5"
        />

        <line
          x1="50%"
          y1="50%"
          x2="85%"
          y2="30%"
          stroke="rgba(59,130,246,.25)"
          strokeWidth="1.5"
        />

        <line
          x1="50%"
          y1="50%"
          x2="15%"
          y2="75%"
          stroke="rgba(59,130,246,.25)"
          strokeWidth="1.5"
        />

        <line
          x1="50%"
          y1="50%"
          x2="85%"
          y2="75%"
          stroke="rgba(59,130,246,.25)"
          strokeWidth="1.5"
        />
      </svg>

      {/* Moving Data Packets */}
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          animate={{
            x:
              i % 2 === 0
                ? [0, 180]
                : [0, -180],
            y:
              i < 2
                ? [0, -120]
                : [0, 120],
          }}
          transition={{
            repeat: Infinity,
            duration: 2.5,
            delay: i * 0.4,
            ease: "linear",
          }}
          className="
            absolute
            left-1/2
            top-1/2
            h-2
            w-2
            rounded-full
            bg-blue-400
            shadow-[0_0_20px_#3b82f6]
          "
        />
      ))}

      {/* Central Domain */}
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
        "
      >
        <div
          className="
            flex
            h-36
            w-36
            items-center
            justify-center
            rounded-full
            bg-gradient-to-br
            from-blue-500
            to-indigo-700
            shadow-[0_0_60px_rgba(59,130,246,.6)]
          "
        >
          <Globe
            size={52}
            className="text-white"
          />
        </div>

        <div className="mt-4 text-center">
          <div className="text-sm font-semibold text-white">
            DOMAIN
          </div>

          <div className="text-xs text-blue-300">
            Intelligence Core
          </div>
        </div>
      </motion.div>

      {/* Infrastructure Nodes */}
      {nodes.map((node, index) => {
        const Icon = node.icon;

        return (
          <motion.div
            key={node.label}
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 3 + index,
            }}
            className="absolute"
            style={{
              left: node.x,
              top: node.y,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div
              className="
                flex
                h-24
                w-24
                flex-col
                items-center
                justify-center
                rounded-2xl
                border
                border-blue-500/20
                bg-white/5
                backdrop-blur-xl
              "
            >
              <Icon
                size={26}
                className="mb-2 text-blue-400"
              />

              <span className="text-xs text-white">
                {node.label}
              </span>
            </div>
          </motion.div>
        );
      })}

      {/* Intelligence Keywords */}
      {[
        "WHOIS",
        "DNS",
        "ASN",
        "Hosting",
        "Infrastructure",
        "Campaigns",
        "SSL",
        "Subdomains",
      ].map((word, i) => (
        <motion.div
          key={word}
          animate={{
            opacity: [0.3, 1, 0.3],
            y: [0, -10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 4 + i,
          }}
          className="
            absolute
            font-mono
            text-[11px]
            text-blue-400/70
          "
          style={{
            left: `${5 + i * 11}%`,
            top: `${10 + ((i + 1) % 2) * 75}%`,
          }}
        >
          {word}
        </motion.div>
      ))}

      {/* Scanning Beam */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "linear",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-[420px]
          w-[420px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
        "
      >
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-1/2
            w-[2px]
            -translate-x-1/2
            -translate-y-full
            bg-gradient-to-t
            from-blue-500/70
            to-transparent
          "
        />
      </motion.div>

      {/* Floating Network Symbol */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear",
        }}
        className="absolute right-10 top-10"
      >
        <Network
          size={42}
          className="text-blue-500/30"
        />
      </motion.div>
    </div>
  );
}