"use client";


import {  Variants } from "framer-motion";
import HomeCapability from "@/components/layout/section/home/HomeCapability";
import HomeAdvantage from "@/components/layout/section/home/HomeAdvantage";
import Hero from "@/components/layout/section/home/Hero";

const Home = () => {

  return (
    <main className="bg-black text-white">
      {/* hero section  */}
     <Hero />
      <HomeCapability />
      <HomeAdvantage />
    </main>
  );
};

export default Home;
