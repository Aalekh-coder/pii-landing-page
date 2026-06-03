"use client";

import BgGradient from "@/components/spacial-componets/bgGradient";
import IdentifierTracingAnimation from "@/components/spacial-componets/svgs/IdentifierTracing";
import IndianNumberOSINT from "@/components/spacial-componets/svgs/IndianNumberOSINT";
import { motion, Variants } from "framer-motion";
import { Activity, BellRing, CheckCircle, Smartphone, ShieldCheck } from "lucide-react"; // Assuming lucide-react is available

const HomeAdvantage = () => {
  const identifierTracingItems = [
    "Mobile Numbers (with integrated local lookup for subscriber & region details)",
    "Email Addresses",
    "Usernames & Aliases",
    "Cryptocurrency Wallets",
    "IP Addresses & Domains",
    "Comprehensive Internet Monitoring",
  ];

  const osintOperationsItems = [
    {
      title: "Active OSINT Operations",
      description:
        "Equipped with advanced interactive tools for real-time, in-field intelligence gathering, including live verification, digital footprint expansion, and immediate cross-platform data correlation.",
      icon: <Activity size={30} className="text-blue-500" />,
    },
    {
      title: "Real-Time Alerts & Threat Detection",
      description:
        "Immediate notifications when monitored entities show new activity or appear in new data sources.",
      icon: <BellRing size={30} className="text-blue-500" />,
    },
  ];

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    hover: { scale: 1.03, boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)" },
  };

  return (
    <section className="relative overflow-hidden bg-black py-24">
      <BgGradient>
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
                Advanced Capabilities
              </span>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Advanced Identifier Tracing
              </h2>
              <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-xl mb-8">
                Reveal complete digital footprints linked to:
              </p>

              <ul className="space-y-4">
                {identifierTracingItems.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 + 0.3 }} // Staggered animation
                    viewport={{ once: true }}
                    className="flex items-start gap-3 text-zinc-300 text-lg"
                  >
                    <CheckCircle
                      className="text-blue-500 flex-shrink-0 mt-1"
                      size={20}
                    />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Placeholder for Image Right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative flex justify-center lg:justify-end"
            >
             <IdentifierTracingAnimation />
            </motion.div>
          </div>
        </div>
      </BgGradient>

      {/* New Section: OSINT Operations and Real-Time Alerts */}
      <BgGradient className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] translate-x-1/2 rotate-[60deg] bg-gradient-to-br from-skt-500 via-blue-800 to-violet-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72rem]">
        <div className="container mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <span className="inline-block text-blue-400 font-semibold tracking-wider uppercase text-sm mb-4">
              Operational Intelligence
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Dynamic OSINT & Alerts
            </h2>
            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Empowering your team with cutting-edge tools for proactive intelligence gathering and immediate threat response.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {osintOperationsItems.map((item, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: idx * 0.2 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center backdrop-blur-sm shadow-lg hover:border-blue-500 transition-all duration-300"
              >
                <div className="mb-6 border p-3 rounded-full bg-blue-500/10  border-blue-500">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-zinc-400 text-base leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </BgGradient>

      {/* New Section: Indian Number OSINT */}
      <BgGradient>
        <div className="container mx-auto px-6 mt-24 lg:mt-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Visual Illustration Left */}
           <IndianNumberOSINT />

            {/* Content Right */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <span className="inline-block text-blue-400 font-semibold tracking-wider uppercase text-sm mb-4">
                OSINT Specialization
              </span>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
                Indian Number OSINT
              </h2>
              
              <div className="space-y-6">
                {[
                  { text: "Identifies ownership information, breach history, and social media linkages for Indian mobile numbers.", icon: "🔹" },
                  { text: "Actively checks the target number across 300+ services and applications.", icon: "🔹" },
                  { text: "Monitors recent data leaks and provides real-time insights into the number’s digital footprint.", icon: "🔹" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2  rounded-2xl hover:bg-white/[0.02] transition-colors group">
                    <span className="text-blue-500 text-xl">{item.icon}</span>
                    <p className="text-zinc-300 text-lg md:text-xl leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </BgGradient>
    </section>
  );
};

export default HomeAdvantage;
