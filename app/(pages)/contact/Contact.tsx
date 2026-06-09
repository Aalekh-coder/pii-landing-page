"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  Mail,
  MapPin,
  MessageSquare,
  ShieldCheck,
  Shield,
  Lock,
  ChevronDown
} from "lucide-react";
import { faq } from "@/data/contact";

const Contact = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.15, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen text-white bg-[#050B11] relative overflow-hidden">
      {/* Ambient Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-5xl px-4 py-12 lg:px-8 pt-32 lg:pt-36 relative z-10"
      >
        {/* HEADER SECTION */}
        <motion.div variants={containerVariants} className="mb-12">
          <span className="mb-4 inline-flex items-center gap-2 border border-blue-400/30 rounded-full bg-blue-500/5 px-4 py-1.5 text-[10px] tracking-[4px] text-blue-300 uppercase font-bold shadow-[0_0_15px_rgba(59,130,246,0.1)]">
            <Lock size={12} className="text-blue-400" />
            Secure Channel
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-linear-to-b from-white to-gray-500">
            Connect with Our Analysts
          </h1>
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-gray-400 leading-relaxed">
            Have inquiries regarding threat intelligence, zero-trust frameworks,
            or custom training? Our engineering team is ready to assist.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
          {/* CONTACT FORM CONTAINER */}
          <motion.section
            variants={containerVariants}
            className="rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-2xl p-6 md:p-10 shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-blue-500/50 to-transparent" />

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex items-center justify-between pb-4 border-b border-white/5">
                <div className="flex items-center gap-2 text-blue-400">
                  <Shield size={18} />
                  <span className="text-[11px] font-black uppercase tracking-[3px]">
                    Secure Link Status: Active
                  </span>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-xs font-medium uppercase tracking-wider text-white">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3 outline-none transition hover:bg-white/[0.05] focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 placeholder:text-gray-600"
                    placeholder="Enter Name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium uppercase tracking-wider text-white">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3 outline-none transition hover:bg-white/[0.05] focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 placeholder:text-gray-600"
                    placeholder="Enter Last Name"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-medium uppercase tracking-wider text-white">
                  Work Email
                </label>
                <input
                  type="email"
                  className="w-full rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3 outline-none transition hover:bg-white/[0.05] focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 placeholder:text-gray-600"
                  placeholder="Enter you Email"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-medium uppercase tracking-wider text-white">
                  Message / Inquiry
                </label>
                <textarea
                  rows={5}
                  className="w-full rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3 outline-none transition hover:bg-white/[0.05] focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 resize-none placeholder:text-gray-600"
                  placeholder="How can we help secure your infrastructure?"
                />
              </div>

              <button className="group flex w-full items-center justify-center gap-3 rounded-xl bg-linear-to-r from-blue-600 to-blue-500 py-4 font-bold text-white transition shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:brightness-110 active:scale-[0.98]">
                Submit
              </button>
            </form>
          </motion.section>

          {/* INFO SIDEBAR */}
          <motion.aside variants={containerVariants} className="space-y-6">
            {/* HQ Info */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:bg-white/[0.04]">
              <h3 className="mb-6 text-[10px] font-bold tracking-[3px] text-gray-500 uppercase">
                Global Nodes
              </h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-tighter">
                      Communications
                    </p>
                    <p className="mt-1 text-sm font-medium">
                      intel@pii-security.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-tighter">
                      Command Center
                    </p>
                    <p className="mt-1 text-sm font-medium">Mumbai India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Support Card */}
            <div className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6 transition-all hover:bg-blue-500/10">
              <div className="mb-4 flex items-center gap-2 text-blue-300">
                <ShieldCheck size={18} />
                <span className="text-xs font-bold uppercase tracking-widest">
                  Protocol 24/7
                </span>
              </div>
              <p className="text-sm leading-relaxed text-gray-400">
                Enterprise clients have access to our direct emergency response
                uplink for active breach remediation.
              </p>
            </div>

            {/* Intelligence Reports Card */}
            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition hover:bg-white/[0.04] overflow-hidden relative">
              <div className="absolute top-1/3 left-1/4 w-125 h-125 bg-blue-700/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" />

              <div className="mb-4 flex items-center gap-2 text-gray-300">
                <MessageSquare size={18} />
                <span className="text-xs font-bold uppercase tracking-widest">
                  Intel Reports
                </span>
              </div>
              <p className="text-sm leading-relaxed text-gray-400">
                Subscribe to our secure newsletter for weekly insights on
                emerging threat vectors and zero-day mitigation strategies.
              </p>
            </div>
          </motion.aside>
        </div>

        {/* FAQ SECTION */}
        <motion.div variants={containerVariants} className="mt-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-linear-to-r from-transparent to-white/10" />

            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-linear-to-b from-white to-gray-500">
              FAQ
            </h2>
            <div className="h-px flex-1 bg-linear-to-l from-transparent to-white/10" />
          </div>

          <div className="space-y-4">
            {faq.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/5 bg-blue-500/[0.08] overflow-hidden transition-colors hover:border-white/10 relative"
              >
                <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-blue-500/50 to-transparent" />
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-5 text-left transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-semibold tracking-tight text-gray-200">
                      {item.question}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-600"
                  >
                    <ChevronDown size={18} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-5 pt-0 text-sm leading-relaxed text-gray-400 ml-10 border-l border-blue-500/20">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
