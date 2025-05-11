"use client";

import { howItWorksSteps } from "@/constants/howitwork-steps";
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

const stepVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  hover: {
    y: -10,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const numberVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "backOut",
    },
  },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3,
    },
  },
};

const lineVariants = {
  hidden: { width: 0, opacity: 0 },
  visible: {
    width: "4rem",
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  hover: {
    width: "6rem",
    transition: {
      duration: 0.3,
    },
  },
};

const connectorVariants = {
  hidden: { width: 0, opacity: 0 },
  visible: {
    width: "100%",
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.3,
    },
  },
};

export function HowItWorksSection() {
  return (
    <motion.section
      id="how-it-works"
      className="py-12 md:py-20 lg:py-32 relative overflow-hidden bg-[#0f0f0f]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Gradient overlay di bagian atas untuk blend dengan roadmap */}
      <div className="absolute top-0 left-0 right-0 h-[200px] md:h-[400px] bg-gradient-to-b from-black via-black to-[#0f0f0f] pointer-events-none"></div>

      {/* Gradient overlay di bagian bawah */}
      <div className="absolute bottom-0 left-0 right-0 h-24 md:h-48 bg-gradient-to-t from-web3-dark via-[#0f0f0f] via-[#0f0f0f]/80 to-[#0f0f0f]/0 pointer-events-none"></div>

      {/* Background Effects dengan opacity yang lebih rendah */}
      <motion.div
        className="absolute -bottom-16 md:-bottom-32 left-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full bg-[#a857ff]/3 blur-[60px] md:blur-[120px] pointer-events-none"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />
      <motion.div
        className="absolute -top-16 md:-top-32 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full bg-[#a857ff]/3 blur-[60px] md:blur-[120px] pointer-events-none"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />

      <div className="container relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-normal mb-6 text-center">
            <span className="text-white">How CancerFun </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#A855F7] to-[#E9D5FF]">
              Works?
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-center">
            Explore how the $CANCER token fuels decentralized cancer research on
            Solana.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mt-8 md:mt-12"
          variants={containerVariants}
        >
          {howItWorksSteps.map((step, index) => (
            <motion.div
              key={index}
              className="relative group"
              variants={stepVariants}
              whileHover="hover"
            >
              <div className="mb-6 md:mb-8 relative">
                <motion.div
                  className="flex items-center"
                  variants={numberVariants}
                >
                  <span className="text-5xl md:text-7xl font-normal text-[#a857ff]">
                    {step.number}
                  </span>
                </motion.div>
                <motion.div
                  className="h-1 bg-gradient-to-r from-[#a857ff] to-[#8a3dd9] mt-3 md:mt-4 rounded-full"
                  variants={lineVariants}
                />
              </div>
              <motion.h3
                className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-white group-hover:text-[#a857ff] transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {step.title}
              </motion.h3>
              <motion.p
                className="text-gray-400 text-base md:text-lg leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                {step.description}
              </motion.p>
              {index < howItWorksSteps.length - 1 && (
                <motion.div
                  className="hidden lg:block absolute top-12 right-0 w-full h-[2px] translate-x-1/2 bg-gradient-to-r from-[#a857ff]/30 to-transparent"
                  variants={connectorVariants}
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
