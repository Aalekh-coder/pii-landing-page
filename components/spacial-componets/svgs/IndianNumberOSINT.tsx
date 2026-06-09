"use client";

import { motion } from "framer-motion";
import { Smartphone, ShieldAlert, MapPin, User, Globe } from "lucide-react";

export default function IndianNumberOSINT() {
  const nodes = [
    {
      icon: User,
      label: "Identity",
      x: "20%",
      y: "25%",
    },
    {
      icon: ShieldAlert,
      label: "Breaches",
      x: "80%",
      y: "25%",
    },
    {
      icon: Globe,
      label: "Social",
      x: "20%",
      y: "75%",
    },
    {
      icon: MapPin,
      label: "Region",
      x: "80%",
      y: "75%",
    },
  ];

  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-3xl ">
      {/* Background Grid */}
      <div
        className="
          absolute inset-0 opacity-20
          [background-image:radial-gradient(#3b82f6_1px,transparent_1px)]
          [background-size:24px_24px]
        "
      />

      {/* Radar Rings */}
      {[180, 260, 340].map((size, i) => (
        <motion.div
          key={size}
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 25 + i * 10,
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
          <div className="w-full h-full rounded-full border border-blue-500/10" />
        </motion.div>
      ))}

      {/* Center Phone */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          boxShadow: [
            "0 0 20px rgba(59,130,246,.4)",
            "0 0 60px rgba(59,130,246,.8)",
            "0 0 20px rgba(59,130,246,.4)",
          ],
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
          w-32
          h-32
          rounded-3xl
          bg-gradient-to-br
          from-blue-500
          to-indigo-700
          flex
          flex-col
          items-center
          justify-center
        "
      >
        <Smartphone size={42} className="text-white mb-2" />

        <div className="text-white text-xs font-semibold">+91 XXXXXXXX</div>

        <div className="text-[10px] text-blue-100">Intelligence Scan</div>
      </motion.div>

      {/* Nodes */}
      {nodes.map((node, i) => {
        const Icon = node.icon;

        return (
          <motion.div
            key={node.label}
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 3 + i,
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
                w-24 h-24
                rounded-2xl
                bg-white/5
                backdrop-blur-xl
                border border-blue-500/20
                flex flex-col
                items-center justify-center
              "
            >
              <Icon size={26} className="text-blue-400 mb-2" />

              <span className="text-xs text-white">{node.label}</span>
            </div>
          </motion.div>
        );
      })}

      {/* Data Streams */}
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          animate={{
            opacity: [0, 1, 0],
            scaleX: [0.3, 1, 0.3],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            delay: i * 0.4,
          }}
          className="
            absolute
            left-1/2
            top-1/2
            h-[2px]
            w-[180px]
            bg-linear-to-r
            from-transparent
            via-blue-400
            to-transparent
            origin-center
          "
          style={{
            transform: `translate(-50%,-50%) rotate(${i * 90}deg)`,
          }}
        />
      ))}

      {/* Floating Tags */}
      {[
        "Ownership",
        "Social Media",
        "Leak Check",
        "Carrier",
        "Location",
        "Digital Footprint",
      ].map((tag, i) => (
        <motion.div
          key={tag}
          animate={{
            opacity: [0.3, 1, 0.3],
            y: [0, -10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 3 + i,
          }}
          className="
            absolute
            text-[11px]
            text-blue-400/70
            font-mono
          "
          style={{
            left: `${8 + i * 14}%`,
            top: `${10 + (i % 2) * 70}%`,
          }}
        >
          {tag}
        </motion.div>
      ))}

      {/* Scan Line */}
      <motion.div
        animate={{
          y: [-500, 500],
        }}
        transition={{
          duration: 5,
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
