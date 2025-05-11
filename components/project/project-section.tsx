"use client";

import { PlusIcon } from "lucide-react";
import React from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

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

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.01,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const imageVariants = {
  hidden: { scale: 1.1, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
  hover: {
    y: -5,
    transition: {
      duration: 0.3,
    },
  },
};

const plusIconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.5,
      ease: "backOut",
    },
  },
  hover: {
    scale: 1.2,
    rotate: 90,
    transition: {
      duration: 0.3,
    },
  },
};

export const ProjectSection = () => {
  // Project data for mapping
  const projects = [
    {
      id: 1,
      title: "ShinDAO",
      description:
        "Targeting IFI6 pathways in esophageal cancer through decentralized research funding.",
      isActive: true,
      image: "/project/Shindao.jpeg",
      link: "/projects/shindao",
    },
    {
      id: 2,
      title: "Propose Your Project",
      description:
        "Bring your scientific vision to life with community-backed support.",
      isActive: false,
      link: "/projects/proposal",
    },
    {
      id: 3,
      title: "Propose Your Project",
      description:
        "Bring your scientific vision to life with community-backed support.",
      isActive: false,
      link: "/projects/proposal",
    },
    {
      id: 4,
      title: "Propose Your Project",
      description:
        "Bring your scientific vision to life with community-backed support.",
      isActive: false,
      link: "/projects/proposal",
    },
    {
      id: 5,
      title: "Propose Your Project",
      description:
        "Bring your scientific vision to life with community-backed support.",
      isActive: false,
      link: "/projects/proposal",
    },
    {
      id: 6,
      title: "Propose Your Project",
      description:
        "Bring your scientific vision to life with community-backed support.",
      isActive: false,
      link: "/projects/proposal",
    },
  ];

  return (
    <motion.section
      id="projects"
      className="w-full bg-black pt-24 md:pt-[200px] pb-16 md:pb-28 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="relative w-full max-w-[1920px] mx-auto px-4 md:px-8 lg:px-16">
        {/* Background elements */}
        <motion.img
          className="absolute w-full max-w-[1920px] h-[400px] md:h-[785px] top-[-100px] md:top-[-200px] left-1/2 transform -translate-x-1/2 select-none pointer-events-none z-0"
          alt="Elements"
          src="/project/light.svg"
          style={{ mixBlendMode: "screen" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />

        <div className="relative flex flex-col items-center gap-12 md:gap-24 z-10">
          <motion.h2
            className="text-4xl md:text-[64px] leading-[1.2] md:leading-[64px] text-center font-normal [font-family:'Neue_Montreal-Regular',Helvetica] max-w-[1350px] mx-auto px-4"
            variants={headingVariants}
          >
            <span className="text-white tracking-[0]">Explore </span>
            <span className="text-[#a857ff] tracking-[0]">Active Projects</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-[1920px]">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover="hover"
                className="w-full"
              >
                {project.isActive && project.link ? (
                  // <Link href={project.link} className="block w-full h-full">
                  <Card
                    className={`flex flex-col gap-0 h-[280px] md:h-[351.8px] w-full overflow-hidden rounded-[12px] md:rounded-[17.38px] border-[1px] md:border-[2.17px] transition-colors duration-300 py-0 ${
                      project.isActive
                        ? "bg-[#4d139d26] border-[#b37feb] hover:bg-[#4d139d40]"
                        : "bg-[#f5f5f508] border-[#212121] hover:border-[#b37feb] hover:bg-[#4d139d26]"
                    }`}
                  >
                    <motion.div className="relative flex flex-col items-center justify-center h-[180px] md:h-[241.75px] w-full overflow-hidden">
                      {project.isActive && project.image ? (
                        <motion.div
                          className="relative w-full h-full"
                          variants={imageVariants}
                        >
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            style={{ objectFit: "cover" }}
                          />
                          <motion.div
                            className="absolute inset-0 bg-[#4d139d] opacity-20"
                            whileHover={{ opacity: 0.1 }}
                          />
                        </motion.div>
                      ) : (
                        <motion.div
                          variants={plusIconVariants}
                          className="transition-transform duration-300 hover:rotate-90"
                        >
                          <PlusIcon className="w-10 h-10 md:w-[61px] md:h-[61px] text-white" />
                        </motion.div>
                      )}
                    </motion.div>

                    <motion.div
                      variants={contentVariants}
                      className={`flex flex-col items-start gap-2 md:gap-[9.41px] p-4 md:p-6 ${
                        project.isActive
                          ? "bg-[#4d139d10]"
                          : "bg-[#ffffff0f] hover:bg-[#4d139d10]"
                      }`}
                    >
                      <div className="flex items-center justify-around gap-2 md:gap-[9.41px] w-full">
                        <div className="flex flex-col items-start gap-2 md:gap-[9.41px] flex-1">
                          <motion.h3
                            className="mt-[-1px] md:mt-[-1.57px] font-['Neue_Montreal'] font-bold text-white text-xl md:text-[26.1px] tracking-[0] leading-normal"
                            whileHover={{ x: 5 }}
                          >
                            {project.title}
                          </motion.h3>
                          <motion.p
                            className="font-['Neue_Montreal'] font-normal text-[#b7afaf] text-sm md:text-base tracking-[0] leading-normal"
                            whileHover={{ x: 5 }}
                          >
                            {project.description}
                          </motion.p>
                        </div>
                      </div>
                    </motion.div>
                  </Card>
                ) : (
                  // </Link>
                  <Link href={project.link} className="block w-full h-full">
                    <Card
                      className={`flex flex-col h-[280px] md:h-[351.8px] w-full overflow-hidden rounded-[12px] md:rounded-[17.38px] border-[1px] md:border-[2.17px] transition-colors duration-300 py-0 ${
                        project.isActive
                          ? "bg-[#4d139d26] border-[#b37feb] hover:bg-[#4d139d40]"
                          : "bg-[#f5f5f508] border-[#212121] hover:border-[#b37feb] hover:bg-[#4d139d26]"
                      }`}
                    >
                      <motion.div className="relative flex flex-col items-center justify-center h-[180px] md:h-[241.75px] w-full overflow-hidden">
                        {project.isActive && project.image ? (
                          <motion.div
                            className="relative w-full h-full"
                            variants={imageVariants}
                          >
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              style={{ objectFit: "cover" }}
                            />
                            <motion.div
                              className="absolute inset-0 bg-[#4d139d] opacity-20"
                              whileHover={{ opacity: 0.1 }}
                            />
                          </motion.div>
                        ) : (
                          <motion.div
                            variants={plusIconVariants}
                            className="transition-transform duration-300 hover:rotate-90"
                          >
                            <PlusIcon className="w-10 h-10 md:w-[61px] md:h-[61px] text-white" />
                          </motion.div>
                        )}
                      </motion.div>

                      <motion.div
                        variants={contentVariants}
                        className={`flex flex-col items-start gap-2 md:gap-[9.41px] p-4 md:p-6 ${
                          project.isActive
                            ? "bg-[#4d139d10]"
                            : "bg-[#ffffff0f] hover:bg-[#4d139d10]"
                        }`}
                      >
                        <div className="flex items-center justify-around gap-2 md:gap-[9.41px] w-full">
                          <div className="flex flex-col items-start gap-2 md:gap-[9.41px] flex-1">
                            <motion.h3
                              className="mt-[-1px] md:mt-[-1.57px] font-['Neue_Montreal'] font-bold text-white text-xl md:text-[26.1px] tracking-[0] leading-normal"
                              whileHover={{ x: 5 }}
                            >
                              {project.title}
                            </motion.h3>
                            <motion.p
                              className="font-['Neue_Montreal'] font-normal text-[#b7afaf] text-sm md:text-base tracking-[0] leading-normal"
                              whileHover={{ x: 5 }}
                            >
                              {project.description}
                            </motion.p>
                          </div>
                        </div>
                      </motion.div>
                    </Card>
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};
