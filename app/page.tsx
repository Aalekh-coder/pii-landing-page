"use client";

import HomeCapability from "@/components/section/home/HomeCapability";
import HomeAdvantage from "@/components/section/home/HomeAdvantage";
import Hero from "@/components/section/home/HeroGraph";

const Home = () => {
  return (
    <main className="bg-black text-white">
      <Hero />
      <HomeCapability />
      <HomeAdvantage />
    </main>
  );
};

export default Home;
