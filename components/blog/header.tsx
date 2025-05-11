"use client";

import {
  motion,
  useAnimation,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useRef } from "react";

import "highlight.js/styles/github-dark.css";
import "@/styles/blog.css";

import { ArticleDoc } from "@/types";
import { headerVariants } from "@/styles/motion";
import { MotionImage } from "@/components/ui/motion-image";

export default function PostHeader({ post }: { post: ArticleDoc }) {
  const controls = useAnimation();
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.1, once: true });

  useEffect(() => {
    if (inView && !shouldReduceMotion) {
      controls.start("visible");
    }
  }, [controls, inView, shouldReduceMotion]);

  const coverImage = post.coverImage
    ? `/api/optimize?url=${post.coverImage}`
    : "/images/blog-cover-dummy.jpg";

  return (
    <div ref={ref} className="relative w-full h-[400px]">
      <MotionImage
        src={coverImage}
        alt={`${post.title} cover`}
        className="w-full h-full object-cover"
        width={1920}
        height={1080}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={
          shouldReduceMotion
            ? { opacity: 1, scale: 1 }
            : {
                opacity: 1,
                scale: 1,
                transition: { duration: 1.0, ease: "easeOut" },
              }
        }
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black to-black/60" />
      <div className="absolute z-20 inset-0 flex flex-col items-center justify-center text-center px-4 max-w-3xl mx-auto gap-3 mt-10">
        <motion.h2
          className="text-[#a857ff] text-3xl md:text-5xl font-normal flex flex-col items-center justify-center text-center gap-3"
          initial="hidden"
          variants={headerVariants}
          animate={controls}
        >
          {post.title}
          {post.excerpt && (
            <span className="text-lg mt-2 font-normal text-white/80">
              {post.excerpt}
            </span>
          )}
        </motion.h2>
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="text-white text-xs font-medium bg-web3-dark/70 rounded-full px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
