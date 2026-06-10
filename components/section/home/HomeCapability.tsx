"use client";

import BgGradient from "@/components/spacial-componets/bgGradient";
import { motion } from "framer-motion";
import SurfaceWebIllustration from "@/components/spacial-componets/svgs/WebSurfase";
import DeepWebIllustration from "@/components/spacial-componets/svgs/DeepWeb";
import { deepWeb } from "@/data/home";
import HackerTerminal from "@/components/spacial-componets/svgs/DarkWep";
import DarkWebIllustration from "@/components/spacial-componets/svgs/DarkWebIllustration";

const HomeCapability = () => {
  return (
    <section className="relative overflow-hidden bg-black py-24 ">
      <BgGradient>
        <div className="container px-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16  items-center">
            {/* Content Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-blue-400 font-semibold tracking-wider uppercase text-sm mb-4">
                Publicly Accessible Information
              </span>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Surface Web
              </h2>
              <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-xl">
                The Surface Web contains indexed websites that can be accessed
                through standard search engines such as Google and Bing. It
                includes news portals, public forums, social media platforms,
                government resources, and open databases.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 25px rgba(37, 99, 235, 0.5)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-8 py-4 bg-blue-600 text-white font-bold rounded-xl overflow-hidden group transition-colors hover:bg-blue-500"
                >
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] transition-transform" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 backdrop-blur-sm transition-all"
                >
                  Read More
                </motion.button>
              </div>
            </motion.div>

            {/* Image Right */}
            <SurfaceWebIllustration />
          </div>
        </div>
      </BgGradient>

      <BgGradient className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 translate-x-1/2 rotate-60 bg-linear-to-br from-skt-500 via-blue-800 to-violet-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-6xl ">
        <div className="container  max-w-6xl  mx-auto px-6 md:mt-10 lg:mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Right */}
            <DeepWebIllustration />

            {/* Content Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-blue-400 font-semibold tracking-wider uppercase text-sm mb-4">
                Private & Restricted Digital Content
              </span>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Deep Web
              </h2>
              <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-xl">
                The Deep Web consists of content that is not indexed by search
                engines. This includes private databases, internal corporate
                systems, academic repositories, subscription-based services,
                cloud storage, and authenticated web portals requiring user
                access.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-10">
                {deepWeb.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{
                      y: -5,
                      backgroundColor: "rgba(59, 130, 246, 0.05)",
                      borderColor: "rgba(59, 130, 246, 0.3)",
                    }}
                    className="group flex flex-col items-center justify-center p-5 rounded-2xl border border-white/5 bg-white/2 backdrop-blur-md transition-all duration-300"
                  >
                    <div className="mb-3 transition-transform duration-300 group-hover:scale-110">
                      {item.icon}
                    </div>
                    <span className="text-xs font-bold text-zinc-500 group-hover:text-blue-400 text-center uppercase tracking-widest transition-colors">
                      {item.title}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </BgGradient>

      <BgGradient>
        <div className="container mx-auto  max-w-6xl  px-6 mt-8 lg:mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-blue-400 font-semibold tracking-wider uppercase text-sm mb-4">
                Anonymous & Hidden Networks
              </span>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Dark Web
              </h2>
              <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-xl">
                The Dark Web operates on encrypted networks designed to provide
                anonymity. While it can support privacy-focused communication,
                it is also known for hosting underground marketplaces, illicit
                forums, leaked datasets, and other hidden digital activities.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 25px rgba(37, 99, 235, 0.5)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-8 py-4 bg-blue-600 text-white font-bold rounded-xl overflow-hidden group transition-colors hover:bg-blue-500"
                >
                  <span className="relative z-10">Check Data</span>
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] transition-transform" />
                </motion.button>
              </div>
            </motion.div>

            {/* Image Right */}
            <DarkWebIllustration />
          </div>
        </div>
      </BgGradient>
    </section>
  );
};

export default HomeCapability;
