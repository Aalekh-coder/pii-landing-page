"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  ChevronDown,
  Menu,
  Search,
  ShieldAlert,
  BookOpen,
  Shield,
  Vibrate,
  FileHeadphone,
  VibrateOff,
  KeyRound,
  ScanLine,
} from "lucide-react";
import { serviceSectors } from "@/data/layout/nav";

export default function Navbar() {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(
    null,
  );

  const toggleMobileSection = (section: string) => {
    setOpenMobileSection(openMobileSection === section ? null : section);
  };

  const renderIcon = (Icon: any) => {
    if (typeof Icon === "function") return <Icon />;
    return <Shield size={18} />;
  };

  return (
    <header className="fixed top-6 left-1/2 z-50 -translate-x-1/2">
      <nav className="flex items-center gap-3 rounded-3xl  border-blue-400/80 border-b  bg-black/40 px-6 py-3 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] w-[90vw] lg:w-fit lg:min-w-[90vw] justify-between transition-all duration-300 ">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="h-14 w-14">
            <Image
            loading="eager"
              src="/layout/nav/TSN LOGO.webp"
              width={1000}
              height={1000}
              alt="logo"
            />
          </div>

          <span className="text-xl font-semibold text-white">TSN Security</span>
        </Link>

        {/* for desktop  */}
        <div className="hidden lg:flex items-center gap-10 text-white">
          <Link
            href="/"
            className="hover:text-blue-400 transition-colors font-medium"
          >
            Home
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setHoveredMenu("training")}
            onMouseLeave={() => setHoveredMenu(null)}
          >
            <button className="flex items-center gap-1 hover:text-blue-400 transition-colors font-medium">
              Training{" "}
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${hoveredMenu === "training" ? "rotate-180" : ""}`}
              />
            </button>
            <AnimatePresence>
              {hoveredMenu === "training" && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute top-full -left-20 bg-black backdrop-blur-xl border-b border-blue-500 rounded-xl p-2 mt-4 min-w-[240px] shadow-2xl z-50"
                >
                  <div className="grid gap-1">
                    <Link
                      href="/training/osint"
                      className="flex items-center gap-3 px-4 py-3 border-b border-blue-400 hover:bg-white/10 hover:border-blue-600  rounded-lg transition-colors group/item"
                    >
                      <Search
                        size={18}
                        className="text-blue-400 group-hover/item:scale-120 transition-transform"
                      />
                      <span className="text-sm  duration-100">
                        Osint training
                      </span>
                    </Link>
                    <Link
                      href="/training/cyber-crime"
                      className="flex items-center gap-3 px-4 py-3 border-b border-blue-400 hover:bg-white/10 hover:border-blue-600  rounded-lg transition-colors group/item"
                    >
                      <ShieldAlert
                        size={18}
                        className="text-blue-400 group-hover/item:scale-120 transition-transform"
                      />
                      <span className="text-sm">Cyber Crime Training</span>
                    </Link>
                    <Link
                      href="/training/cyber-awareness"
                      className="flex items-center gap-3 px-4 py-3  hover:bg-white/10 hover:border-blue-600  rounded-lg transition-colors group/item"
                    >
                      <BookOpen
                        size={18}
                        className="text-blue-400 group-hover/item:scale-120 transition-transform"
                      />
                      <span className="text-sm">Cyber Awareness</span>
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div
            className="relative"
            onMouseEnter={() => setHoveredMenu("vertical")}
            onMouseLeave={() => setHoveredMenu(null)}
          >
            <button className="flex items-center gap-1 hover:text-blue-400 transition-colors font-medium">
              Vertical{" "}
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${hoveredMenu === "vertical" ? "rotate-180" : ""}`}
              />
            </button>
            <AnimatePresence>
              {hoveredMenu === "vertical" && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute top-5 -left-[20vw] bg-black backdrop-blur-xl border-b border-blue-500 rounded-xl w-[50vw] p-2 mt-4 min-w-[660px] shadow-2xl z-50"
                >
                  <div className="grid grid-cols-2 gap-3">
                    {serviceSectors.map((sector) => (
                      <Link
                        key={sector.label}
                        href={`/vertical/${sector.label.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                        className="flex items-center gap-3 px-4 py-3 border-b border-blue-400 hover:bg-white/10 hover:border-blue-600  rounded-lg transition-colors group/item"
                      >
                        <div className="text-blue-400 group-hover/item:scale-120 transition-transform w-10 h-10 flex items-center justify-center">
                          {renderIcon(sector.icon)}
                        </div>
                        <div className="flex flex-col">
                          <span className="text-lg font-medium">
                            {sector.label}
                          </span>
                          <span className="text-sm font-medium text-gray-500">
                            {sector.description}
                          </span>
                          {sector.new && (
                            <span className="text-[10px] bg-blue-400 text-white  w-10 flex items-center justify-center rounded-2xl font-bold uppercase tracking-wider ">
                              New
                            </span>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div
            className="relative"
            onMouseEnter={() => setHoveredMenu("reportLostMobile")}
            onMouseLeave={() => setHoveredMenu(null)}
          >
            <button className="flex items-center gap-1 hover:text-blue-400 transition-colors font-medium">
              Incidence Response{" "}
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${hoveredMenu === "reportLostMobile" ? "rotate-180" : ""}`}
              />
            </button>
            <AnimatePresence>
              {hoveredMenu === "reportLostMobile" && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute top-full -left-10 bg-black backdrop-blur-xl border-b border-blue-500 rounded-xl p-2 mt-4 min-w-[240px] shadow-2xl z-50"
                >
                  <div className="grid gap-1">
                    <Link
                      href="/reportLostMobile/reportLostMobile"
                      className="flex items-center gap-3 px-4 py-3 border-b border-blue-400 hover:bg-white/10 hover:border-blue-600  rounded-lg transition-colors group/item"
                    >
                      <Vibrate
                        size={18}
                        className="text-blue-400 group-hover/item:scale-120 transition-transform"
                      />
                      <span className="text-sm">Report Lost Mobile</span>
                    </Link>
                    <Link
                      href="/reportLostMobile/Lost Mobile Status Check"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-white/10 rounded-lg transition-colors group/item"
                    >
                      <FileHeadphone
                        size={18}
                        className="text-blue-400 group-hover/item:scale-120 transition-transform"
                      />
                      <span className="text-sm">Lost Mobile Status Check</span>
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div
            className="relative"
            onMouseEnter={() => setHoveredMenu("CEIR")}
            onMouseLeave={() => setHoveredMenu(null)}
          >
            <button className="flex items-center gap-1 hover:text-blue-400 transition-colors font-medium">
              CEIR Services
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${hoveredMenu === "CEIR" ? "rotate-180" : ""}`}
              />
            </button>
            <AnimatePresence>
              {hoveredMenu === "CEIR" && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute top-full left-0 bg-black backdrop-blur-xl border-b border-blue-500 rounded-xl p-2 mt-4 min-w-[240px] shadow-2xl z-50"
                >
                  <div className="grid gap-1">
                    <Link
                      href="/reportLostMobile/reportLostMobile"
                      className="flex items-center gap-3 px-4 py-3 border-b border-blue-400 hover:bg-white/10 hover:border-blue-600  rounded-lg transition-colors group/item"
                    >
                      <VibrateOff
                        size={18}
                        className="text-blue-400 group-hover/item:scale-120 transition-transform"
                      />
                      <span className="text-sm">Block Stolen</span>
                    </Link>
                    <Link
                      href="/reportLostMobile/Lost Mobile Status Check"
                      className="flex items-center gap-3 px-4 py-3 border-b border-blue-400 hover:bg-white/10 hover:border-blue-600  rounded-lg transition-colors group/item"
                    >
                      <KeyRound
                        size={18}
                        className="text-blue-400 group-hover/item:scale-120 transition-transform"
                      />
                      <span className="text-sm">Un-Block Found Mobile</span>
                    </Link>
                    <Link
                      href="/reportLostMobile/Lost Mobile Status Check"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-white/10 rounded-lg transition-colors group/item"
                    >
                      <ScanLine
                        size={18}
                        className="text-blue-400 group-hover/item:scale-120 transition-transform"
                      />
                      <span className="text-sm">Check Request Status</span>
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/contact"
            className="hover:text-blue-400 transition-colors font-medium"
          >
            Contact
          </Link>
          <Link
            href="/blog"
            className="hover:text-blue-400 transition-colors font-medium"
          >
            Blog
          </Link>
        </div>

        {/* btn  */}

        <div className="bg-gradient-to-b from-blue-800/40 to-transparent p-[4px] rounded-[16px] hidden lg:flex">
          <button className="group p-[4px] rounded-[12px] bg-gradient-to-b from-blue-700 to-blue-600 shadow-[0_2px_4px_rgba(0,0,0,0.7)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.6)] active:shadow-[0_0px_1px_rgba(0,0,0,0.8)] active:scale-[0.995] transition-all duration-200">
            <div className="bg-gradient-to-b from-blue-600 to-blue-700 rounded-[8px] px-3 py-2">
              <div className="flex gap-2 items-center">
                <span className="font-semibold text-white">Get Started</span>
              </div>
            </div>
          </button>
        </div>
        {/* </div> */}

        {/* for mobile  */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Menu color="white" />
            </SheetTrigger>
            <SheetContent className="bg-black text-white border-l border-white/20 ">
              <SheetHeader className="h-10">
                <SheetTitle className=""></SheetTitle>
                <SheetDescription className="text-gray-400">
                  <Link href="/" className="flex items-center gap-2">
                    <div className="h-10 w-10">
                      <Image
                      loading="eager"
                        src="/layout/nav/TSN LOGO.webp"
                        width={1000}
                        height={1000}
                        alt="logo"
                      />
                    </div>

                    <span className="text-xl font-semibold text-white">
                      TSN Security
                    </span>
                  </Link>
                </SheetDescription>
              </SheetHeader>
              <div className="flex flex-col gap-6 px-5 mt-8 h-[calc(100vh-120px)] overflow-y-auto scrollbar-hide">
                <SheetClose asChild>
                  <Link
                    href="/"
                    className="text-lg font-medium hover:text-blue-400 transition-colors"
                  >
                    Home
                  </Link>
                </SheetClose>

                {/* Training Section */}
                <div className="space-y-4">
                  <button
                    onClick={() => toggleMobileSection("training")}
                    className="flex items-center justify-between w-full text-lg font-medium"
                  >
                    Training
                    <ChevronDown
                      size={20}
                      className={`transition-transform duration-300 ${openMobileSection === "training" ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {openMobileSection === "training" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden flex flex-col gap-4 pl-4 border-l border-blue-500/30 ml-1"
                      >
                        <SheetClose asChild>
                          <Link
                            href="/training/osint"
                            className="flex items-center gap-3 text-gray-400"
                          >
                            <Search size={18} className="text-blue-400" /> Osint
                            training
                          </Link>
                        </SheetClose>
                        <SheetClose asChild>
                          <Link
                            href="/training/cyber-crime"
                            className="flex items-center gap-3 text-gray-400"
                          >
                            <ShieldAlert size={18} className="text-blue-400" />{" "}
                            Cyber Crime Training
                          </Link>
                        </SheetClose>
                        <SheetClose asChild>
                          <Link
                            href="/training/cyber-awareness"
                            className="flex items-center gap-3 text-gray-400"
                          >
                            <BookOpen size={18} className="text-blue-400" />{" "}
                            Cyber Awareness
                          </Link>
                        </SheetClose>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Vertical Section */}
                <div className="space-y-4">
                  <button
                    onClick={() => toggleMobileSection("vertical")}
                    className="flex items-center justify-between w-full text-lg font-medium"
                  >
                    Vertical
                    <ChevronDown
                      size={20}
                      className={`transition-transform duration-300 ${openMobileSection === "vertical" ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {openMobileSection === "vertical" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden flex flex-col gap-4 pl-4 border-l border-blue-500/30 ml-1"
                      >
                        {serviceSectors.map((sector) => (
                          <SheetClose key={sector.label} asChild>
                            <Link
                              href={`/vertical/${sector.label.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                              className="flex items-center gap-3 text-gray-400"
                            >
                              <div className="text-blue-400 shrink-0">
                                {renderIcon(sector.icon)}
                              </div>
                              <div className="flex flex-col">
                                <span className="text-sm">{sector.label}</span>
                                {sector.new && (
                                  <span className="text-[8px] bg-blue-400 text-white w-fit px-1 rounded-sm font-bold uppercase">
                                    New
                                  </span>
                                )}
                              </div>
                            </Link>
                          </SheetClose>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Incidence Response Section */}
                <div className="space-y-4">
                  <button
                    onClick={() => toggleMobileSection("incidence")}
                    className="flex items-center justify-between w-full text-lg font-medium"
                  >
                    Incidence Response
                    <ChevronDown
                      size={20}
                      className={`transition-transform duration-300 ${openMobileSection === "incidence" ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {openMobileSection === "incidence" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden flex flex-col gap-4 pl-4 border-l border-blue-500/30 ml-1"
                      >
                        <SheetClose asChild>
                          <Link
                            href="/reportLostMobile/reportLostMobile"
                            className="flex items-center gap-3 text-gray-400"
                          >
                            <Vibrate size={18} className="text-blue-400" />{" "}
                            Report Lost Mobile
                          </Link>
                        </SheetClose>
                        <SheetClose asChild>
                          <Link
                            href="/reportLostMobile/Lost Mobile Status Check"
                            className="flex items-center gap-3 text-gray-400"
                          >
                            <FileHeadphone
                              size={18}
                              className="text-blue-400"
                            />{" "}
                            Status Check
                          </Link>
                        </SheetClose>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* CEIR Services Section */}
                <div className="space-y-4">
                  <button
                    onClick={() => toggleMobileSection("ceir")}
                    className="flex items-center justify-between w-full text-lg font-medium"
                  >
                    CEIR Services
                    <ChevronDown
                      size={20}
                      className={`transition-transform duration-300 ${openMobileSection === "ceir" ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {openMobileSection === "ceir" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden flex flex-col gap-4 pl-4 border-l border-blue-500/30 ml-1"
                      >
                        <SheetClose asChild>
                          <Link
                            href="/reportLostMobile/reportLostMobile"
                            className="flex items-center gap-3 text-gray-400"
                          >
                            <VibrateOff size={18} className="text-blue-400" />{" "}
                            Block Stolen
                          </Link>
                        </SheetClose>
                        <SheetClose asChild>
                          <Link
                            href="/reportLostMobile/Lost Mobile Status Check"
                            className="flex items-center gap-3 text-gray-400"
                          >
                            <KeyRound size={18} className="text-blue-400" />{" "}
                            Un-Block Found Mobile
                          </Link>
                        </SheetClose>
                        <SheetClose asChild>
                          <Link
                            href="/reportLostMobile/Lost Mobile Status Check"
                            className="flex items-center gap-3 text-gray-400"
                          >
                            <ScanLine size={18} className="text-blue-400" />{" "}
                            Check Request Status
                          </Link>
                        </SheetClose>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <SheetClose asChild>
                  <Link
                    href="/contact"
                    className="text-lg font-medium hover:text-blue-400 transition-colors"
                  >
                    Contact
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/blog"
                    className="text-lg font-medium hover:text-blue-400 transition-colors"
                  >
                    Blog
                  </Link>
                </SheetClose>

                <div className="mt-auto pb-10">
                  <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-4 rounded-2xl shadow-lg active:scale-95 transition-all">
                    Get Started
                  </button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
