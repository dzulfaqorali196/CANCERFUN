"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function HypothesisSection() {
  // Refs untuk animasi entrance
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const statsRef = useRef(null);
  const contentLeftRef = useRef(null);
  const contentRightRef = useRef(null);

  // Cek jika element sudah tampak di viewport
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.5 });
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.2 });
  const isContentLeftInView = useInView(contentLeftRef, {
    once: true,
    amount: 0.3,
  });
  const isContentRightInView = useInView(contentRightRef, {
    once: true,
    amount: 0.3,
  });

  // Variants untuk animasi
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const statsItemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const slideInVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const slideInRightVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="hypothesis"
      ref={sectionRef}
      className="px-0 py-16 md:py-20 relative text-white w-full overflow-hidden"
    >
      {/* Background dengan gradient dan pattern */}
      <div className="absolute inset-0 z-0">
        {/* Gradient overlay background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#14142b] via-[#121226] to-[#0f0f18]"></div>

        {/* Pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.343 0L13.8 8.544 15.214 9.96l9.9-9.9h-2.77zm22.628 0L53.8 8.828 52.385 10.243 41.143 0h3.828zm-16.97 0L36.8 8.544 35.385 9.96l-9.9-9.9h2.77zm11.314 0L48.8 8.485 47.385 9.9l-7.9-7.9h2.83zm-5.657 0L41.8 8.485 40.385 9.9l-7.9-7.9h2.83zM27.03 0L33.8 6.77 32.385 8.185l-7.9-7.9h2.544zm10.97 0L46.8 8.8 45.385 10.215l-7.9-7.9h2.544zM32.686 0L42.8 10.115 41.385 11.53l-11.313-11.314h2.614zM16.686 0L6.57 10.115 7.985 11.53l11.314-11.314h-2.614zM41.343 0L53.8 12.457 52.385 13.87 39.03 0h2.313zm-22.628 0L6.57 12.457 7.985 13.87 21.343 0h-2.628zm5.657 0L16.8 7.57 18.214 8.985l7.9-7.9h-2.544zm5.657 0L26.8 7.57 28.214 8.985l7.9-7.9h-2.544zm5.657 0L36.8 7.57 38.214 8.985l7.9-7.9h-2.544zm5.657 0L46.8 7.57 48.214 8.985l7.9-7.9h-2.544zm-16.97 0L16.8 12.457l1.414 1.415L30.97 0h-2.313zm11.314 0L41.8 12.457l1.414 1.415L54.284 0h-2.313zM22.343 0L13.8 8.544l1.414 1.415 9.9-9.9h-2.77zm5.657 0L21.8 6.2l1.414 1.415L29.9 0h-2.544z' fill='%23a857ff' fill-opacity='0.15' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        ></div>

        {/* Radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,87,255,0.12),transparent_70%)]"></div>

        {/* Light particles/dots dengan animasi */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <motion.div
            className="absolute h-1 w-1 rounded-full bg-[#a857ff] opacity-30 top-[35%] left-[20%]"
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
            className="absolute h-2 w-2 rounded-full bg-[#a857ff] opacity-20 top-[70%] left-[75%]"
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
            className="absolute h-1 w-1 rounded-full bg-[#a857ff] opacity-40 top-[15%] left-[60%]"
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
            className="absolute h-1.5 w-1.5 rounded-full bg-[#a857ff] opacity-25 top-[85%] left-[40%]"
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
        <div className="px-4 md:px-12 max-w-[100%] mx-auto">
          <motion.h2
            ref={titleRef}
            initial="hidden"
            animate={isTitleInView ? "visible" : "hidden"}
            variants={fadeInUpVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12"
          >
            ShinDAO <span className="text-[#a857ff]">Hypothesis</span>
          </motion.h2>

          {/* Stats boxes */}
          <motion.div
            ref={statsRef}
            initial="hidden"
            animate={isStatsInView ? "visible" : "hidden"}
            variants={staggerContainerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12"
          >
            {/* Box 1 */}
            <motion.div
              variants={statsItemVariants}
              className="bg-gradient-to-br from-[#121218] via-[#1c1c2d] to-[#191930] border border-[#a857ff]/20 rounded-3xl p-4 md:p-6 text-center backdrop-blur-sm"
              whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 30px -15px rgba(168, 87, 255, 0.3)",
              }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-[#a857ff]">
                91.3%
              </h3>
              <p className="text-xs sm:text-sm text-[#8e8888]">
                Cleavage efficiency on designed substrates, validated in vitro
                using novel substrate-profiling system
              </p>
            </motion.div>

            {/* Box 2 */}
            <motion.div
              variants={statsItemVariants}
              className="bg-gradient-to-br from-[#121218] via-[#1c1c2d] to-[#191930] border border-[#a857ff]/20 rounded-3xl p-4 md:p-6 text-center backdrop-blur-sm"
              whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 30px -15px rgba(168, 87, 255, 0.3)",
              }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-[#a857ff]">
                &gt;700M
              </h3>
              <p className="text-xs sm:text-sm text-[#8e8888]">
                Estimated number of patients globally affected by diseases
                involving undruggable or misfolded proteins (e.g., p53, Tau,
                α-synuclein)
              </p>
            </motion.div>

            {/* Box 3 */}
            <motion.div
              variants={statsItemVariants}
              className="bg-gradient-to-br from-[#121218] via-[#1c1c2d] to-[#191930] border border-[#a857ff]/20 rounded-3xl p-4 md:p-6 text-center backdrop-blur-sm"
              whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 30px -15px rgba(168, 87, 255, 0.3)",
              }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-[#a857ff]">
                $1.4 Trillion
              </h3>
              <p className="text-xs sm:text-sm text-[#8e8888]">
                Annual global healthcare cost burden from cancers and
                neurodegenerative disorders driven by toxic intracellular
                proteins
              </p>
            </motion.div>

            {/* Box 4 */}
            <motion.div
              variants={statsItemVariants}
              className="bg-gradient-to-br from-[#121218] via-[#1c1c2d] to-[#191930] border border-[#a857ff]/20 rounded-3xl p-4 md:p-6 text-center backdrop-blur-sm"
              whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 30px -15px rgba(168, 87, 255, 0.3)",
              }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-[#a857ff]">
                6–8 weeks
              </h3>
              <p className="text-xs sm:text-sm text-[#8e8888]">
                Average design-to-validation cycle for custom proteases,
                significantly faster than traditional drug development timelines
              </p>
            </motion.div>
          </motion.div>

          {/* Two column section with asymmetric layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Left column - smaller (4/12) */}
            <motion.div
              ref={contentLeftRef}
              initial="hidden"
              animate={isContentLeftInView ? "visible" : "hidden"}
              variants={slideInVariants}
              className="md:col-span-4 pr-0 md:pr-8 mb-8 md:mb-0 border-r-0 md:border-r md:border-r-2 border-[#a857ff]/40"
            >
              <p className="text-xl sm:text-2xl md:text-3xl font-bold leading-relaxed text-justify bg-gradient-to-r from-[#a857ff] to-white bg-clip-text text-transparent">
                <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold">
                  ShinDAO
                </span>{" "}
                accelerates therapeutic enzyme innovation by funding and
                developing decentralized technologies that unleash protease
                engineering to combat cancer, neurodegeneration, and undruggable
                diseases.
              </p>
            </motion.div>

            {/* Right column - larger (8/12) */}
            <motion.div
              ref={contentRightRef}
              initial="hidden"
              animate={isContentRightInView ? "visible" : "hidden"}
              variants={slideInRightVariants}
              className="md:col-span-8 pl-0 md:pl-8"
            >
              <motion.div
                className="bg-gradient-to-r from-[#a857ff]/30 via-[#a857ff]/40 to-[#a857ff]/30 rounded-3xl p-4 mb-6 border-2 border-[#a857ff]/50 shadow-md shadow-[#a857ff]/20"
                initial={{ scaleX: 0 }}
                animate={isContentRightInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h3 className="text-lg sm:text-xl font-extrabold text-center bg-gradient-to-r from-[#a857ff] via-white to-[#a857ff] bg-clip-text text-transparent">
                  Main Hypothesis
                </h3>
              </motion.div>

              <motion.p
                className="mb-4 text-sm sm:text-base text-justify text-[#8e8888]"
                variants={fadeInUpVariants}
                transition={{ delay: 0.4 }}
              >
                Proteins are the engines of cellular life, and dysfunction at
                this level fuels the deadliest illnesses. Yet most of
                today&apos;s therapies fail to target misfolded, disordered, or
                intracellular proteins due to their structural complexity and
                inaccessibility. ShinDAO leverages open-source tools, ML-guided
                design, and onchain funding to engineer custom proteases,
                precision biological tools that selectively destroy
                disease-driving proteins inside living cells.
              </motion.p>

              <motion.p
                className="mb-4 text-sm sm:text-base text-justify text-[#8e8888]"
                variants={fadeInUpVariants}
                transition={{ delay: 0.6 }}
              >
                ShinDAO&apos;s framework is built on programmable enzyme design
                validated in peer-reviewed research. Our protocols are governed
                onchain, our IP is transparent, and our impact compounds with
                every community-funded target. By decentralizing biotech R&D and
                enabling DAO-native scientific pipelines, ShinDAO redefines how
                the world creates cures
              </motion.p>

              <motion.p
                className="font-bold text-[#a857ff] text-sm sm:text-base text-justify"
                variants={fadeInUpVariants}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
              >
                one protease at a time.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
