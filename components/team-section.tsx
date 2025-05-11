"use client";

import { useAnimation, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Card, CardContent } from "@/components/ui/card";
import { teamMembers } from "@/data/team";
import SectionHeader from "@/components/section-header";

export function TeamSection() {
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
    <div className="container mb-16">
      <SectionHeader
        title1="Meet Our"
        title2="Committee"
        description="Meet the dedicated experts driving CancerCoin’s mission to revolutionize cancer research through decentralized science."
      />
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {teamMembers.map((member) => (
          <Card
            key={member.name}
            className="border-web3-gray bg-web3-darker/50 backdrop-blur-sm overflow-hidden py-0"
          >
            <CardContent className="p-0 text-center">
              <Avatar className="w-24 h-24 mx-auto mb-4">
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback className="bg-web3-primary/10 text-web3-accent">
                  {member.initials}
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
  );
}
