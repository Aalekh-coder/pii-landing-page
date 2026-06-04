"use client"

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Linkedin,
  Github,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Quick Links",
      links: [
        { label: "Home", href: "/" },
        { label: "OSINT Training", href: "/training/osint" },
        { label: "Cyber Crime", href: "/training/cyber-crime" },
        { label: "Awareness", href: "/training/cyber-awareness" },
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Intelligence",
      links: [
        { label: "OSINT Analysis", href: "#" },
        { label: "Crypto Tracing", href: "#" },
        { label: "Vehicle Info", href: "#" },
        { label: "Domain Intelligence", href: "#" },
        { label: "IP Investigation", href: "#" },
        { label: "Nodal Lookup", href: "#" },
      ],
    },
  ];

  return (
    <footer className="relative bg-[#070d1a] text-white overflow-hidden border-t border-blue-500/20">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cyan-600/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-6 pt-20 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Company Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative h-14 w-14">
                <Image
                  src="/layout/nav/TSN LOGO.webp"
                  width={56}
                  height={56}
                  alt="TSN Logo"
                  className="transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <span className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">
                TSN Security
              </span>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
              Next-generation multi-domain reconnaissance platform. We provide
              advanced tools for deep cyber investigations and real-time threat
              intelligence across all layers of the web.
            </p>
            <div className="flex gap-3">
              {[Linkedin, Twitter, Facebook, Github].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-zinc-400 hover:text-blue-400 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300"
                >
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold text-lg mb-8 relative inline-block">
                {section.title}
                <span className="absolute -bottom-2 left-0 w-8 h-1 bg-blue-500 rounded-full" />
              </h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group flex items-center text-zinc-400 hover:text-blue-400 transition-colors duration-200"
                    >
                      <ChevronRight
                        size={14}
                        className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 mr-2"
                      />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div className="space-y-8">
            <h3 className="text-white font-semibold text-lg relative inline-block">
              Contact Details
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-blue-500 rounded-full" />
            </h3>
            <ul className="space-y-5">
              <li className="flex gap-4">
                <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 uppercase font-bold tracking-wider mb-1">
                    Phone
                  </p>
                  <p className="text-sm text-zinc-300 hover:text-white transition-colors">
                    +91 XXX XXX XXXX
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 uppercase font-bold tracking-wider mb-1">
                    Email
                  </p>
                  <p className="text-sm text-zinc-300 hover:text-white transition-colors">
                    info@tsnsecurity.com
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 uppercase font-bold tracking-wider mb-1">
                    Office
                  </p>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    New Delhi, India
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-500 text-sm">
            © {currentYear} <span className="text-zinc-300 font-medium">TSN Security</span>. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-zinc-500">
            <Link href="#" className="hover:text-blue-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-blue-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-blue-400 transition-colors">
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer