"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

import { Globe, Newspaper, Database, MessageSquare } from "lucide-react";

const nodes = [
  {
    icon: Newspaper,
    title: "News & Media",
    position: "top-[5%] left-1/2 -translate-x-1/2",
  },
  {
    icon: MessageSquare,
    title: "Forums",
    position: "top-1/3 right-[5%] -translate-y-1/2",
  },
  {
    icon: Globe,
    title: "Open Sources",
    position: "top-1/2 left-[5%] -translate-y-1/2",
  },
  {
    icon: Database,
    title: "Public Databases",
    position: "bottom-[5%] left-1/2 -translate-x-1/2",
  },
];

export default function SurfaceWebIllustration() {
  const particles = useMemo(
    () =>
      Array.from({ length: 15 }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 3 + Math.random() * 4,
      })),
    [],
  );
  return (
    <div className="relative h-[550px] w-full overflow-hidden rounded-3xl ">
      {/* Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full bg-[radial-gradient(rgba(59,130,246,0.4)_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      {/* Center Glow */}
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-[120px]" />

      {/* Connection Lines */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1000 600">
        <motion.line
          x1="500"
          y1="300"
          x2="500"
          y2="110"
          stroke="#3B82F6"
          strokeWidth="2"
          strokeDasharray="8 8"
          animate={{
            strokeDashoffset: [100, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "linear",
          }}
        />

        <motion.line
          x1="500"
          y1="300"
          x2="500"
          y2="500"
          stroke="#3B82F6"
          strokeWidth="2"
          strokeDasharray="8 8"
          animate={{
            strokeDashoffset: [100, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "linear",
          }}
        />
      </svg>

      {/* Center Hub */}
      <motion.div
        animate={{
          boxShadow: [
            "0 0 20px rgba(59,130,246,0.3)",
            "0 0 60px rgba(59,130,246,0.8)",
            "0 0 20px rgba(59,130,246,0.3)",
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
          z-20
          flex
          h-50
          w-50
          -translate-x-1/2
          -translate-y-1/2
          flex-col
          items-center
          justify-center
          rounded-full
          border
          border-blue-500/50
          bg-slate-950/90
          backdrop-blur-xl
        "
      >
        <Globe className="mb-3 h-10 w-10 text-blue-400" />

        <h3 className="text-2xl font-bold text-white">Surface Web</h3>

        <p className="mt-1 text-xs text-blue-300">Public Intelligence</p>
      </motion.div>

      {/* Nodes */}
      {nodes.map((node, index) => {
        const Icon = node.icon;

        return (
          <motion.div
            key={node.title}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -8, 0],
            }}
            transition={{
              delay: index * 0.2,
              duration: 4,
              repeat: Infinity,
            }}
            className={`
              absolute
              ${node.position}
              z-20
            `}
          >
            <div
              className="
                flex
                min-w-[220px]
                items-center
                gap-4
                rounded-2xl
                border
                border-blue-500/20
                bg-slate-900/80
                px-5
                py-4
                backdrop-blur-xl
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-blue-500/10
                "
              >
                <Icon className="h-6 w-6 text-blue-400" />
              </div>

              <div>
                <h4 className="font-semibold text-white">{node.title}</h4>

                <p className="text-sm text-slate-400">Indexed & Public</p>
              </div>
            </div>
          </motion.div>
        );
      })}

      {/* Floating particles */}
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute h-1.5 w-1.5 rounded-full bg-blue-400"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            repeat: Infinity,
            duration: particle.duration,
          }}
        />
      ))}
    </div>
  );
}
