"use client";

import ColorBends from "@/components/spacial-componets/color-blend/ColorBendsMain";
import LightRays from "@/components/spacial-componets/light-ray/LightRayMain";
import { Award, GraduationCap, Microscope, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

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
    <main className="bg-black text-white">
      {/* hero section  */}
      <section className="h-[160vh] md:h-[130vh] lg:h-[110vh] relative">
        <LightRays
          raysOrigin="bottom-center"
          raysColor="#0000FF"
          raysSpeed={1}
          lightSpread={6}
          rayLength={12}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0}
          distortion={0}
          className="custom-rays"
          pulsating={false}
          fadeDistance={1}
          saturation={1}
        />


 
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="absolute top-30 md:top-40 lg:top-50 left-0 right-0 z-10 container mx-auto px-6 text-center"
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
    </main>
  );
};

export default Home;
