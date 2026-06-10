"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight,  TrendingUp } from "lucide-react";

export default function BlogPage() {
  const posts = [
    {
      category: "Investigation",
      date: "October 14, 2024",
      title: "Decoding the Lazarus APT's Latest Lateral Movement",
      image:
        "https://i.pinimg.com/736x/54/8b/6f/548b6f51f6559787aa0db8a380c6ac67.jpg",
    },
    {
      category: "Infrastructure",
      date: "October 12, 2024",
      title: "Securing Multi-Cloud Environments: A Zero Trust Framework",
      image:
        "https://i.pinimg.com/736x/57/4d/6c/574d6cbe610836c845d8c32a3a202ff6.jpg",
    },
    {
      category: "Training",
      date: "October 10, 2024",
      title: "The 2025 CEIR Curriculum: Bridging the Gap in Incident Response",
      image:
        "https://i.pinimg.com/736x/ad/08/1c/ad081ce1f8037a80ba08bcbeeefdead7.jpg",
      featured: true,
    },
  ];

  return (
    <main className="min-h-screen bg-[#050B11] text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 lg:px-8 pt-32 lg:pt-36">
        {/* HERO */}
        <section className="overflow-hidden rounded-xl border border-white/10 bg-[#0B1219]">
          <div className="grid lg:grid-cols-2">
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <span className="mb-6 w-fit border border-blue-400/40 rounded-lg bg-blue-500/10 px-3 py-2 text-xs tracking-[4px] text-blue-200 uppercase">
                AI Security
              </span>

              <h1 className="max-w-lg text-xl font-semibold leading-tight">
                Project Chimera: Analyzing New Polymorphic Ransomware Vectors
              </h1>

              <p className="mt-6 max-w-lg text-gray-400">
                Our threat intelligence team has identified a sophisticated
                strain of ransomware that utilizes neural-network-based
                obfuscation to evade standard heuristic detection.
              </p>

              <Link
                href="#"
                className="mt-8 flex w-fit items-center gap-3 rounded bg-[#4476ff] px-6 py-3 font-medium text-white transition hover:opacity-90"
              >
                Read Detailed Analysis
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="relative min-h-100">
              <Image
                src="/blog/blog-hero.jpg"
                alt="hero image"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* SECTION HEADER */}
        <div className="mt-16 mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-6 w-1 rounded-full bg-blue-300" />

            <h2 className="text-lg font-medium">Latest Updates</h2>
          </div>

          <Link
            href="#all-blogs"
            className="text-xs tracking-[3px] text-blue-200 uppercase"
          >
            View All Intelligence
          </Link>
        </div>

        {/* CONTENT GRID */}
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr_280px]">
          {/* LEFT */}
          <div className="space-y-6 lg:col-span-2">
            {/* top row */}
            <div className="grid gap-6 md:grid-cols-2">
              {posts.slice(0, 2).map((post) => (
                <div
                  key={post.title}
                  className="overflow-hidden rounded-lg border border-white/10 bg-[#111820]"
                >
                  <div className="relative h-52">
                    <Image
                      src={post.image}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-5">
                    <span className="border border-blue-300/20 bg-black/30 px-3 py-1 rounded-lg">
                      {post.category}
                    </span>

                    <p className="mt-4 text-sm text-gray-500">{post.date}</p>

                    <h3 className="mt-3 text-lg font-medium">{post.title}</h3>

                    <Link
                      href="#"
                      className="mt-4 inline-flex items-center gap-2 text-blue-400"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* featured */}
            <article className="overflow-hidden rounded-lg border border-white/10 bg-[#111820]">
              <div className="grid md:grid-cols-2">
                <div className="relative min-h-87.5">
                  <Image
                    src="https://i.pinimg.com/736x/ad/08/1c/ad081ce1f8037a80ba08bcbeeefdead7.jpg"
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-8">
                  <span className="border border-blue-300/20 bg-black/30 px-3 py-1 text-xs tracking-[3px]">
                    Training
                  </span>

                  <p className="mt-6 text-sm text-gray-500">October 10, 2024</p>

                  <h3 className="mt-4 text-2xl font-medium">
                    The 2025 CEIR Curriculum: Bridging the Gap in Incident
                    Response
                  </h3>

                  <p className="mt-6 text-gray-400">
                    Our updated training protocols now include adversarial AI
                    simulation and live-fire cyber range exercises.
                  </p>

                  <Link
                    href="#"
                    className="mt-6 inline-flex items-center gap-2 text-blue-200"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </article>
          </div>

          {/* SIDEBAR */}
          <aside className="space-y-6">
            {/* Threat */}
            <div className="rounded-lg border border-[#e39d9d]/30 bg-[#171E25] p-6">
              <h3 className="mb-6 text-xs tracking-[4px] uppercase text-gray-400">
                Global Threat Level
              </h3>

              <div className="flex items-center justify-between">
                <span className="font-medium text-blue-300">HIGH</span>

                <span className="text-gray-400">Level 4/5</span>
              </div>

              <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[80%] bg-blue-300" />
              </div>

              <p className="mt-5 text-sm text-gray-400">
                Increased ransomware activity targeting critical energy
                infrastructure in Western Europe.
              </p>
            </div>

            {/* Trending */}
            <div className="rounded-lg bg-[#171E25] p-6">
              <div className="mb-5 flex items-center gap-2">
                <TrendingUp size={16} />
                <span>Trending Research</span>
              </div>

              <div className="space-y-6">
                {[
                  "The Emergence of Deepfake-as-a-Service in Phishing Campaigns",
                  "Quantum-Resistant Cryptography",
                  "Supply Chain Vulnerabilities in Open Source AI Libraries",
                ].map((item, i) => (
                  <div key={item}>
                    <p className="mb-2 text-sm text-gray-500">0{i + 1}</p>

                    <h4 className="font-medium">{item}</h4>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="rounded-lg bg-[#1559f7] p-6 text-white">
              <h3 className="font-medium">Request a Threat Assessment</h3>

              <p className="mt-4 text-sm">
                Get a confidential evaluation of your current security posture
                from our elite response team.
              </p>

              <button className="mt-6 w-full rounded bg-blue-700 py-3 text-white">
                Contact Services
              </button>
            </div>
          </aside>
        </div>
      </div>

     
      <section className="mx-auto max-w-5xl px-8 pb-5" id="all-blogs">
        <div className="mt-16 mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-6 w-1 rounded-full bg-blue-300" />

            <h2 className="text-lg font-medium">All blogs</h2>
          </div>

         
        </div>

        <div className="space-y-6 lg:col-span-2">
          {/* top row */}
          <div className="grid gap-6 md:grid-cols-3">
            {posts.map((post) => (
              <div
                key={post.title}
                className="overflow-hidden rounded-lg border border-white/10 bg-[#111820]"
              >
                <div className="relative h-52">
                  <Image
                    src={post.image}
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-5">
                  <span className="border border-blue-300/20 bg-black/30 px-3 py-1 rounded-lg">
                    {post.category}
                  </span>

                  <p className="mt-4 text-sm text-gray-500">{post.date}</p>

                  <h3 className="mt-3 text-lg font-medium">{post.title}</h3>

                  <Link
                    href="#"
                    className="mt-4 inline-flex items-center gap-2 text-blue-400"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
