"use client";

import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const headingVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const textVariants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const hexagonVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.05,
    y: -10,
    transition: {
      duration: 0.3,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

const statCards = [
  {
    id: "01",
    value: "1 BioDAO",
    description: "First Research Launched",
    subtext: "Focused on protease engineering to fight esophageal cancer",
    color: "#FF6B6B",
  },
  {
    id: "02",
    value: "15 Researchers",
    description: "Joining CancerFun",
    subtext:
      "Scientists from top institutions collaborating through CancerFun & ShinDAO structure",
    color: "#4ECDC4",
  },
  {
    id: "03",
    value: "$250k",
    description: "Committed To Kickstart Early Research",
    subtext:
      "Seed bootstrap funding by researchers to launch the first project",
    color: "#a857ff",
  },
];

// Info Section Component
function InfoBar() {
  return (
    <motion.div
      className="relative h-[70px] md:h-[90px]"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.3,
      }}
    >
      <motion.div
        className="flex w-full h-[70px] md:h-[90px] items-center justify-center gap-2 px-4 md:px-8 py-3 md:py-5 bg-[#1717179e] backdrop-blur-sm"
        variants={containerVariants}
      >
        <motion.div
          className="relative w-fit [font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-sm md:text-xl tracking-[0] leading-[1.4] md:leading-[normal] text-center md:text-left md:whitespace-nowrap"
          variants={textVariants}
        >
          <motion.span className="text-[#8e8888]" variants={textVariants}>
            We are committed to advancing cancer research by harnessing
          </motion.span>
          <motion.span className="text-[#303030]" variants={textVariants}>
            &nbsp;
          </motion.span>
          <motion.span
            className="text-[#a857ff]"
            variants={textVariants}
            whileHover={{
              scale: 1.05,
              color: "#a857ff",
              transition: { duration: 0.2 },
            }}
          >
            decentralized science
          </motion.span>
          <motion.span className="text-[#8e8888]" variants={textVariants}>
            {" "}
            to accelerate breakthroughs and enhance patient outcomes.
          </motion.span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export function StatsSection() {
  return (
    <motion.section
      className="relative w-full bg-black pb-20 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Info Section at the top */}
      <InfoBar />

      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(168,87,255,0.1),transparent_50%)]" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.343 0L13.8 8.544 15.214 9.96l9.9-9.9h-2.77zm22.628 0L53.8 8.828 52.385 10.243 41.143 0h3.828zm-16.97 0L36.8 8.544 35.385 9.96l-9.9-9.9h2.77zm11.314 0L48.8 8.485 47.385 9.9l-7.9-7.9h2.83zm-5.657 0L41.8 8.485 40.385 9.9l-7.9-7.9h2.83zM27.03 0L33.8 6.77 32.385 8.185l-7.9-7.9h2.544zm10.97 0L46.8 8.8 45.385 10.215l-7.9-7.9h2.544zM32.686 0L42.8 10.115 41.385 11.53l-11.313-11.314h2.614zM16.686 0L6.57 10.115 7.985 11.53l11.314-11.314h-2.614zM41.343 0L53.8 12.457 52.385 13.87 39.03 0h2.313zm-22.628 0L6.57 12.457 7.985 13.87 21.343 0h-2.628zm5.657 0L16.8 7.57 18.214 8.985l7.9-7.9h-2.544zm5.657 0L26.8 7.57 28.214 8.985l7.9-7.9h-2.544zm5.657 0L36.8 7.57 38.214 8.985l7.9-7.9h-2.544zm5.657 0L46.8 7.57 48.214 8.985l7.9-7.9h-2.544zm-16.97 0L16.8 12.457l1.414 1.415L30.97 0h-2.313zm11.314 0L41.8 12.457l1.414 1.415L54.284 0h-2.313zM22.343 0L13.8 8.544l1.414 1.415 9.9-9.9h-2.77zm5.657 0L21.8 6.2l1.414 1.415L29.9 0h-2.544z' fill='rgba(168,87,255,0.05)' fill-rule='evenodd'/%3E%3C/svg%3E\")",
            opacity: 0.5,
          }}
        />
      </div>

      <div className="relative max-w-[1300px] mx-auto px-4 pt-20">
        {/* Main heading without glow effect */}
        <motion.div className="text-center mb-20" variants={headingVariants}>
          <h2 className="relative inline-block">
            <div className="[font-family:'Neue_Montreal-Regular',Helvetica] font-normal text-4xl md:text-[64px] leading-[1.2] md:leading-[64px]">
              <span className="text-white tracking-[0]">Curate &amp; </span>
              <span className="text-[#a857ff] tracking-[0]">Fund Cancer</span>
              <div className="text-white tracking-[0]">Research Projects</div>
            </div>
          </h2>
        </motion.div>

        {/* Hexagonal Grid Layout */}
        <div className="relative flex justify-center items-center flex-wrap gap-8">
          {statCards.map((card) => (
            <motion.div
              key={card.id}
              className="relative"
              variants={hexagonVariants}
              whileHover="hover"
            >
              <div className="group relative w-[300px] h-[340px]">
                {/* Base Card */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-black/20 backdrop-blur-xl rounded-[30px] border border-white/10 transform transition-all duration-300 group-hover:scale-105" />

                {/* Border Glow Effect */}
                <div
                  className="absolute -inset-[1px] rounded-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(to right, transparent, ${card.color}40, transparent)`,
                    filter: "blur(1px)",
                  }}
                />

                {/* Inner Border for Depth */}
                <div className="absolute inset-[1px] rounded-[29px] bg-black/40 backdrop-blur-xl" />

                {/* Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div
                    className="absolute inset-0 rounded-[30px]"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, ${card.color}20 0%, transparent 70%)`,
                    }}
                  />
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col items-center justify-center p-6 text-center [font-family:'Neue_Montreal-Regular',Helvetica]">
                  {/* Stats */}
                  <div className="space-y-6">
                    <div className="[font-family:'Neue_Montreal-Regular',Helvetica] text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-[#a857ff] to-white">
                      {card.value}
                    </div>
                    <div className="[font-family:'Neue_Montreal-Regular',Helvetica] text-gray-300 text-lg uppercase tracking-wider">
                      {card.description}
                    </div>
                    <div className="[font-family:'Neue_Montreal-Regular',Helvetica] text-gray-400 text-sm leading-tight">
                      {card.subtext}
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div
                    className="absolute top-4 left-4 w-2 h-2 rounded-full transition-colors duration-300"
                    style={{
                      backgroundColor: card.color,
                      boxShadow: `0 0 10px ${card.color}40`,
                    }}
                  />
                  <div
                    className="absolute bottom-4 right-4 w-2 h-2 rounded-full transition-colors duration-300"
                    style={{
                      backgroundColor: card.color,
                      boxShadow: `0 0 10px ${card.color}40`,
                    }}
                  />

                  {/* Animated Line */}
                  <div className="absolute h-[1px] w-1/2 bottom-8 left-1/4 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative Background Lines */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-px h-full bg-gradient-to-b from-transparent via-[#a857ff]/10 to-transparent"
              style={{
                left: `${25 + i * 25}%`,
                opacity: 0.5,
                transform: `translateX(-50%) rotate(${i * 5}deg)`,
              }}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
