"use client";

import { Button } from "@/components/ui/button";
import { SiteSettings } from "@/constants/settings";
import { SiSolana } from "react-icons/si";
import { FaGlobe } from "react-icons/fa6";

import {
  motion,
  useAnimation,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useRef } from "react";
import {
  headerVariants,
  paragraphVariants,
  statVariants,
  blurVariants,
} from "@/styles/motion";
import Link from "next/link";
import { Routes } from "@/constants/routes";
import { FaLongArrowAltRight } from "react-icons/fa";

export function HeroSection1() {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.1, once: true });
  const shouldReduceMotion = useReducedMotion();

  // Start animation when in view
  useEffect(() => {
    if (inView && !shouldReduceMotion) {
      controls.start("visible");
    }
  }, [controls, inView, shouldReduceMotion]);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <motion.div
        className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-web3-primary/5 blur-3xl pointer-events-none"
        variants={blurVariants}
        initial="hidden"
        animate={controls}
      />
      <motion.div
        className="absolute top-40 right-0 w-[300px] h-[300px] rounded-full bg-web3-accent/5 blur-3xl pointer-events-none"
        variants={blurVariants}
        initial="hidden"
        animate={controls}
      />

      <div className="container relative z-10">
        <div ref={ref} className="max-w-3xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            variants={headerVariants}
            initial="hidden"
            animate={controls}
          >
            {SiteSettings.title.part1}{" "}
            <span className="gradient-text">{SiteSettings.title.part2}</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-10"
            variants={paragraphVariants}
            initial="hidden"
            animate={controls}
          >
            {SiteSettings.description}
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-web3-primary hover:bg-web3-primary/90 text-white"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={
                shouldReduceMotion
                  ? { opacity: 1, scale: 1 }
                  : {
                      opacity: 1,
                      scale: 1,
                      transition: {
                        duration: 0.8,
                        ease: "easeOut",
                        delay: 0.2,
                      },
                    }
              }
            >
              <Link
                href={Routes.PROJECTS}
                className="flex flex-row items-center gap-1"
              >
                Explore Projects <FaLongArrowAltRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-web3-primary text-web3-primary hover:bg-web3-primary/10"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={
                shouldReduceMotion
                  ? { opacity: 1, scale: 1 }
                  : {
                      opacity: 1,
                      scale: 1,
                      transition: {
                        duration: 0.8,
                        ease: "easeOut",
                        delay: 0.3,
                      },
                    }
              }
            >
              <Link
                href={Routes.CONTACT}
                className="flex flex-row items-center gap-1"
              >
                Get Involved <FaLongArrowAltRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-12 md:mt-16 flex flex-wrap justify-center gap-6 md:gap-10">
            {[
              { value: "$1.0B+", label: "$CANCER", icon: null },
              { value: "65K", label: "TPS Solana’s Speed", icon: SiSolana },
              { value: "5+", label: "Countries in Network", icon: FaGlobe },
              { value: "100%", label: "Community Governance", icon: null },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                variants={statVariants}
                custom={index}
                initial="hidden"
                animate={controls}
              >
                <p className="text-3xl md:text-4xl font-bold gradient-text flex items-center gap-1">
                  {stat.icon && (
                    <stat.icon className="h-7 w-7" fill="#9300f8" />
                  )}{" "}
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
