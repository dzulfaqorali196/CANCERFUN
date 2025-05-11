import { Card, CardTitle } from "@/components/ui/card";

import type { motion as motionType } from "framer-motion";
import { ArticleDoc } from "@/types";
import Link from "next/link";
import { cn, isValidDate } from "@/lib/utils";
import { useEffect, useState } from "react";
import { MotionImage } from "@/components/ui/motion-image";
import { ArrowRight } from "lucide-react";

export default function PostCard({
  post,
  index,
  motion,
  shouldReduceMotion,
  isLarge = false,
}: {
  post: ArticleDoc;
  index: number;
  motion: typeof motionType;
  shouldReduceMotion: boolean | null;
  isLarge?: boolean;
}) {
  const [validDate, setValidDate] = useState("");
  useEffect(() => {
    const post_date = isValidDate(post.date)
      ? new Date(post.date!).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : "";
    if (post_date) {
      setValidDate(post_date);
    }
  }, [post.date]);

  return (
    <motion.div
      key={post.id}
      initial={{ opacity: 0, y: 20 }}
      animate={
        shouldReduceMotion
          ? { opacity: 1, y: 0 }
          : {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                ease: "easeOut",
                delay: 0.2 + index * 0.1,
              },
            }
      }
      className="h-full"
    >
      <Link href={`/blog/${post.id}`} className="group block h-full">
        <Card
          className={cn(
            "bg-web3-darker py-0 border-web3-gray/50 transition-all duration-300 group-hover:border-web3-primary/50",
            "h-[500px] overflow-hidden"
          )}
        >
          <div className="relative w-full h-full flex flex-col">
            {/* Thumbnail Image Container - Fixed Height */}
            <div className="relative w-full h-[60%]">
              {post.coverImage && (
                <div
                  className={cn(
                    "absolute inset-0 transition-transform duration-500 ease-out",
                    "group-hover:scale-[1.02]"
                  )}
                >
                  <MotionImage
                    src={post.coverImage}
                    alt={`${post.title} cover`}
                    className="object-cover"
                    fill
                    sizes="100vw"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      transition: { duration: 0.8, ease: "easeOut" },
                    }}
                  />
                </div>
              )}
            </div>

            {/* Content Section - Fixed Height */}
            <div className="relative h-[40%] p-6 flex flex-col bg-web3-darker">
              <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-web3-darker to-transparent" />

              <CardTitle
                className={cn(
                  "text-white transition-colors duration-300 group-hover:text-[#a857ff] mb-3 font-normal",
                  isLarge ? "text-2xl" : "text-xl"
                )}
              >
                {post.title}
              </CardTitle>

              {post.excerpt && (
                <p className="text-gray-300 line-clamp-2 mb-3">
                  {post.excerpt}
                </p>
              )}

              <div className="mt-auto flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <span>{post.author}</span>
                  <span>•</span>
                  <span>{validDate}</span>
                </div>

                <div className="flex items-center text-web3-primary transition-transform duration-300 group-hover:translate-x-1">
                  <span className="mr-2 text-sm font-medium">Read More</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}
