"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function RewardTiers() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Variants untuk animasi
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const tierVariants = {
    hidden: {
      y: 50,
      opacity: 0,
      background:
        "linear-gradient(135deg, rgba(31, 41, 55, 0), rgba(31, 41, 55, 0))",
    },
    visible: {
      y: 0,
      opacity: 1,
      background:
        "linear-gradient(135deg, rgba(31, 41, 55, 0.6), rgba(17, 24, 39, 0.8))",
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const noteVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.8,
        duration: 0.5,
      },
    },
  };

  // Fungsi untuk handling mouse
  const handleMouseEnter = (index: number) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  // Gradients untuk card
  const cardGradients = [
    {
      active:
        "linear-gradient(135deg, rgba(31, 41, 55, 0.7), rgba(17, 24, 39, 0.9))",
      default:
        "linear-gradient(135deg, rgba(31, 41, 55, 0.6), rgba(17, 24, 39, 0.8))",
      glow: "rgba(168, 87, 255, 0.4)",
      radial:
        "radial-gradient(circle at 50% 0%, rgba(168, 87, 255, 0.3), transparent 70%)",
    },
    {
      active:
        "linear-gradient(135deg, rgba(31, 41, 55, 0.7), rgba(17, 24, 39, 0.9))",
      default:
        "linear-gradient(135deg, rgba(31, 41, 55, 0.6), rgba(17, 24, 39, 0.8))",
      glow: "rgba(168, 87, 255, 0.4)",
      radial:
        "radial-gradient(circle at 50% 0%, rgba(168, 87, 255, 0.3), transparent 70%)",
    },
    {
      active:
        "linear-gradient(135deg, rgba(31, 41, 55, 0.7), rgba(17, 24, 39, 0.9))",
      default:
        "linear-gradient(135deg, rgba(31, 41, 55, 0.6), rgba(17, 24, 39, 0.8))",
      glow: "rgba(168, 87, 255, 0.4)",
      radial:
        "radial-gradient(circle at 50% 0%, rgba(168, 87, 255, 0.3), transparent 70%)",
    },
  ];

  return (
    <>
      <section ref={sectionRef} className="relative text-white w-full py-12">
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
              className="absolute h-1 w-1 rounded-full bg-[#a857ff] opacity-30 top-[15%] left-[10%]"
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
              className="absolute h-2 w-2 rounded-full bg-[#a857ff] opacity-20 top-[60%] left-[85%]"
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
              className="absolute h-1 w-1 rounded-full bg-[#a857ff] opacity-40 top-[75%] left-[25%]"
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
              className="absolute h-1.5 w-1.5 rounded-full bg-[#a857ff] opacity-25 top-[40%] left-[75%]"
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
              className="rounded-3xl p-8 relative"
              style={{
                background:
                  "linear-gradient(135deg, rgba(28, 28, 45, 0.9), rgba(20, 20, 43, 0.95))",
                boxShadow: "0 8px 32px 0 rgba(0,0,0,0.36)",
                border: "1px solid rgba(168, 87, 255, 0.2)",
              }}
            >
              {/* Reward header */}
              <motion.div
                className="text-white text-center py-3 rounded-full text-xl font-medium mb-12 relative overflow-hidden"
                variants={containerVariants}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 15px rgba(168, 87, 255, 0.5)",
                }}
                whileTap={{ scale: 0.98 }}
                style={{
                  background:
                    "linear-gradient(90deg, rgba(168, 87, 255, 0.2), rgba(147, 69, 230, 0.3))",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(168, 87, 255, 0.3)",
                }}
              >
                <motion.span
                  className="relative z-10"
                  whileHover={{ textShadow: "0 0 8px rgba(168, 87, 255, 0.5)" }}
                >
                  Creation Reward
                </motion.span>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 relative">
                {/* Tier 1 */}
                <motion.div
                  className="p-6 rounded-lg flex flex-col items-center cursor-pointer relative overflow-hidden group"
                  variants={tierVariants}
                  onMouseEnter={() => handleMouseEnter(0)}
                  onMouseLeave={handleMouseLeave}
                  animate={activeIndex === 0 ? { scale: 1.05 } : { scale: 1 }}
                  transition={{ duration: 0.4 }}
                  style={{
                    background:
                      activeIndex === 0
                        ? "linear-gradient(135deg, rgba(31, 41, 55, 0.7), rgba(17, 24, 39, 0.9))"
                        : "linear-gradient(135deg, rgba(31, 41, 55, 0.6), rgba(17, 24, 39, 0.8))",
                    backdropFilter: "blur(10px)",
                    boxShadow:
                      activeIndex === 0
                        ? "0 8px 32px 0 rgba(0, 0, 0, 0.3)"
                        : "0 4px 16px 0 rgba(0, 0, 0, 0.4)",
                    transition: "all 0.3s ease",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  {/* Border Glow Effect */}
                  <div
                    className="absolute -inset-[1px] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background:
                        "linear-gradient(to right, transparent, rgba(168, 87, 255, 0.3), transparent)",
                      filter: "blur(1px)",
                    }}
                  />

                  {/* Inner Border for Depth */}
                  <div className="absolute inset-[1px] rounded-lg bg-black/40 backdrop-blur-xl" />

                  {/* Enhanced Glow Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div
                      className="absolute inset-0 rounded-lg"
                      style={{
                        background:
                          "radial-gradient(circle at 50% 30%, rgba(168, 87, 255, 0.2) 0%, transparent 70%)",
                      }}
                    />
                  </div>

                  {/* Existing radial background */}
                  <motion.div
                    className="absolute top-0 left-0 w-full h-full"
                    style={{
                      background: cardGradients[0].radial,
                      opacity: activeIndex === 0 ? 1 : 0,
                      transition: "opacity 0.5s ease",
                    }}
                  />

                  {/* Decorative Elements */}
                  <div
                    className="absolute top-4 left-4 w-2 h-2 rounded-full transition-colors duration-300 opacity-0 group-hover:opacity-100"
                    style={{
                      backgroundColor: "#a857ff",
                      boxShadow: "0 0 10px rgba(168, 87, 255, 0.4)",
                    }}
                  />
                  <div
                    className="absolute bottom-4 right-4 w-2 h-2 rounded-full transition-colors duration-300 opacity-0 group-hover:opacity-100"
                    style={{
                      backgroundColor: "#a857ff",
                      boxShadow: "0 0 10px rgba(168, 87, 255, 0.4)",
                    }}
                  />

                  {/* Animated Line */}
                  <div className="absolute h-[1px] w-2/3 bottom-8 left-1/6 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-r from-transparent via-[#a857ff] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>

                  <motion.div
                    className="w-48 h-48 rounded-2xl relative mb-6 z-10"
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.4 },
                    }}
                    animate={
                      activeIndex === 0
                        ? {
                            y: [0, -10, 0],
                            transition: {
                              y: {
                                repeat: Infinity,
                                duration: 2,
                                ease: "easeInOut",
                              },
                            },
                          }
                        : {}
                    }
                  >
                    <Image
                      src="/Shindao/TierSection/tier 1.png"
                      alt="Tier 1 Badge"
                      fill
                      sizes="(max-width: 768px) 100vw, 192px"
                      className="object-cover"
                      priority
                    />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-4 relative z-10">
                    Tier 1 : Initiator
                  </h3>
                  <motion.div
                    className="text-center text-gray-200 relative z-10"
                    animate={activeIndex === 0 ? { scale: 1.05 } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    <p>Less than 200K</p>
                    <p>$CANCER Contribution</p>
                    <p>(no multiplier)</p>
                  </motion.div>
                </motion.div>

                {/* Tier 2 */}
                <motion.div
                  className="p-6 rounded-lg flex flex-col items-center cursor-pointer relative overflow-hidden group"
                  variants={tierVariants}
                  onMouseEnter={() => handleMouseEnter(1)}
                  onMouseLeave={handleMouseLeave}
                  animate={activeIndex === 1 ? { scale: 1.05 } : { scale: 1 }}
                  transition={{ duration: 0.4 }}
                  style={{
                    background:
                      activeIndex === 1
                        ? "linear-gradient(135deg, rgba(31, 41, 55, 0.7), rgba(17, 24, 39, 0.9))"
                        : "linear-gradient(135deg, rgba(31, 41, 55, 0.6), rgba(17, 24, 39, 0.8))",
                    backdropFilter: "blur(10px)",
                    boxShadow:
                      activeIndex === 1
                        ? "0 8px 32px 0 rgba(0, 0, 0, 0.3)"
                        : "0 4px 16px 0 rgba(0, 0, 0, 0.4)",
                    transition: "all 0.3s ease",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  {/* Border Glow Effect */}
                  <div
                    className="absolute -inset-[1px] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background:
                        "linear-gradient(to right, transparent, rgba(168, 87, 255, 0.3), transparent)",
                      filter: "blur(1px)",
                    }}
                  />

                  {/* Inner Border for Depth */}
                  <div className="absolute inset-[1px] rounded-lg bg-black/40 backdrop-blur-xl" />

                  {/* Enhanced Glow Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div
                      className="absolute inset-0 rounded-lg"
                      style={{
                        background:
                          "radial-gradient(circle at 50% 30%, rgba(168, 87, 255, 0.2) 0%, transparent 70%)",
                      }}
                    />
                  </div>

                  {/* Existing radial background */}
                  <motion.div
                    className="absolute top-0 left-0 w-full h-full"
                    style={{
                      background: cardGradients[1].radial,
                      opacity: activeIndex === 1 ? 1 : 0,
                      transition: "opacity 0.5s ease",
                    }}
                  />

                  {/* Decorative Elements */}
                  <div
                    className="absolute top-4 left-4 w-2 h-2 rounded-full transition-colors duration-300 opacity-0 group-hover:opacity-100"
                    style={{
                      backgroundColor: "#a857ff",
                      boxShadow: "0 0 10px rgba(168, 87, 255, 0.4)",
                    }}
                  />
                  <div
                    className="absolute bottom-4 right-4 w-2 h-2 rounded-full transition-colors duration-300 opacity-0 group-hover:opacity-100"
                    style={{
                      backgroundColor: "#a857ff",
                      boxShadow: "0 0 10px rgba(168, 87, 255, 0.4)",
                    }}
                  />

                  {/* Animated Line */}
                  <div className="absolute h-[1px] w-2/3 bottom-8 left-1/6 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-r from-transparent via-[#a857ff] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>

                  <motion.div
                    className="w-48 h-48 rounded-2xl relative mb-6 z-10"
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.4 },
                    }}
                    animate={
                      activeIndex === 1
                        ? {
                            y: [0, -10, 0],
                            transition: {
                              y: {
                                repeat: Infinity,
                                duration: 2,
                                ease: "easeInOut",
                              },
                            },
                          }
                        : {}
                    }
                  >
                    <Image
                      src="/Shindao/TierSection/tier 2.png"
                      alt="Tier 2 Badge"
                      fill
                      sizes="(max-width: 768px) 100vw, 192px"
                      className="object-cover"
                      priority
                    />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-4 relative z-10">
                    Tier 2 : Catalyst
                  </h3>
                  <motion.div
                    className="text-center text-gray-200 relative z-10"
                    animate={activeIndex === 1 ? { scale: 1.05 } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    <p>Between 200K - 1M</p>
                    <p>$CANCER Contribution</p>
                    <p>(1.5x multiplier)</p>
                  </motion.div>
                </motion.div>

                {/* Tier 3 */}
                <motion.div
                  className="p-6 rounded-lg flex flex-col items-center cursor-pointer relative overflow-hidden group"
                  variants={tierVariants}
                  onMouseEnter={() => handleMouseEnter(2)}
                  onMouseLeave={handleMouseLeave}
                  animate={activeIndex === 2 ? { scale: 1.05 } : { scale: 1 }}
                  transition={{ duration: 0.4 }}
                  style={{
                    background:
                      activeIndex === 2
                        ? "linear-gradient(135deg, rgba(31, 41, 55, 0.7), rgba(17, 24, 39, 0.9))"
                        : "linear-gradient(135deg, rgba(31, 41, 55, 0.6), rgba(17, 24, 39, 0.8))",
                    backdropFilter: "blur(10px)",
                    boxShadow:
                      activeIndex === 2
                        ? "0 8px 32px 0 rgba(0, 0, 0, 0.3)"
                        : "0 4px 16px 0 rgba(0, 0, 0, 0.4)",
                    transition: "all 0.3s ease",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  {/* Border Glow Effect */}
                  <div
                    className="absolute -inset-[1px] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background:
                        "linear-gradient(to right, transparent, rgba(168, 87, 255, 0.3), transparent)",
                      filter: "blur(1px)",
                    }}
                  />

                  {/* Inner Border for Depth */}
                  <div className="absolute inset-[1px] rounded-lg bg-black/40 backdrop-blur-xl" />

                  {/* Enhanced Glow Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div
                      className="absolute inset-0 rounded-lg"
                      style={{
                        background:
                          "radial-gradient(circle at 50% 30%, rgba(168, 87, 255, 0.2) 0%, transparent 70%)",
                      }}
                    />
                  </div>

                  {/* Existing radial background */}
                  <motion.div
                    className="absolute top-0 left-0 w-full h-full"
                    style={{
                      background: cardGradients[2].radial,
                      opacity: activeIndex === 2 ? 1 : 0,
                      transition: "opacity 0.5s ease",
                    }}
                  />

                  {/* Decorative Elements */}
                  <div
                    className="absolute top-4 left-4 w-2 h-2 rounded-full transition-colors duration-300 opacity-0 group-hover:opacity-100"
                    style={{
                      backgroundColor: "#a857ff",
                      boxShadow: "0 0 10px rgba(168, 87, 255, 0.4)",
                    }}
                  />
                  <div
                    className="absolute bottom-4 right-4 w-2 h-2 rounded-full transition-colors duration-300 opacity-0 group-hover:opacity-100"
                    style={{
                      backgroundColor: "#a857ff",
                      boxShadow: "0 0 10px rgba(168, 87, 255, 0.4)",
                    }}
                  />

                  {/* Animated Line */}
                  <div className="absolute h-[1px] w-2/3 bottom-8 left-1/6 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-r from-transparent via-[#a857ff] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>

                  <motion.div
                    className="w-48 h-48 rounded-2xl relative mb-6 z-10"
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.4 },
                    }}
                    animate={
                      activeIndex === 2
                        ? {
                            y: [0, -10, 0],
                            transition: {
                              y: {
                                repeat: Infinity,
                                duration: 2,
                                ease: "easeInOut",
                              },
                            },
                          }
                        : {}
                    }
                  >
                    <Image
                      src="/Shindao/TierSection/tier 3.png"
                      alt="Tier 3 Badge"
                      fill
                      sizes="(max-width: 768px) 100vw, 192px"
                      className="object-cover"
                      priority
                    />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-4 relative z-10">
                    Tier 3 : Apex
                  </h3>
                  <motion.div
                    className="text-center text-gray-200 relative z-10"
                    animate={activeIndex === 2 ? { scale: 1.05 } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    <p>More than 1M $CANCER</p>
                    <p>Contribution</p>
                    <p>(2x multiplier)</p>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Note text as full-width banner */}
      <motion.div
        className="relative py-4 w-full text-white"
        variants={noteVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        style={{
          background:
            "linear-gradient(90deg, rgba(28, 28, 45, 0.9), rgba(20, 20, 43, 0.95))",
          backdropFilter: "blur(5px)",
          borderTop: "1px solid rgba(168, 87, 255, 0.2)",
        }}
      >
        <motion.div
          className="text-center italic text-lg"
          whileHover={{ scale: 1.02 }}
        >
          *To Understand more about creation process and reward multiplier visit
          our{" "}
          <motion.span className="relative inline-block">
            <Link
              href="https://cancerfun.gitbook.io/cancerfun/"
              target="_blank"
              className="underline font-medium relative z-10 text-[#a857ff]"
            >
              Docs
            </Link>
            <motion.div
              className="absolute bottom-0 left-0 w-full h-1 bg-[#a857ff]"
              initial={{ width: "0%" }}
              whileHover={{
                width: "100%",
                height: "100%",
                bottom: "-2px",
                left: "-2px",
                opacity: 0.3,
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.span>
        </motion.div>
      </motion.div>
    </>
  );
}
