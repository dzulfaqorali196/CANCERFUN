"use client";

import { useAnimation, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeader from "@/components/section-header";
import { committeeMembers } from "@/data/committees";

export function CommitteeSection() {
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
    <section id="tokenomics" className="py-20 md:py-32 bg-web3-dark">
      <div className="container mb-16">
        <SectionHeader
          title1="Meet Our"
          title2="Committee"
          description="Meet the dedicated experts driving CancerCoin’s mission to revolutionize cancer research through decentralized science."
        />
        <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
          {committeeMembers.map((member) => (
            <Card
              key={member.name}
              className="border-web3-gray bg-web3-darker/50 backdrop-blur-sm overflow-hidden py-0 w-full sm:basis-[calc(50%-1rem)] md:basis-[calc(33.333%-1.43rem)]"
            >
              <CardContent className="p-0 text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src={member.profileImage} alt={member.name} />
                  <AvatarFallback className="bg-web3-primary/10 text-web3-accent">
                    {member.name}
                  </AvatarFallback>
                </Avatar>
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
