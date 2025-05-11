"use client";

import { ArticleDoc } from "@/types";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const hoverVariants = {
  hover: {
    y: -5,
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

export default function PostRelated({ posts }: { posts: ArticleDoc[] }) {
  return (
    <div className="container py-20">
      <motion.div
        className="max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h2
          className="text-2xl font-normal mb-8"
          variants={itemVariants}
        >
          Related Posts
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
        >
          {posts.map((post) => (
            <motion.div
              key={post.id}
              variants={itemVariants}
              whileHover="hover"
              className="h-full"
            >
              <Link href={post.id} className="h-full block">
                <motion.div
                  className="bg-web3-darker border border-web3-gray rounded-lg shadow-md cursor-pointer h-full overflow-hidden"
                  variants={hoverVariants}
                >
                  <div className="flex flex-col md:flex-row h-full">
                    {/* Image Container */}
                    <div className="md:w-2/5 relative h-64 md:h-auto">
                      <Image
                        src={post.coverImage as string}
                        alt={`${post.title} cover`}
                        className="object-cover"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-20% to-black/60 md:bg-none" />
                      {/* Mobile Content */}
                      <div className="absolute inset-x-0 bottom-0 z-20 p-4 block md:hidden">
                        <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                          {post.title}
                        </h3>
                        {post.excerpt && (
                          <p className="text-gray-300 line-clamp-2">
                            {post.excerpt}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Desktop Content */}
                    <div className="md:w-3/5 p-6 hidden md:flex flex-col">
                      <h3 className="text-lg font-semibold mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      {post.excerpt && (
                        <p className="text-gray-400 line-clamp-3 flex-grow">
                          {post.excerpt}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
