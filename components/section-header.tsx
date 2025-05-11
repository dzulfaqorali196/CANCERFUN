"use client";

import {
  motion,
  useAnimation,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { paragraphVariants, headerVariants } from "@/styles/motion";
import { FaClock, FaUser } from "react-icons/fa";
import { isValidDate } from "@/lib/utils";

interface Props {
  title1: string;
  title2: string;
  subtitle?: string;
  description: string;
  author?: string;
  date?: string;
}

export default function SectionHeader({
  title1,
  title2,
  subtitle,
  description,
  author,
  date,
}: Props) {
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
    const post_date = isValidDate(date)
      ? new Date(date!).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : "";
    if (post_date) {
      setValidDate(post_date);
    }
  }, [date]);

  return (
    <header className="w-full max-w-5xl mx-auto text-center mb-12">
      <div
        ref={ref}
        className="flex flex-col items-center justify-center w-full gap-6 max-w-3xl mx-auto mb-16"
      >
        <motion.h2
          className="text-3xl md:text-4xl font-normal inline-flex flex-wrap justify-center items-center gap-2 w-full"
          initial="hidden"
          variants={headerVariants}
          animate={controls}
        >
          <span className="text-center w-full flex flex-wrap justify-center items-center gap-2">
            {title1} <span className="text-[#a857ff]">{title2}</span>
          </span>
        </motion.h2>
        {subtitle && (
          <motion.h3
            className="text-2xl md:text-3xl font-normal inline-flex flex-wrap justify-center items-center gap-2 w-full"
            initial="hidden"
            variants={headerVariants}
            animate={controls}
          >
            <span className="text-center w-full flex flex-wrap justify-center items-center gap-2">
              {title1} <span className="text-[#a857ff]">{title2}</span>
            </span>
          </motion.h3>
        )}
        <motion.p
          className="text-lg sm:text-xl text-muted-foreground text-center w-full"
          variants={paragraphVariants}
          initial="hidden"
          animate={controls}
        >
          {description}
        </motion.p>
        {author || date ? (
          <motion.div
            variants={paragraphVariants}
            initial="hidden"
            animate={controls}
            className="text-sm text-muted-foreground flex flex-row items-center justify-center gap-2"
          >
            {author && (
              <div className="flex flex-row items-center gap-1">
                <FaUser />
                <div>{author}</div>
              </div>
            )}
            {date && validDate && (
              <div className="flex flex-row items-center gap-1">
                <FaClock />
                <div>{validDate}</div>
              </div>
            )}
          </motion.div>
        ) : null}
      </div>
    </header>
  );
}
