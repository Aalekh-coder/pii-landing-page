"use client";

import { blogsPost } from "@/data/blog";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  return (
 
      <div className="max-w-5xl mx-auto px-4 py-12 pt-32 md:pt-34 lg:pt-38 relative">

 <div className="absolute inset-0">
        <div className="absolute left-1/2 top-32 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[180px]" />
      </div>

        <div className="mb-12 border-b border-blue-500 pb-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white mb-4">
            Latest Updates
          </h1>
          <p className="text-lg text-slate-300">
            Discover stories, thinking, and expertise from our engineering team.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {blogsPost.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col items-start justify-between border border-gray-50/20 shadow-2xl rounded-2xl"
            >
              <div className="relative w-full aspect-video mb-6 overflow-hidden rounded-2xl">
                <Link href={`/blog/${post.id}`}>
                  <Image
                    src={post.image}
                    alt={post.metaTitle || post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </Link>
              </div>
              <div className="flex items-center gap-x-4 text-xs px-4">
                <time dateTime={post.date} className="text-blue-500">
                  {post.date}
                </time>
                <span className="z-10 rounded-full border border-blue-500 px-3 py-1.5 font-medium text-white hover:bg-slate-200">
                  {post.category}
                </span>
              </div>
              <div className="relative px-4">
                <h3 className="mt-3 text-xl font-semibold leading-6 text-white group-hover:text-slate-300">
                  <a href={`/blog/${post.id}`}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-slate-400">
                  {post.description}
                </p>
              </div>

              <Link href={`/blog/${post.id}`} className="my-5 px-4 hover:scale-110 hover:text-blue-200 duration-300">Read More</Link>
            </article>
          ))}
        </div>
      </div>
  );
};

export default Blog;
