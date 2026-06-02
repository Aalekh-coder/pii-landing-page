"use client";

import ColorBends from "@/components/spacial-componets/color-blend/ColorBendsMain";
import LightRays from "@/components/spacial-componets/light-ray/LightRayMain";
import { motion } from "framer-motion";
import { ShieldCheck, GraduationCap, Microscope, Award } from "lucide-react";

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <main className="bg-black">
      {/* Hero Section 1: Brand & Intelligence */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <LightRays
          raysOrigin="bottom-center"
          raysColor="#2563eb"
          raysSpeed={0.8}
          lightSpread={5}
          rayLength={15}
          followMouse={true}
          mouseInfluence={0.1}
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 container mx-auto px-6 text-center"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-8"
          >
            <Award size={16} />
            Official Brand Ambassador of MRM Intelligence
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            Next-Gen{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
              Digital Intelligence
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            TSN Security provides world-class platform testing, validation, and
            advanced training empowered by real-world case studies and elite
            intelligence partnerships.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.4)]">
              Explore Services
            </button>
            <button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 backdrop-blur-sm transition-all">
              View Case Studies
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Hero Section 2: Validation & Training */}
      <section className="relative py-24 md:py-40 overflow-hidden min-h-screen flex items-center">
        <ColorBends
          className="absolute inset-0 opacity-40"
          colors={["#0011ff", "#4f46e5"]}
          speed={0.15}
          scale={1.2}
          transparent={true}
          intensity={1.2}
        />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                Elite Training for <br />
                <span className="text-blue-500">Law Enforcement Agencies</span>
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: ShieldCheck,
                    title: "Platform Testing",
                    desc: "Rigorous validation protocols for mission-critical security platforms.",
                  },
                  {
                    icon: Microscope,
                    title: "Validation & QA",
                    desc: "Scientific approach to ensuring data integrity and system reliability.",
                  },
                  {
                    icon: GraduationCap,
                    title: "Advanced OSINT Training",
                    desc: "Specialized intelligence gathering techniques for field officers.",
                  },
                ].map((feature, i) => (
                  <div
                    key={i}
                    className="flex gap-4 p-4 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all"
                  >
                    <div className="h-12 w-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                      <feature.icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg">
                        {feature.title}
                      </h4>
                      <p className="text-gray-400 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square lg:aspect-video rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 backdrop-blur-2xl flex items-center justify-center p-8 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-all duration-500" />
              <div className="text-center relative">
                <Microscope
                  size={80}
                  className="text-blue-400 mx-auto mb-6 opacity-50"
                />
                <p className="text-2xl font-semibold text-white">
                  Real-world Case Study Database
                </p>
                <p className="text-gray-400 mt-2">
                  Validated Intelligence Architectures
                </p>
                <div className="mt-8 flex justify-center">
                  <span className="h-1 w-20 bg-blue-500 rounded-full" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
