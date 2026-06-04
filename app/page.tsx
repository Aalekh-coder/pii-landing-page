"use client";

import LightRays from "@/components/spacial-componets/light-ray/LightRayMain";
import { Award } from "lucide-react";
import { motion, Variants } from "framer-motion";
import BlurText from "@/components/spacial-componets/Blur-text/BlurText";
import HomeFeature from "@/components/layout/section/home/HomeFeature";
import HomeCapability from "@/components/layout/section/home/HomeCapability";
import HomeAdvantage from "@/components/layout/section/home/HomeAdvantage";
import Hero from "@/components/layout/section/home/Hero";

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
     <Hero />
      {/* <HomeFeature /> */}
      <HomeCapability />
      <HomeAdvantage />
    </main>
  );
};

export default Home;
