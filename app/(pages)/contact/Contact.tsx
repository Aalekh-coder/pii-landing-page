"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#070b2d] py-24 pt-32 lg:pt-40">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-32 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[180px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Contact Info Card */}
          <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
            {/* Glass Reflection */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />

            {/* Glow Border */}
            <div className="absolute inset-0 rounded-[32px] shadow-[0_0_40px_rgba(168,85,247,0.25)]" />

            <div className="relative">
              <span className="mb-3 inline-block text-sm text-blue-300">
                Contact Info Section
              </span>

              <h2 className="mb-4 text-4xl md:text-6xl font-bold text-white">
                Get in Touch
              </h2>

              <p className="max-w-md text-lg text-slate-300">
                We're here to discuss your project and bring your ideas to life
                with premium design & development.
              </p>

              <div className="mt-12 space-y-6">
                <div className="flex items-center gap-4 text-slate-300">
                  <Mail className="h-5 w-5 text-blue-400" />
                  info@mrmintelligence.com
                </div>

                <div className="flex items-center gap-4 text-slate-300">
                  <MapPin className="h-5 w-5 text-blue-400" />
                  Mumbai, Jaipur, India
                </div>

                <div className="flex items-center gap-4 text-slate-300">
                  <Phone className="h-5 w-5 text-blue-400" />
                  +91 98765 43210
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />

            <div className="relative">
              <span className="mb-3 inline-block text-sm text-blue-300">
                Contact Form
              </span>

              <form className="space-y-5">
                <input
                  placeholder="Your Name*"
                  className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-2 text-white outline-none placeholder:text-slate-400 focus:border-blue-500"
                />
                <input
                  placeholder="Email Address*"
                  className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-2 text-white outline-none placeholder:text-slate-400 focus:border-blue-500"
                />
                <input
                  placeholder="Your Website (Optional)"
                  className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-2 text-white outline-none placeholder:text-slate-400 focus:border-blue-500"
                />

                <textarea
                  placeholder="Write your message..."
                  rows={2}
                  className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white outline-none placeholder:text-slate-400 focus:border-blue-500"
                />

                <button
                  type="submit"
                  className="w-full rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-4 text-lg font-semibold text-white shadow-blue-600 transition-all hover:scale-[1.02]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


