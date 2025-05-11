"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { motion as motionType } from "framer-motion";
import { ArticleDoc } from "@/types";
import Link from "next/link";
import { isValidDate } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { MotionImage } from "@/components/ui/motion-image";

export default function FeaturedCard({
  post,
  index,
  motion,
  shouldReduceMotion,
}: {
  post: ArticleDoc;
  index: number;
  motion: typeof motionType;
  shouldReduceMotion: boolean | null;
}) {
  const [validDate, setValidDate] = useState("");
  useEffect(() => {
    const post_date = isValidDate(post.date)
      ? new Date(post.date).toLocaleDateString("en-US", {
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
                duration: 1.0,
                ease: "easeOut",
                delay: 0.3 + index * 0.2,
              },
            }
      }
    >
      <Link href={`/blog/${post.id}`} className="group block">
        <Card className="bg-black relative py-0 overflow-hidden border-web3-gray/50 transition-all duration-300 group-hover:border-web3-primary/50">
          <div className="flex flex-col md:flex-row">
            {post.coverImage && (
              <CardHeader className="p-0 gap-0 md:w-1/2 relative overflow-hidden">
                <div className="relative transition-transform duration-500 ease-out group-hover:scale-[1.02]">
                  <MotionImage
                    src={post.coverImage}
                    alt={`${post.title} cover`}
                    width={800}
                    height={600}
                    className="w-full h-64 md:h-full object-cover"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={
                      shouldReduceMotion
                        ? { opacity: 1, scale: 1 }
                        : {
                            opacity: 1,
                            scale: 1,
                            transition: {
                              duration: 1.0,
                              ease: "easeOut",
                              delay: 0.2 + index * 0.2,
                            },
                          }
                    }
                  />
                </div>
              </CardHeader>
            )}
            <div className="md:w-1/2 flex flex-col">
              <CardContent className="flex flex-col gap-2 p-6">
                <CardTitle className="text-3xl font-normal text-white transition-colors duration-300 group-hover:text-[#a857ff]">
                  {post.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  By {post.author} on {validDate ? validDate : ""}
                </p>
                {post.excerpt && (
                  <p className="text-gray-300">{post.excerpt}</p>
                )}
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <div className="flex items-center text-web3-primary transition-transform duration-300 group-hover:translate-x-1">
                  <span className="mr-2 text-sm font-medium">Read More</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </CardFooter>
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}
