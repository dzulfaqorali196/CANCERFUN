"use client";

import { useState, useRef } from "react";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import Image from "next/image";

export default function BenefitSection() {
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Efek parallax saat mouse bergerak
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - card.left) / card.width;
    const y = (e.clientY - card.top) / card.height;
    setMousePosition({ x, y });
  };

  // Variants untuk animasi entrance elemen
  const containerVariants = {
    hidden: {
      opacity: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
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

  const cardVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        type: "spring",
        stiffness: 100,
        damping: 15,
        when: "beforeChildren",
        staggerChildren: 0.1,
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
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative text-white w-full py-8 md:py-12"
    >
      {/* Background dengan gradient dan pattern */}
      <div className="absolute inset-0 z-0">
        {/* Gradient overlay background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f18] via-[#121226] to-[#14142b]"></div>

        {/* Pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.343 0L13.8 8.544 15.214 9.96l9.9-9.9h-2.77zm22.628 0L53.8 8.828 52.385 10.243 41.143 0h3.828zm-16.97 0L36.8 8.544 35.385 9.96l-9.9-9.9h2.77zm11.314 0L48.8 8.485 47.385 9.9l-7.9-7.9h2.83zm-5.657 0L41.8 8.485 40.385 9.9l-7.9-7.9h2.83zM27.03 0L33.8 6.77 32.385 8.185l-7.9-7.9h2.544zm10.97 0L46.8 8.8 45.385 10.215l-7.9-7.9h2.544zM32.686 0L42.8 10.115 41.385 11.53l-11.313-11.314h2.614zM16.686 0L6.57 10.115 7.985 11.53l11.314-11.314h-2.614zM41.343 0L53.8 12.457 52.385 13.87 39.03 0h2.313zm-22.628 0L6.57 12.457 7.985 13.87 21.343 0h-2.628zm5.657 0L16.8 7.57 18.214 8.985l7.9-7.9h-2.544zm5.657 0L26.8 7.57 28.214 8.985l7.9-7.9h-2.544zm5.657 0L36.8 7.57 38.214 8.985l7.9-7.9h-2.544zm5.657 0L46.8 7.57 48.214 8.985l7.9-7.9h-2.544zm-16.97 0L16.8 12.457l1.414 1.415L30.97 0h-2.313zm11.314 0L41.8 12.457l1.414 1.415L54.284 0h-2.313zM22.343 0L13.8 8.544l1.414 1.415 9.9-9.9h-2.77zm5.657 0L21.8 6.2l1.414 1.415L29.9 0h-2.544z' fill='%23a857ff' fill-opacity='0.15' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        ></div>

        {/* Radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(168,87,255,0.12),transparent_70%)]"></div>

        {/* Light particles/dots dengan animasi */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <motion.div
            className="absolute h-1 w-1 rounded-full bg-[#a857ff] opacity-30 top-[25%] left-[15%]"
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.3, 1],
              boxShadow: [
                "0 0 0 0 rgba(168, 87, 255, 0)",
                "0 0 4px 2px rgba(168, 87, 255, 0.3)",
                "0 0 0 0 rgba(168, 87, 255, 0)",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          ></motion.div>
          <motion.div
            className="absolute h-2 w-2 rounded-full bg-[#a857ff] opacity-20 top-[50%] left-[80%]"
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          ></motion.div>
          <motion.div
            className="absolute h-1 w-1 rounded-full bg-[#a857ff] opacity-40 top-[65%] left-[30%]"
            animate={{
              opacity: [0.4, 0.7, 0.4],
              scale: [1, 1.4, 1],
              boxShadow: [
                "0 0 0 0 rgba(168, 87, 255, 0)",
                "0 0 5px 3px rgba(168, 87, 255, 0.4)",
                "0 0 0 0 rgba(168, 87, 255, 0)",
              ],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          ></motion.div>
          <motion.div
            className="absolute h-1.5 w-1.5 rounded-full bg-[#a857ff] opacity-25 top-[10%] left-[65%]"
            animate={{
              opacity: [0.25, 0.5, 0.25],
              scale: [1, 1.3, 1],
              boxShadow: [
                "0 0 0 0 rgba(168, 87, 255, 0)",
                "0 0 4px 2px rgba(168, 87, 255, 0.25)",
                "0 0 0 0 rgba(168, 87, 255, 0)",
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          ></motion.div>
        </div>
      </div>

      {/* Content section dengan relative positioning */}
      <div className="relative z-10">
        <div className="px-4 md:px-12 max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="rounded-3xl p-4 sm:p-6 md:p-8 border border-[#a857ff]/20 bg-gradient-to-br from-[#121218] via-[#1c1c2d] to-[#191930]"
          >
            {/* Benefit header */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-r from-[#a857ff]/20 via-[#1c1c2d] to-[#a857ff]/20 text-white text-center py-2 md:py-3 rounded-full text-lg md:text-xl font-medium mb-6 md:mb-12 border border-[#a857ff]/30 transition-all duration-300"
              whileHover={{
                boxShadow: "0 0 15px rgba(168, 87, 255, 0.3)",
                backgroundColor: "#1c1c2d",
              }}
            >
              Creation Benefit for Contributor
            </motion.div>

            {/* Purple card with wavy background */}
            <motion.div
              variants={cardVariants}
              className="rounded-3xl overflow-hidden relative mx-0 sm:mx-4 transition-all duration-500 transform hover:scale-[1.01] hover:shadow-[0_0_30px_rgba(168,87,255,0.5)]"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              onMouseMove={handleMouseMove}
              style={{
                transform: isHovering
                  ? `perspective(1000px) rotateX(${
                      (mousePosition.y - 0.5) * -5
                    }deg) rotateY(${(mousePosition.x - 0.5) * 5}deg)`
                  : "perspective(1000px) rotateX(0) rotateY(0)",
                transition: "transform 0.3s ease",
              }}
            >
              {/* Gambar Benefit Banner mengisi seluruh kartu */}
              <motion.div variants={textVariants} className="w-full h-full">
                <Image
                  width={400}
                  height={400}
                  src="/Shindao/Benefit/Benefit Banner.png"
                  alt="ShinDAO Benefit Banner"
                  className="w-full h-auto object-cover"
                  style={{
                    transform: isHovering
                      ? `translateX(${
                          (mousePosition.x - 0.5) * -10
                        }px) translateY(${(mousePosition.y - 0.5) * -10}px)`
                      : "none",
                    transition: "transform 0.3s ease",
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Animasi CSS */}
            <style jsx global>{`
              @keyframes moveWaves {
                0% {
                  background-position: 0 0;
                }
                100% {
                  background-position: 100px 100px;
                }
              }

              @keyframes moveWavesReverse {
                0% {
                  background-position: 0 0;
                }
                100% {
                  background-position: -100px -100px;
                }
              }

              @keyframes pulse {
                0%,
                100% {
                  opacity: 1;
                }
                50% {
                  opacity: 0.8;
                }
              }
            `}</style>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
