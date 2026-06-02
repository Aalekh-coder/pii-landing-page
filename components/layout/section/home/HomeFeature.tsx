"use client";

import { intelligenceData } from "@/data/home";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useState } from "react";



 function HomeFeature() {
   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <section className="relative py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="inline-flex px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">
              Intelligence Platform
            </span>

            <h2 className="text-6xl font-bold mt-6">MRM Intelligence</h2>

            <p className="text-zinc-400 max-w-2xl mx-auto mt-4">
              Unified investigation and intelligence platform for cyber, OSINT,
              crypto and domain analysis.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {intelligenceData.map(
              ({ title, features, description, icon }, idx) => (
                <motion.div
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  key={idx}
                  whileHover={{ y: -8 }}
                  className={`magic-bento-card bg-[#120F17] border border-white/10 hover:border-blue-500 hover:shadow-blue-500 shadow-2xl duration-300 rounded-3xl p-6 h-full group ${
                    hoveredIndex !== null && hoveredIndex !== idx
                      ? "blur-sm opacity-45"
                      : ""
                  }`}
                >

                  <div className="mb-5 flex items-start gap-2">
                    <div className="group-hover:text-blue-500 duration-300">{icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {title}
                      </h3>
                      <p className="text-sm text-zinc-400">{description}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {features.map((feature) => (
                      <div
                        key={feature}
                        className="
              flex items-center
              justify-between
              rounded-xl
              border border-white/5
              bg-white/[0.03]
              px-4 py-3
              text-sm
              text-zinc-300
            "
                      >
                        <span>{feature}</span>

                        <ChevronRight size={14} className="text-blue-400" />
                      </div>
                    ))}
                  </div>
                </motion.div>
              ),
            )}
          </div>
        </div>
      </section>
  );
}

export default HomeFeature