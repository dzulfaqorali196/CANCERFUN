"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/data/faq";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const descriptionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.2,
      ease: "easeOut",
    },
  },
};

const accordionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function FaqSection() {
  return (
    <motion.section
      id="faq"
      className="py-20 md:py-32 bg-web3-dark relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0f0f0f]/0 via-[#0f0f0f]/80 via-[#0f0f0f] to-web3-dark pointer-events-none"></div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black via-black to-web3-dark pointer-events-none"></div>

      <div className="container relative z-10 mb-16 md:mb-24">
        <motion.div
          className="text-center max-w-5xl mx-auto mb-16"
          variants={containerVariants}
        >
          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-normal mb-6 text-center"
            variants={headingVariants}
          >
            <span className="text-white">Frequently Asked </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#A855F7] to-[#E9D5FF]">
              Questions
            </span>
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-center"
            variants={descriptionVariants}
          >
            Explore answers to common questions about CancerCoin, $CANCER, and
            funding decentralized cancer research on Solana&apos;s blockchain.
          </motion.p>
        </motion.div>

        <motion.div className="max-w-3xl mx-auto" variants={containerVariants}>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((faq, index) => {
              return (
                <motion.div
                  key={index}
                  variants={accordionVariants}
                  custom={index}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="border-web3-gray"
                  >
                    <AccordionTrigger className="text-left hover:text-web3-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              );
            })}
          </Accordion>
        </motion.div>
      </div>
    </motion.section>
  );
}
