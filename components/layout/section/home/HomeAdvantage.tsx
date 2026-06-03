"use client";

import BgGradient from "@/components/spacial-componets/bgGradient";
import CryptoInvestigationVisual from "@/components/spacial-componets/svgs/CryptoInvestigationVisual";
import DomainIntelligenceVisual from "@/components/spacial-componets/svgs/DomainIntelligenceVisual";
import IdentifierTracingAnimation from "@/components/spacial-componets/svgs/IdentifierTracing";
import IndianNumberOSINT from "@/components/spacial-componets/svgs/IndianNumberOSINT";
import NodalLookupAnimation from "@/components/spacial-componets/svgs/NodalLookupAnimation";
import UtilityIntelligenceAnimation from "@/components/spacial-componets/svgs/UtilityIntelligenceAnimation";
import { motion, Variants } from "framer-motion";
import {
  Activity,
  BellRing,
  CheckCircle,
  Globe,
  Mail,
  History,
  Wallet,
  Network,
  Server,
  CarFront,
  Tv,
  Flame,
  ShieldAlert,
  PhoneCall,
} from "lucide-react";

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

  const intelligenceSpecialties = [
    {
      title: "Indian Number OSINT",
      description:
        "Identifies ownership, breach history, and social linkages across 300+ services with real-time digital footprint insights.",
      icon: <CheckCircle size={24} className="text-blue-500" />,
    },
    {
      title: "International Intelligence",
      description:
        "OSINT collection on global numbers using sourced datasets to support cross-border investigations and scam detection.",
      icon: <Globe size={24} className="text-blue-500" />,
    },
    {
      title: "Email Intelligence",
      description:
        "Analyzes leaked credentials and exposure in cyber incidents to determine if an email is compromised or malicious.",
      icon: <Mail size={24} className="text-blue-500" />,
    },
    {
      title: "Vehicle Intelligence",
      description:
        "Retrieves owner history, RC status, and traffic violations to assist in surveillance operations and case mapping.",
      icon: <CarFront size={24} className="text-blue-500" />,
    },
  ];

  const infrastructureItems = [
    {
      title: "Domain Intelligence",
      description:
        "Analyzes registration timelines and asset age to identify newly created fraud infrastructure and campaign stability.",
      icon: <History size={24} className="text-blue-500" />,
    },
    {
      title: "Hosting Analysis",
      description:
        "Maps backend IPs and technical stacks to uncover linked malicious networks and domains sharing the same server infrastructure.",
      icon: <Server size={24} className="text-blue-500" />,
    },
  ];

  const cryptoItems = [
    {
      title: "Blockchain Tracing",
      description:
        "Tracks wallet activity and payment trails across the blockchain to support financial attribution and identify laundering pathways.",
      icon: <Wallet size={24} className="text-blue-500" />,
    },
    {
      title: "Wallet Lifecycle",
      description:
        "Analyzes registration history to distinguish between long-term assets and throwaway wallets used for short-term criminal campaigns.",
      icon: <History size={24} className="text-blue-500" />,
    },
    {
      title: "Threat Correlation",
      description:
        "Compares multiple addresses to identify shared counterparties and paths, linking separate incidents to the same threat actor.",
      icon: <Network size={24} className="text-blue-500" />,
    },
  ];

  const miscellaneousItems = [
    {
      title: "DTH Information",
      description:
        "Retrieves subscriber data from major Indian DTH providers to correlate TV subscriptions with personal identifiers for address confirmation.",
      icon: <Tv size={24} className="text-blue-500" />,
    },
    {
      title: "Utility Profiling",
      description:
        "Identifies active LPG connections (HP, Indane, Bharat) to link utility services to households for background profiling and forensic verification.",
      icon: <Flame size={24} className="text-blue-500" />,
    },
    {
      title: "Investigative Toolkit",
      description:
        "Advanced tools for real-time GPS/IP tracking, FootMRM movement monitoring, and authorized remote device verification for LEA use.",
      icon: <ShieldAlert size={24} className="text-blue-500" />,
    },
  ];

  const nodalLookupItems = [
    {
      title: "Nodal Officer Database",
      description:
        "Comprehensive and up-to-date database of nodal officers for Indian telecom and ISP service providers, facilitating quick contact for lawful requests and escalations.",
      icon: <PhoneCall size={24} className="text-blue-500" />,
    },
  ];


  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
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
              Empowering your team with cutting-edge tools for proactive
              intelligence gathering and immediate threat response.
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
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Global Intelligence Depth
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {intelligenceSpecialties.map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="p-4 rounded-2xl hover:bg-white/[0.03] border border-white/5 transition-colors group"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      {item.icon}
                      <h4 className="text-white font-bold">{item.title}</h4>
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </BgGradient>

      {/* New Section: Infrastructure & Technical Intelligence */}
      <BgGradient>
        <div className="container mx-auto px-6 mt-24 lg:mt-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-blue-400 font-semibold tracking-wider uppercase text-sm mb-4">
                Infrastructure OSINT
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Technical Footprint Analysis
              </h2>
              <p className="text-zinc-400 text-lg mb-10 max-w-xl">
                Deep-dive into the technical backend to identify infrastructure
                longevity and cross-campaign connections.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {infrastructureItems.map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-blue-500/50 transition-all group"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
                        {item.icon}
                      </div>
                      <h4 className="text-white font-bold">{item.title}</h4>
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Visual Placeholder/Illustration Right */}
            <DomainIntelligenceVisual />
          </div>
        </div>
      </BgGradient>

      {/* New Section: Crypto & Blockchain Intelligence */}
      <BgGradient className="relative right-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-900/20 via-indigo-900/20 to-transparent opacity-30 sm:right-[calc(50%-30rem)] sm:w-[72rem]">
        <div className="container mx-auto px-6 mt-24 lg:mt-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Visual Left - Themed Placeholder */}
            <CryptoInvestigationVisual />

            {/* Content Right */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <span className="inline-block text-blue-400 font-semibold tracking-wider uppercase text-sm mb-4">
                Blockchain OSINT
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Crypto Investigation & Tracing
              </h2>

              <div className="space-y-4">
                {cryptoItems.map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-blue-500/40 transition-all group"
                  >
                    <div className="flex items-center gap-4 mb-2">
                      <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
                        {item.icon}
                      </div>
                      <h4 className="text-white font-bold">{item.title}</h4>
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </BgGradient>

      {/* New Section: Miscellaneous & Specialized Tools */}
      <BgGradient>
        <div className="container mx-auto px-6 mt-24 lg:mt-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-blue-400 font-semibold tracking-wider uppercase text-sm mb-4">
                Specialized Utility OSINT
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Utility & Investigative Toolkit
              </h2>
              <p className="text-zinc-400 text-lg mb-10 max-w-xl">
                Broaden your investigative reach with specialized lookups for utility connections and advanced real-time field tools.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {miscellaneousItems.map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-blue-500/50 transition-all group"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
                        {item.icon}
                      </div>
                      <h4 className="text-white font-bold">{item.title}</h4>
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Visual Right Placeholder */}
            <UtilityIntelligenceAnimation />
          </div>
        </div>
      </BgGradient>

      {/* New Section: Nodal Lookup Intelligence */}
      <BgGradient className="relative right-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-900/20 via-purple-900/20 to-transparent opacity-30 sm:right-[calc(50%-30rem)] sm:w-[72rem]">
        <div className="container mx-auto px-6 mt-24 lg:mt-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Visual Left - Themed Placeholder */}
           <NodalLookupAnimation />

            {/* Content Right */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <span className="inline-block text-blue-400 font-semibold tracking-wider uppercase text-sm mb-4">
                Telecom & ISP Intelligence
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Nodal Officer Lookup
              </h2>

              <div className="space-y-4">
                {nodalLookupItems.map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-blue-500/40 transition-all group"
                  >
                    <div className="flex items-center gap-4 mb-2">
                      <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
                        {item.icon}
                      </div>
                      <h4 className="text-white font-bold">{item.title}</h4>
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
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
