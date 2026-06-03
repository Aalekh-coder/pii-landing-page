"use client";

import BgGradient from "@/components/spacial-componets/bgGradient";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SurfaceWebIllustration from "@/components/spacial-componets/svgs/WebSurfase";

const HomeCapability = () => {
  return (
    <section className="relative overflow-hidden bg-black py-24">
      <BgGradient >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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

              
            </motion.div>

            {/* Image Right */}
           <SurfaceWebIllustration />
          </div>
        </div>
      </BgGradient>

      
    </section>
  );
};

export default HomeCapability;
