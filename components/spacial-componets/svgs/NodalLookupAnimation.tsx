"use client";

import { motion } from "framer-motion";
import {
  RadioTower,
  Building2,
  ShieldCheck,
  Phone,
  Network,
  UserCheck,
} from "lucide-react";

const providers = [
  {
    label: "Telecom",
    icon: RadioTower,
    x: "18%",
    y: "22%",
  },
  {
    label: "ISP",
    icon: Network,
    x: "82%",
    y: "22%",
  },
  {
    label: "Escalation",
    icon: Phone,
    x: "18%",
    y: "78%",
  },
  {
    label: "Compliance",
    icon: ShieldCheck,
    x: "82%",
    y: "78%",
  },
];

export default function NodalLookupAnimation() {
  return (
    <div className="relative h-[520px] overflow-hidden rounded-3xl ">

      {/* Grid */}
      <div
        className="
        absolute inset-0 opacity-15
        [background-image:radial-gradient(#3b82f6_1px,transparent_1px)]
        [background-size:24px_24px]
      "
      />

      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-blue-500/5 blur-3xl" />

      {/* Orbit Rings */}
      {[180, 280, 380].map((size, i) => (
        <motion.div
          key={size}
          animate={{ rotate: 360 }}
          transition={{
            duration: 25 + i * 10,
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

      {/* Secure Connection Lines */}
      <svg className="absolute inset-0 h-full w-full">
        {[
          ["18%", "22%"],
          ["82%", "22%"],
          ["18%", "78%"],
          ["82%", "78%"],
        ].map(([x, y], idx) => (
          <line
            key={idx}
            x1="50%"
            y1="50%"
            x2={x}
            y2={y}
            stroke="rgba(59,130,246,.2)"
            strokeWidth="1.5"
          />
        ))}
      </svg>

      {/* Moving Data Packets */}
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          animate={{
            x: i % 2 ? [-160, 0] : [160, 0],
            y: i < 2 ? [-100, 0] : [100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
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

      {/* Center Hub */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
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
          flex
          h-40
          w-40
          items-center
          justify-center
          rounded-full
          bg-gradient-to-br
          from-cyan-500
          via-blue-600
          to-indigo-700
          shadow-[0_0_100px_rgba(34,211,238,.45)]
        "
        >
          <Building2 size={58} className="text-white" />
        </div>

        <div className="mt-4 text-center">
          <div className="text-sm font-semibold text-white">
            NODAL HUB
          </div>

          <div className="text-xs text-cyan-300">
            Telecom Coordination
          </div>
        </div>
      </motion.div>

      {/* Provider Nodes */}
      {providers.map((node, index) => {
        const Icon = node.icon;

        return (
          <motion.div
            key={node.label}
            animate={{
              y: [0, -10, 0],
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
                flex
                h-24
                w-24
                flex-col
                items-center
                justify-center
                rounded-2xl
                border
                border-cyan-500/20
                bg-white/5
                backdrop-blur-xl
              "
            >
              <Icon
                size={24}
                className="mb-2 text-cyan-400"
              />

              <span className="text-xs text-white">
                {node.label}
              </span>
            </div>
          </motion.div>
        );
      })}

      {/* Floating Labels */}
      {[
        "Jio",
        "Airtel",
        "Vi",
        "BSNL",
        "ISP",
        "CDR Access",
        "Escalation",
        "Compliance",
      ].map((item, i) => (
        <motion.div
          key={item}
          animate={{
            opacity: [0.3, 1, 0.3],
            y: [0, -8, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 4 + i,
          }}
          className="
            absolute
            text-[11px]
            text-cyan-400/70
            font-mono
          "
          style={{
            left: `${5 + i * 11}%`,
            top: `${12 + ((i + 1) % 2) * 72}%`,
          }}
        >
          {item}
        </motion.div>
      ))}

      {/* Rotating Verification Layer */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-[300px]
          w-[300px]
          -translate-x-1/2
          -translate-y-1/2
        "
      >
        <UserCheck
          size={30}
          className="
            absolute
            top-0
            left-1/2
            -translate-x-1/2
            text-cyan-400
          "
        />

        <ShieldCheck
          size={30}
          className="
            absolute
            bottom-0
            left-1/2
            -translate-x-1/2
            text-cyan-400
          "
        />
      </motion.div>

      {/* Scanner */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 8,
          repeat: Infinity,
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