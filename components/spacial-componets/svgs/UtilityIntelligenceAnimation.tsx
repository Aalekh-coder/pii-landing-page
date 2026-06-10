"use client";

import { motion } from "framer-motion";
import {
  SatelliteDish,
  Flame,
  ShieldCheck,
  MapPinned,
  Camera,
  Database,
  Search,
} from "lucide-react";

const nodes = [
  {
    icon: SatelliteDish,
    label: "DTH Data",
    x: "18%",
    y: "25%",
  },
  {
    icon: Flame,
    label: "Gas Utility",
    x: "82%",
    y: "25%",
  },
  {
    icon: MapPinned,
    label: "Location",
    x: "18%",
    y: "75%",
  },
  {
    icon: Camera,
    label: "Device Intel",
    x: "82%",
    y: "75%",
  },
];

export default function UtilityIntelligenceAnimation() {
  return (
    <div className="relative h-[550px] w-full overflow-hidden rounded-3xl">
      {/* Grid */}
      <div
        className="
          absolute inset-0 opacity-15
          [background-image:radial-gradient(#3b82f6_1px,transparent_1px)]
          [background-size:24px_24px]
        "
      />

      {/* Ambient glow */}
      <div className="absolute inset-0 bg-blue-500/5 blur-3xl" />

      {/* Orbit Rings */}
      {[220, 320, 420].map((size, i) => (
        <motion.div
          key={size}
          animate={{ rotate: 360 }}
          transition={{
            duration: 30 + i * 10,
            repeat: Infinity,
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
      <svg className="absolute inset-0 h-full w-full">
        <line
          x1="50%"
          y1="50%"
          x2="18%"
          y2="25%"
          stroke="rgba(59,130,246,.25)"
          strokeWidth="1.5"
        />
        <line
          x1="50%"
          y1="50%"
          x2="82%"
          y2="25%"
          stroke="rgba(59,130,246,.25)"
          strokeWidth="1.5"
        />
        <line
          x1="50%"
          y1="50%"
          x2="18%"
          y2="75%"
          stroke="rgba(59,130,246,.25)"
          strokeWidth="1.5"
        />
        <line
          x1="50%"
          y1="50%"
          x2="82%"
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
            x: i % 2 === 0 ? [0, 180] : [0, -180],
            y: i < 2 ? [0, -120] : [0, 120],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
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
            bg-cyan-400
            shadow-[0_0_20px_rgba(34,211,238,.8)]
          "
        />
      ))}

      {/* Central Intelligence Core */}
      <motion.div
        animate={{
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
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
            flex h-40 w-40 items-center justify-center
            rounded-full
            bg-linear-to-br
            from-cyan-500
            via-blue-600
            to-indigo-700
            shadow-[0_0_100px_rgba(34,211,238,.45)]
          "
        >
          <Database size={60} className="text-white" />
        </div>

        <div className="mt-4 text-center">
          <div className="text-sm font-semibold text-white">
            INTELLIGENCE HUB
          </div>
          <div className="text-xs text-cyan-300">
            Utility & Verification Data
          </div>
        </div>
      </motion.div>

      {/* Data Nodes */}
      {nodes.map((node, index) => {
        const Icon = node.icon;

        return (
          <motion.div
            key={node.label}
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 3 + index,
              repeat: Infinity,
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
                flex h-24 w-24 flex-col
                items-center justify-center
                rounded-2xl
                border border-cyan-500/20
                bg-white/5
                backdrop-blur-xl
              "
            >
              <Icon size={24} className="mb-2 text-cyan-400" />

              <span className="text-xs text-white">{node.label}</span>
            </div>
          </motion.div>
        );
      })}

      {/* Floating Keywords */}
      {[
        "DTH Lookup",
        "KYC Validation",
        "Address Verification",
        "Utility Records",
        "Identity Correlation",
        "Investigation",
        "Fraud Analysis",
        "OSINT",
      ].map((item, i) => (
        <motion.div
          key={item}
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
            text-[11px]
            font-mono
            text-cyan-400/70
          "
          style={{
            left: `${5 + i * 11}%`,
            top: `${10 + ((i + 1) % 2) * 75}%`,
          }}
        >
          {item}
        </motion.div>
      ))}

      {/* Rotating Investigation Layer */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-[320px]
          w-[320px]
          -translate-x-1/2
          -translate-y-1/2
         
        "
      >
        <Search
          size={28}
          className="
            absolute
            top-0
            left-1/2
            -translate-x-1/2
            text-cyan-400
          "
        />

        <ShieldCheck
          size={28}
          className="
            absolute
            bottom-0
            left-1/2
            -translate-x-1/2
            text-cyan-400
          "
        />
      </motion.div>

      {/* Scanner Beam */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-[450px]
          w-[450px]
          -translate-x-1/2
          -translate-y-1/2
           -z-10
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
            from-cyan-500/70
            to-transparent
          "
        />
      </motion.div>
    </div>
  );
}
