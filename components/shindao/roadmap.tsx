"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface RoadmapItem {
  quarter: string;
  items: string[];
  completed: boolean;
}

export default function RoadmapSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  console.log(isMobile);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check on initial render
    checkMobile();

    // Add listener for window resize
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const element = scrollRef.current;
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Hitung posisi relatif elemen terhadap viewport
        const elementTop = rect.top;
        const elementBottom = rect.bottom;

        // Hitung progress berdasarkan posisi scroll
        let progress;

        if (elementTop >= windowHeight) {
          // Elemen belum terlihat
          progress = 0;
        } else if (elementBottom <= 0) {
          // Elemen sudah terlewati
          progress = 1;
        } else {
          // Elemen sedang terlihat
          const totalScrollDistance = rect.height + windowHeight;
          const scrolled = windowHeight - elementTop;
          progress = Math.max(0, Math.min(1, scrolled / totalScrollDistance));
        }

        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const roadmapItems: RoadmapItem[] = [
    {
      quarter: "Q2–Q3 2025",
      items: [
        "DAO formation & core contributor onboarding",
        "First protease design for mutant p53",
        "Community governance design & testnet vote",
      ],
      completed: true,
    },
    {
      quarter: "Q4 2025",
      items: [
        "Wet lab results published",
        "Licensing options launched",
        "Tokenomics finalized",
      ],
      completed: false,
    },
    {
      quarter: "Q1 2026",
      items: [
        "DAO-wide vote on next target (e.g., Parkinson's)",
        "Token launch with contributor rewards",
        "Partnership with CROs for preclinical studies",
      ],
      completed: false,
    },
  ];

  return (
    <section className="relative text-white w-full py-10 md:py-16">
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
            className="absolute h-1 w-1 rounded-full bg-[#a857ff] opacity-30 top-[30%] left-[15%]"
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
            className="absolute h-2 w-2 rounded-full bg-[#a857ff] opacity-20 top-[45%] left-[80%]"
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
            className="absolute h-1 w-1 rounded-full bg-[#a857ff] opacity-40 top-[70%] left-[35%]"
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
            className="absolute h-1.5 w-1.5 rounded-full bg-[#a857ff] opacity-25 top-[20%] left-[65%]"
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
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-white">Shin</span>
            <span className="text-[#a857ff]">DAO</span>
            <span className="text-white"> Roadmap</span>
          </motion.h2>

          <div ref={scrollRef} className="relative">
            {/* Mobile view with vertical timeline */}
            <div className="md:hidden">
              {/* Mobile timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-1 bg-[#a857ff]/30">
                <motion.div
                  className="absolute w-full bg-[#a857ff]"
                  style={{
                    height: `${scrollProgress * 100}%`,
                    top: 0,
                    transition: "height 0.3s ease-out",
                  }}
                />
              </div>

              {/* Mobile cards in vertical layout */}
              <div className="space-y-6">
                {roadmapItems.map((item, index) => (
                  <MobileRoadmapCard key={index} item={item} index={index} />
                ))}
              </div>
            </div>

            {/* Desktop view with alternating layout */}
            <div className="hidden md:block">
              {/* Center line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#a857ff]/30 transform -translate-x-1/2">
                <motion.div
                  className="absolute w-full bg-[#a857ff]"
                  style={{
                    height: `${scrollProgress * 100}%`,
                    top: 0,
                    transition: "height 0.3s ease-out",
                  }}
                />

                {/* Desktop timeline dots */}
                {roadmapItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className="absolute w-5 h-5 rounded-full border-2 border-[#a857ff] bg-blue-400 shadow-[0_0_15px_rgba(168,87,255,0.5)] left-1/2 transform -translate-x-1/2"
                    style={{
                      top: `${index * 33 + 12}%`,
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.3 + 0.5 }}
                  />
                ))}
              </div>

              <div className="grid grid-cols-2 gap-8">
                {roadmapItems.map((item, index) => (
                  <RoadmapCard
                    key={index}
                    item={item}
                    index={index}
                    isLeft={index % 2 === 0}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Mobile-specific card component
function MobileRoadmapCard({
  item,
  index,
}: {
  item: RoadmapItem;
  index: number;
}) {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.3, once: true });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-row relative pl-12"
      initial={{ opacity: 0, x: -20 }}
      animate={controls}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      {/* Timeline dot - Improved mobile dot */}
      <motion.div
        className="absolute z-10"
        style={{
          left: "10.5px",
          top: "10px",
          width: "14px",
          height: "14px",
          transform: "translateX(-50%)",
        }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4, delay: 0.3 + index * 0.2 }}
      >
        <div className="absolute bg-blue-400 rounded-full w-full h-full shadow-[0_0_10px_rgba(168,87,255,0.6)]"></div>
        <motion.div
          className="absolute w-full h-full border-2 border-[#a857ff] rounded-full"
          animate={{
            scale: [1, 1.6, 1],
            opacity: [1, 0.4, 1],
          }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
        />
      </motion.div>

      {/* Card */}
      <motion.div
        className="bg-gradient-to-br from-[#121218] via-[#1c1c2d] to-[#191930] rounded-2xl p-5 w-full transition-all duration-300 border border-[#a857ff]/20"
        whileHover={{
          scale: 1.02,
          boxShadow: "0 8px 15px -5px rgba(168, 87, 255, 0.3)",
        }}
      >
        <h3 className="text-xl font-bold text-center mb-2 text-[#a857ff]">
          {item.quarter}
        </h3>
        <ul className="list-disc pl-5 space-y-1.5 text-white text-sm">
          {item.items.map((listItem, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 + i * 0.1 }}
            >
              {listItem}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}

// Desktop card component - kembali ke versi semula
interface RoadmapCardProps {
  item: RoadmapItem;
  index: number;
  isLeft: boolean;
}

function RoadmapCard({ item, index, isLeft }: RoadmapCardProps) {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.3, once: true });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0 });
    }
  }, [controls, inView]);

  return (
    <>
      {/* Left side card */}
      {isLeft ? (
        <motion.div
          ref={ref}
          className="pl-0 pr-12 flex justify-end relative"
          initial={{ opacity: 0, x: -50 }}
          animate={controls}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <motion.div
            className="bg-gradient-to-br from-[#121218] via-[#1c1c2d] to-[#191930] rounded-3xl p-6 w-full max-w-md transition-all duration-300 relative z-10 border border-[#a857ff]/20"
            whileHover={{
              scale: 1.03,
              boxShadow:
                "0 10px 25px -5px rgba(168, 87, 255, 0.2), 0 10px 10px -5px rgba(168, 87, 255, 0.1)",
            }}
          >
            <h3 className="text-2xl font-bold text-center mb-4 text-[#a857ff]">
              {item.quarter}
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-white">
              {item.items.map((listItem, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.2 + i * 0.1 }}
                >
                  {listItem}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      ) : (
        <div></div>
      )}

      {/* Right side card */}
      {!isLeft ? (
        <motion.div
          ref={ref}
          className="pl-12 relative"
          initial={{ opacity: 0, x: 50 }}
          animate={controls}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <motion.div
            className="bg-gradient-to-br from-[#121218] via-[#1c1c2d] to-[#191930] rounded-3xl p-6 w-full max-w-md transition-all duration-300 relative z-10 border border-[#a857ff]/20"
            whileHover={{
              scale: 1.03,
              boxShadow:
                "0 10px 25px -5px rgba(168, 87, 255, 0.2), 0 10px 10px -5px rgba(168, 87, 255, 0.1)",
            }}
          >
            <h3 className="text-2xl font-bold text-center mb-4 text-[#a857ff]">
              {item.quarter}
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-white">
              {item.items.map((listItem, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.2 + i * 0.1 }}
                >
                  {listItem}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      ) : (
        <div></div>
      )}
    </>
  );
}
