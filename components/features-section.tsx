"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { whyCancerCoin } from "@/data/features";
import { useAnimation, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import SectionHeader from "@/components/section-header";
import { ArticleDoc } from "@/types";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

export function FeaturesSection({ articles }: { articles: ArticleDoc[] }) {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.1, once: true });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (inView && !shouldReduceMotion) {
      controls.start("visible");
    }
  }, [controls, inView, shouldReduceMotion]);

  return (
    <section id="features" className="py-20 md:py-32 bg-web3-dark">
      <div className="container">
        <SectionHeader
          title1="Why"
          title2="CancerCoin?"
          description="Discover how our decentralized platform empowers you to fund, govern, and accelerate life-saving cancer research."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyCancerCoin.map((feature, index) => {
            const article = articles.find((a) => a.id === feature.slug);

            return (
              <Card
                key={index}
                className={cn(
                  "h-full bg-web3-darker bg-border-spin border border-transparent animate-border",
                  shouldReduceMotion ? "" : "hover:border-web3-primary/50"
                )}
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
                          delay: 0.4 + index * 0.2,
                        },
                      }
                }
              >
                <CardHeader>
                  <div className="mb-4 flex items-center justify-between">
                    {feature.icon ? (
                      <feature.icon className="h-8 w-8 text-cyan-400" />
                    ) : (
                      <div className="h-8 w-8 bg-web3-gray rounded-full" />
                    )}
                    {article && (
                      <Link
                        href={`/why/${article.id}`}
                        className="flex items-center gap-2 text-xs text-gray-300 hover:text-white transition-colors rounded-full px-2 py-1 bg-indigo-600/40"
                      >
                        <span>Read More </span>
                        <FaExternalLinkAlt />
                      </Link>
                    )}
                  </div>
                  <CardTitle>
                    {article ? (
                      <Link href={`/why/${article.id}`}>{feature.title}</Link>
                    ) : (
                      feature.title
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
