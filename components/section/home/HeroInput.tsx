"use client";
import React, { useState } from "react";
import BlueButton from "@/components/spacial-componets/BlueButton";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter'



const HeroInput = () => {
  const [inputValue, setInputValue] = useState("");

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log(inputValue);
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="px-6 pb-20 lg:w-1/2 lg:pl-20 lg:pt-8"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-3 md:mb-8 text-center lg:text-left">
          MRM Intelligence <br />
          <span className="text-blue-400">
          <Typewriter
            words={['Phone', 'Email', 'Username', 'Name',"Wallet"]}
            loop={10}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex gap-2 items-center lg:w-3/4  "
        >
          <Input
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter your no. +91 XXXX-XXXX-XX "
            className="h-14 bg-white/5 border-white/10 text-white placeholder:text-zinc-400 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all rounded-2xl px-6"
          />
          <BlueButton>Submit</BlueButton>
        </form>
      </motion.div>
    </>
  );
};

export default HeroInput;
