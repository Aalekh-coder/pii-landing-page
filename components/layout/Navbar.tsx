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
  SheetFooter,
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
      <nav className="flex items-center gap-10 rounded-3xl border border-white/10 bg-black/40 px-6 py-3 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] w-[90vw] lg:w-fit lg:min-w-[1100px] justify-between transition-all duration-300">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="h-14 w-14">
            <Image
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
                  className="absolute top-full left-0 bg-black/80 backdrop-blur-xl border border-white/10 rounded-xl p-2 mt-4 min-w-[240px] shadow-2xl z-50"
                >
                  <div className="grid gap-1">
                    <Link
                      href="/training/osint"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-white/10 rounded-lg transition-colors group/item"
                    >
                      <Search
                        size={18}
                        className="text-blue-400 group-hover/item:scale-110 transition-transform"
                      />
                      <span className="text-sm">Osint training</span>
                    </Link>
                    <Link
                      href="/training/cyber-crime"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-white/10 rounded-lg transition-colors group/item"
                    >
                      <ShieldAlert
                        size={18}
                        className="text-red-400 group-hover/item:scale-110 transition-transform"
                      />
                      <span className="text-sm">Cyber Crime Training</span>
                    </Link>
                    <Link
                      href="/training/cyber-awareness"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-white/10 rounded-lg transition-colors group/item"
                    >
                      <BookOpen
                        size={18}
                        className="text-green-400 group-hover/item:scale-110 transition-transform"
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
                  className="absolute top-full -left-50 bg-black/80 backdrop-blur-xl border border-white/10 rounded-xl p-2 mt-4 min-w-[660px] shadow-2xl z-50"
                >
                  <div className="grid grid-cols-2 gap-3">
                    {serviceSectors.map((sector) => (
                      <Link
                        key={sector.label}
                        href={`/vertical/${sector.label.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                        className="flex items-start  gap-3 px-4 py-3 hover:bg-white/10 rounded-lg transition-colors group/item"
                      >
                        <div className="text-blue-400 group-hover/item:scale-110 transition-transform w-10 h-10 flex items-center justify-center">
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
                            <span className="text-[10px] text-blue-400 font-bold uppercase tracking-wider">
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

          <Link
            href="/contact"
            className="hover:text-blue-400 transition-colors font-medium"
          >
            Contact
          </Link>
        </div>

        {/* btn  */}

        {/* <div className="flex justify-center items-center gap-12 h-full "> */}
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
            <SheetContent
              side="top"
              className="bg-black text-white border-l border-white/20 "
            >
              <SheetHeader className="mb-6">
                <SheetTitle className="text-white text-2xl">
                  Navigation
                </SheetTitle>
                <SheetDescription className="text-gray-400">
                  Explore our services.
                </SheetDescription>
              </SheetHeader>
              <div className="flex flex-col gap-6 py-4 px-5 md:px-14">
                <SheetClose asChild>
                  <Link
                    href="/"
                    className="text-xl font-semibold hover:text-gray-300 transition-colors"
                  >
                    Home
                  </Link>
                </SheetClose>

                {/* Training Collapsible */}
                <div>
                  <button
                    onClick={() => toggleMobileSection("training")}
                    className="w-full flex items-center justify-between text-xl font-semibold mb-3 hover:text-blue-400 transition-colors"
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
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="ml-6 flex flex-col gap-4 pb-4">
                          <SheetClose asChild>
                            <Link
                              href="/training/osint"
                              className="flex items-center gap-3 text-lg hover:text-blue-400 transition-colors"
                            >
                              <Search size={20} className="text-blue-400" />{" "}
                              Osint training
                            </Link>
                          </SheetClose>
                          <SheetClose asChild>
                            <Link
                              href="/training/cyber-crime"
                              className="flex items-center gap-3 text-lg hover:text-blue-400 transition-colors"
                            >
                              <ShieldAlert size={20} className="text-red-400" />{" "}
                              Cyber Crime Training
                            </Link>
                          </SheetClose>
                          <SheetClose asChild>
                            <Link
                              href="/training/cyber-awareness"
                              className="flex items-center gap-3 text-lg hover:text-blue-400 transition-colors"
                            >
                              <BookOpen size={20} className="text-green-400" />{" "}
                              Cyber Awareness
                            </Link>
                          </SheetClose>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Vertical Collapsible */}
                <div>
                  <button
                    onClick={() => toggleMobileSection("vertical")}
                    className="w-full flex items-center justify-between text-xl font-semibold mb-3 hover:text-blue-400 transition-colors"
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
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="ml-6 flex flex-col gap-4 pb-4 overflow-scroll">
                          {serviceSectors.map((sector) => (
                            <SheetClose key={sector.label} asChild>
                              <Link
                                href={`/vertical/${sector.label.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                                className="flex gap-3 text-lg hover:text-blue-400 transition-colors items-start"
                              >
                                <div className="w-8 h-8 flex items-center justify-center text-blue-400">
                                  {renderIcon(sector.icon)}
                                </div>
                                <div className="flex flex-col">
                                  <p>{sector.label}</p>
                                  <p className="text-sm text-gray-500">{sector.description}</p>
                                </div>
                              </Link>
                            </SheetClose>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <SheetClose asChild>
                  <Link
                    href="/contact"
                    className="text-xl font-semibold hover:text-gray-300 transition-colors"
                  >
                    Contact
                  </Link>
                </SheetClose>
              </div>
              <SheetFooter>{/* Optional footer content */}</SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
