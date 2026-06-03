"use client";

import LightRays from "@/components/spacial-componets/light-ray/LightRayMain";
import { Award } from "lucide-react";
import { motion, Variants } from "framer-motion";
import BlurText from "@/components/spacial-componets/Blur-text/BlurText";
import HomeFeature from "@/components/layout/section/home/HomeFeature";
import HomeCapability from "@/components/layout/section/home/HomeCapability";

const Home = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0, filter: "blur(10px)" },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <main className="bg-black text-white">
      {/* hero section  */}
      <section className="h-[100vh] relative">
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

        <div className="absolute inset-0 overflow-hidden z-10">
          <div
            className="
      absolute inset-0
      [background-image:radial-gradient(rgba(59,130,255,0.5)_0.2px,transparent_5px)]
      [background-size:22px_22px]
      opacity-90
    "
          />

          <div
            className="
      absolute inset-0
      bg-[radial-gradient(circle_at_center,transparent_20%,black_80%)]
      hover:bg-[radial-gradient(circle_at_center,transparent50%,black_80%)]
    "
          />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 container mx-auto px-6 text-center"
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

          <motion.div variants={itemVariants}>
            <BlurText
              text="TSN Security provides world-class platform testing, validation, and advanced training empowered by real-world case studies and elite intelligence partnerships."
              delay={40}
              animateBy="words"
              direction="bottom"
              className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed justify-center"
            />
          </motion.div>

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

      <HomeFeature />
      <HomeCapability />
    </main>
  );
};

export default Home;
