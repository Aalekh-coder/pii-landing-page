"use client";

import { motion } from "framer-motion";
import {
  Wallet,
  Bitcoin,
  Search,
  Shield,
  ArrowRightLeft,
  Network,
} from "lucide-react";

const wallets = [
  { x: "15%", y: "25%", label: "Wallet A" },
  { x: "85%", y: "25%", label: "Wallet B" },
  { x: "20%", y: "75%", label: "Exchange" },
  { x: "80%", y: "75%", label: "Mixer" },
];

export default function CryptoInvestigationVisual() {
  return (
    <div className="relative h-[550px] w-full overflow-hidden rounded-3xl ">
      {/* Grid */}
      <div
        className="
          absolute inset-0 opacity-10
          [background-image:radial-gradient(rgb(0,0,60)_1px,transparent_1px)]
          [background-size:24px_24px]
        "
      />

      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-blue-500/5 blur-3xl" />

      {/* Blockchain Rings */}
      {[240, 340, 440].map((size, i) => (
        <motion.div
          key={size}
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 40 + i * 10,
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

      {/* Transaction Paths */}
      <svg className="absolute inset-0 h-full w-full">
        <line
          x1="50%"
          y1="50%"
          x2="15%"
          y2="25%"
          stroke="rgba(95, 98, 255, 0.5)"
          strokeWidth="1.5"
        />
        <line
          x1="50%"
          y1="50%"
          x2="85%"
          y2="25%"
          stroke="rgba(95, 98, 255, 0.5)"
          strokeWidth="1.5"
        />
        <line
          x1="50%"
          y1="50%"
          x2="20%"
          y2="75%"
          stroke="rgba(95, 98, 255, 0.5)"
          strokeWidth="1.5"
        />
        <line
          x1="50%"
          y1="50%"
          x2="80%"
          y2="75%"
          stroke="rgba(95, 98, 255, 0.5)"
          strokeWidth="1.5"
        />
      </svg>

      {/* Moving Transactions */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <motion.div
          key={i}
          animate={{
            x: [0, 180, 0],
            y: [0, -120, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2 + i * 0.4,
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
            shadow-[0_0_20px_rgb(251,146,60)]
          "
        />
      ))}

      {/* Core Intelligence Engine */}
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
  flex h-40 w-40 items-center justify-center
  rounded-full
  bg-gradient-to-br
  from-cyan-500
  via-blue-600
  to-indigo-700
  shadow-[0_0_100px_rgba(34,211,238,.55)]
"
        >
          <Bitcoin size={58} className="text-white" />
        </div>

        <div className="mt-4 text-center">
          <div className="text-sm font-semibold text-white">CRYPTO TRACE</div>
          <div className="text-xs text-blue-300">Blockchain Intelligence</div>
        </div>
      </motion.div>

      {/* Wallet Nodes */}
      {wallets.map((wallet, i) => (
        <motion.div
          key={wallet.label}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 3 + i,
          }}
          className="absolute"
          style={{
            left: wallet.x,
            top: wallet.y,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div
            className="
              flex h-24 w-24 flex-col
              items-center justify-center
              rounded-2xl
              border border-blue-500/20
              bg-white/5
              backdrop-blur-xl
            "
          >
            <Wallet size={24} className="mb-2 text-blue-400" />
            <span className="text-xs text-white">{wallet.label}</span>
          </div>
        </motion.div>
      ))}

      {/* Floating Investigation Keywords */}
      {[
        "Wallet Analysis",
        "Fund Flow",
        "Ransom",
        "Attribution",
        "Mixer Detection",
        "Transactions",
        "Blockchain",
        "AML",
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
            text-[11px]
            font-mono
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

      {/* Orbiting Intelligence Icons */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 18,
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
        <Search
          size={30}
          className="
            absolute
            top-0
            left-1/2
            -translate-x-1/2
            text-blue-400
          "
        />

        <Shield
          size={30}
          className="
            absolute
            bottom-0
            left-1/2
            -translate-x-1/2
            text-blue-400
          "
        />

        <ArrowRightLeft
          size={30}
          className="
            absolute
            top-1/2
            right-0
            -translate-y-1/2
            text-blue-400
          "
        />

        <Network
          size={30}
          className="
            absolute
            top-1/2
            left-0
            -translate-y-1/2
            text-blue-400
          "
        />
      </motion.div>

      {/* Scanner Beam */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 6,
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
            from-blue-500/70
            to-transparent
          "
        />
      </motion.div>
    </div>
  );
}
