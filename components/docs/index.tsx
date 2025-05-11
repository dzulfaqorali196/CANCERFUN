"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAnimation, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { docTopics } from "@/data/docs";

export function DocsSection() {
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      {docTopics.map((doc, index) => (
        <Card
          key={index}
          className={cn(
            "h-full bg-web3-darker bg-border-spin border animate-border",
            shouldReduceMotion ? "" : "hover:border-web3-primary/50",
            doc.status === "Available" && "border-web3-primary/50"
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
            <div className="flex items-center justify-between mb-4">
              <doc.icon className="h-8 w-8 text-web3-primary" />
              <span
                className={cn(
                  "text-xs font-medium px-2 py-1 rounded-full",
                  doc.status === "Available" &&
                    "bg-web3-primary/20 text-web3-primary"
                )}
              >
                {doc.status}
              </span>
            </div>
            <CardTitle>{doc.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-muted-foreground">
              {doc.description}
            </CardDescription>
            <ul className="mt-4 space-y-2">
              {doc.subtopics.map((subtopic, subIndex) => (
                <li key={subIndex} className="flex items-center">
                  <div className="mr-2 h-1.5 w-1.5 rounded-full bg-web3-primary"></div>
                  <a
                    href={subtopic.url}
                    className="text-muted-foreground hover:text-web3-primary transition-colors"
                  >
                    {subtopic.name}
                  </a>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
