"use client";

import { ArticleDoc } from "@/types";
import {
  motion,
  useAnimation,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useRef } from "react";
import { paragraphVariants } from "@/styles/motion";
import PostCard from "@/components/blog/post";
import FeaturedCard from "@/components/blog/featured";

export default function BlogPosts({ posts }: { posts: ArticleDoc[] }) {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.1, once: true });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (inView && !shouldReduceMotion) {
      controls.start("visible");
    }
  }, [controls, inView, shouldReduceMotion]);

  const featuredPosts = posts.filter((post) => post.featured);
  const featuredPost =
    featuredPosts.length > 0
      ? featuredPosts.reduce((latest, post) =>
          new Date(post.date) > new Date(latest.date) ? post : latest
        )
      : posts.reduce((latest, post) =>
          new Date(post.date) > new Date(latest.date) ? post : latest
        );

  const nonFeaturedPosts = posts.filter((post) => post.id !== featuredPost.id);

  return (
    <div className="max-w-7xl mx-auto space-y-12" ref={ref}>
      {posts.length === 0 ? (
        <motion.p
          className="text-center text-muted-foreground"
          initial="hidden"
          animate={controls}
          variants={paragraphVariants}
        >
          No blog posts available.
        </motion.p>
      ) : (
        <>
          {/* Featured Post - Full Width */}
          <FeaturedCard
            key={featuredPost.id}
            post={featuredPost}
            index={0}
            motion={motion}
            shouldReduceMotion={shouldReduceMotion}
          />

          {/* Bento Grid Layout for Non-Featured Posts */}
          <div className="grid auto-rows-[500px] grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
            {nonFeaturedPosts.map((post, index) => {
              // Menentukan ukuran card berdasarkan posisi
              const isLarge = index % 5 === 0; // Setiap card kelipatan 5 akan besar
              const gridClass = isLarge ? "lg:col-span-8" : "lg:col-span-4";

              return (
                <div key={post.id} className={`${gridClass} h-full`}>
                  <PostCard
                    post={post}
                    index={index + 1}
                    motion={motion}
                    shouldReduceMotion={shouldReduceMotion}
                    isLarge={isLarge}
                  />
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
