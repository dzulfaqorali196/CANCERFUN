"use client";

import {
  motion,
  useAnimation,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { headerVariants } from "@/styles/motion";
import { FileText } from "lucide-react";
import { ArticleDoc } from "@/types";
import Article from "@/components/project/article";
import { isValidDate } from "@/lib/utils";

interface DocContentProps {
  cat: string;
  slug: string;
  post: ArticleDoc;
}

export default function DocContent({ cat, slug, post }: DocContentProps) {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.1, once: true });
  const shouldReduceMotion = useReducedMotion();
  const [validDate, setValidDate] = useState("");

  useEffect(() => {
    if (inView && !shouldReduceMotion) {
      controls.start("visible");
    }
  }, [controls, inView, shouldReduceMotion]);

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
    <main className="lg:w-3/4">
      <motion.div
        ref={ref}
        className="prose prose-invert max-w-none bg-web3-darker rounded-xl p-8 border border-web3-gray/50"
        initial="hidden"
        animate={controls}
      >
        <motion.h1
          className="text-3xl md:text-4xl font-bold mb-6 flex items-center"
          variants={headerVariants}
        >
          <FileText className="h-8 w-8 text-web3-primary mr-3" />
          {post.title}
        </motion.h1>
        <div className="text-sm text-muted-foreground mb-4">
          {cat} - {slug}
        </div>
        {validDate && <span>{validDate}</span>}
        <Article contentHtml={post.contentHtml} />
      </motion.div>
    </main>
  );
}
