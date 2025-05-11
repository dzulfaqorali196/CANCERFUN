"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { MdOutlineArticle } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";

const playButtonVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.5,
      ease: "backOut",
      delay: 0.5,
    },
  },
  hover: {
    scale: 1.1,
    rotate: 180,
    transition: {
      duration: 0.3,
    },
  },
};

export default function HeroSection() {
  // State untuk popup loading
  const [showLoadingPopup, setShowLoadingPopup] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  // Tambahkan state untuk pesan loading
  // const [loadingMessage, setLoadingMessage] = useState("Loading...")

  // Countdown timer dengan localStorage
  const [timeLeft, setTimeLeft] = useState({
    days: 70,
    hours: 0,
    minutes: 37,
    seconds: 0,
  });

  useEffect(() => {
    // Cek apakah ada tanggal akhir countdown yang tersimpan di localStorage
    let targetDate = localStorage.getItem("countdownTargetDate");

    if (!targetDate) {
      // Jika tidak ada, buat tanggal target baru (70 hari dari sekarang)
      const now = new Date();
      const endDate = new Date(now);
      endDate.setDate(now.getDate() + 70);
      endDate.setHours(now.getHours());
      endDate.setMinutes(now.getMinutes() + 37);

      // Simpan ke localStorage untuk digunakan kembali saat refresh
      targetDate = endDate.toISOString();
      localStorage.setItem("countdownTargetDate", targetDate);
    }

    // Fungsi untuk menghitung selisih waktu
    const calculateTimeLeft = () => {
      const now = new Date();
      const endDate = new Date(targetDate);
      const difference = endDate.getTime() - now.getTime();

      if (difference <= 0) {
        // Waktu habis
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      // Hitung hari, jam, menit, dan detik
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    };

    // Set nilai awal timeLeft
    setTimeLeft(calculateTimeLeft());

    // Update countdown setiap detik
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);

      // Hentikan timer jika waktu habis
      if (
        newTimeLeft.days === 0 &&
        newTimeLeft.hours === 0 &&
        newTimeLeft.minutes === 0 &&
        newTimeLeft.seconds === 0
      ) {
        clearInterval(timer);
      }
    }, 1000);

    // Cleanup interval saat component unmount
    return () => clearInterval(timer);
  }, []);

  // Format the time display
  const formatTime = (days: number, minutes: number) => {
    return `in ${days.toString().padStart(2, "0")}d ${minutes
      .toString()
      .padStart(2, "0")}m`;
  };

  // State untuk animasi progress bar
  const [progressAnimation, setProgressAnimation] = useState(false);
  const [progressPercentage, setProgressPercentage] = useState(0);
  const [committedValue, setCommittedValue] = useState(0);
  const [limitValue, setLimitValue] = useState(0);

  // Refs untuk section yang akan dianimasikan saat tampil di viewport
  const videoRef = useRef(null);
  const isVideoInView = useInView(videoRef, { once: true, amount: 0.3 });

  const contentRef = useRef(null);
  const isContentInView = useInView(contentRef, { once: true, amount: 0.3 });

  const progressRef = useRef(null);
  const isProgressInView = useInView(progressRef, { once: true, amount: 0.3 });

  // Button hover states
  const [contributeHover, setContributeHover] = useState(false);
  const [whyHover, setWhyHover] = useState(false);

  // Handler untuk tombol Contribute
  const handleContributeClick = () => {
    // setLoadingMessage("Loading...");
    setShowLoadingPopup(true);
  };

  // Handler untuk menutup popup
  const handleClosePopup = () => {
    setShowLoadingPopup(false);
  };

  // Handler untuk smooth scroll ke hypothesis section
  const scrollToHypothesis = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const hypothesisSection = document.getElementById("hypothesis");

    if (hypothesisSection) {
      // Untuk membuat scrolling yang smooth
      const start = window.pageYOffset;
      const end =
        hypothesisSection.getBoundingClientRect().top + window.pageYOffset;
      const duration = 800; // durasi dalam ms
      const startTime = performance.now();

      const animateScroll = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Fungsi easing untuk smooth scroll
        const easeInOutCubic = (t: number) =>
          t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

        const currentPosition =
          start + (end - start) * easeInOutCubic(progress);
        window.scrollTo(0, currentPosition);

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
    }
  };

  useEffect(() => {
    // Aktifkan animasi jika progress section terlihat
    if (isProgressInView) {
      const timer = setTimeout(() => {
        setProgressAnimation(true);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isProgressInView]);

  useEffect(() => {
    // Animasi persentase dan nilai committed/limit
    if (progressAnimation) {
      // Durasi animasi: 10 menit (600 detik)
      const totalDuration = 600000; // 10 menit dalam milidetik
      const targetPercentage = 50;
      const targetCommitted = 50;
      const targetLimit = 100;

      // Untuk progress bar - 10 menit
      const startTime = Date.now();
      let currentPercentage = 0;

      // Fungsi easeOutQuart - cepat di awal lalu melambat
      // t: waktu saat ini, b: nilai awal, c: perubahan nilai, d: durasi total
      const easeOutQuart = (t: number, b: number, c: number, d: number) => {
        t /= d;
        t--;
        return -c * (t * t * t * t - 1) + b;
      };

      // Interval untuk progress bar dan committed value - update setiap 1 detik
      const progressInterval = setInterval(() => {
        const elapsedTime = Date.now() - startTime;

        if (elapsedTime < totalDuration) {
          // Hitung nilai baru dengan easing (cepat di awal, lalu melambat)
          currentPercentage = easeOutQuart(
            elapsedTime,
            0,
            targetPercentage,
            totalDuration
          );

          // Update state progress bar dengan pembulatan 1 desimal
          const newPercentage = Math.min(
            Math.round(currentPercentage * 10) / 10,
            targetPercentage
          );
          setProgressPercentage(newPercentage);

          // Update committed value sinkron dengan persentase
          const newCommittedValue = Math.min(
            Math.round(
              (newPercentage / targetPercentage) * targetCommitted * 10
            ) / 10,
            targetCommitted
          );
          setCommittedValue(newCommittedValue);
        } else {
          // Animasi selesai
          clearInterval(progressInterval);
          setProgressPercentage(targetPercentage);
          setCommittedValue(targetCommitted);
        }
      }, 1000);

      // Animasi untuk limit value - tetap cepat
      const fastDuration = 1500; // 1.5 detik
      const steps = 50;
      const stepTime = fastDuration / steps;
      const limitIncrement = targetLimit / steps;
      let startLimit = 0;

      // Interval untuk animasi limit value - cepat
      const limitInterval = setInterval(() => {
        if (startLimit < targetLimit) {
          // Update limit value
          startLimit += limitIncrement;
          setLimitValue(
            Math.min(Math.round(startLimit * 10) / 10, targetLimit)
          );
        } else {
          clearInterval(limitInterval);
          // Pastikan nilai akhir tepat
          setLimitValue(targetLimit);
        }
      }, stepTime);

      return () => {
        clearInterval(progressInterval);
        clearInterval(limitInterval);
      };
    }
  }, [progressAnimation]);

  // Variants untuk animasi
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const staggerChildrenVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const logoHoverVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.3 },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 400,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <section className="relative text-white w-full py-8 md:py-12 pt-16 md:pt-24 overflow-hidden">
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
            className="absolute h-2 w-2 rounded-full bg-[#a857ff] opacity-20 top-[30%] left-[25%]"
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
            className="absolute h-1 w-1 rounded-full bg-[#a857ff] opacity-40 top-[55%] left-[85%]"
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
            className="absolute h-2 w-2 rounded-full bg-[#a857ff] opacity-20 top-[70%] left-[40%]"
            animate={{
              opacity: [0.2, 0.4, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          ></motion.div>
          <motion.div
            className="absolute h-1 w-1 rounded-full bg-[#a857ff] opacity-30 top-[20%] left-[70%]"
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.5, 1],
              boxShadow: [
                "0 0 0 0 rgba(168, 87, 255, 0)",
                "0 0 3px 1px rgba(168, 87, 255, 0.3)",
                "0 0 0 0 rgba(168, 87, 255, 0)",
              ],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          ></motion.div>
          <motion.div
            className="absolute h-1.5 w-1.5 rounded-full bg-[#a857ff] opacity-25 top-[40%] left-[55%]"
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

      {/* Content section with relative positioning */}
      <div className="relative z-10">
        {/* Loading Popup */}
        <AnimatePresence>
          {showLoadingPopup && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-[#12121290] backdrop-blur-xl p-8 rounded-xl shadow-xl flex flex-col items-center gap-4 max-w-md w-full mx-4 border border-[#a857ff]/20"
              >
                <div className="w-12 h-12 border-4 border-[#a857ff] border-t-transparent rounded-full animate-spin" />
                <p className="text-white text-xl font-medium text-center">
                  Loading...
                </p>
                <Button
                  onClick={handleClosePopup}
                  className="mt-4 bg-[#a857ff] hover:bg-[#a857ff]/90 text-white rounded-[100px] px-6 py-2 font-medium w-full sm:w-auto"
                >
                  Close
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="px-4 md:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
            {/* Left side - Video placeholder */}
            <motion.div
              ref={videoRef}
              initial="hidden"
              animate={isVideoInView ? "visible" : "hidden"}
              // variants={fadeInUpVariants}
              className="p-0 backdrop-blur-md rounded-3xl aspect-video flex items-center justify-center text-white text-lg md:text-xl font-medium overflow-hidden "
              whileHover={{
                scale: 1.02,
                // boxShadow: "0 8px 30px -10px rgba(168, 87, 255, 0.3)",
              }}
              transition={{ duration: 0.3 }}
            >
              {/* {!isPlaying ? (
                <div className="border border-web3-accent rounded-xl overflow-hidden">
                  <Image
                    src="/video-cover.webp"
                    alt="Video Cover"
                    className="absolute inset-0 object-cover"
                    fill
                  />
                  <div className="relative z-10 aspect-square w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full bg-web3-dark/70 flex items-center justify-center animate-pulse">
                    <motion.button
                      className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full bg-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out"
                      title="Play Video"
                      aria-label="Play Video"
                      variants={playButtonVariants}
                      whileHover="hover"
                      onClick={() => setIsPlaying(true)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-10 h-10 md:w-14 md:h-14 text-[#a857ff] hover:text-[#8a3dd9]"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M8 5.14v14l11-7l-11-7z" />
                      </svg>
                    </motion.button>
                  </div>
                </div>
              ) : (
                <iframe
                  className="w-full h-full"
                  src="https://drive.google.com/file/d/1IReId-qUNM0xugTCGfh-gnP1nE0tJ7iV/preview"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )} */}
              <iframe
                className="w-full h-full"
                src="https://drive.google.com/file/d/1wMotQfzTDl-fe-0G7gMmdK7608Pv5IAo/preview"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>

            {/* Right side - Content */}
            <motion.div
              ref={contentRef}
              initial="hidden"
              animate={isContentInView ? "visible" : "hidden"}
              variants={staggerChildrenVariants}
              className="flex flex-col space-y-4 md:space-y-6 mt-4 md:mt-0"
            >
              <motion.div
                variants={fadeInUpVariants}
                className="flex flex-col sm:flex-row items-center sm:justify-between gap-4"
              >
                <motion.h1
                  className="text-3xl sm:text-4xl md:text-5xl font-bold"
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                >
                  <span className="text-[#a857ff]">Shin</span>
                  <span className="text-white">DAO</span>
                </motion.h1>

                <motion.div
                  variants={fadeInUpVariants}
                  className="flex flex-wrap items-center justify-center sm:justify-end gap-3 sm:gap-4"
                >
                  {/* Logo with project image */}
                  <motion.div
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden relative"
                    whileHover={logoHoverVariants.hover}
                  >
                    <Image
                      src="/project/Shindao.jpeg"
                      alt="ShinDAO Logo"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                    <div className="absolute inset-0 bg-[#a857ff] opacity-20"></div>
                  </motion.div>
                  <div className="flex space-x-2">
                    <motion.a
                      href="https://pubmed.ncbi.nlm.nih.gov/38473938/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-[#a857ff] rounded-full flex items-center justify-center text-white text-xs hover:bg-[#a857ff]/80 transition-colors cursor-pointer"
                      title="Research Paper"
                      whileHover={{ scale: 1.1, backgroundColor: "#a857ff" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <MdOutlineArticle size={18} />
                    </motion.a>
                    <motion.a
                      href="https://x.com/cancerdotfun"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-[#a857ff] rounded-full flex items-center justify-center text-white cursor-pointer"
                      title="Twitter/X"
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "#a857ff]/80",
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaXTwitter size={16} />
                    </motion.a>
                  </div>

                  {/* Presale countdown - Now dynamic */}
                  <motion.div
                    className="bg-[#17171730] backdrop-blur-xl rounded-full px-3 sm:px-4 min-w-[120px] sm:min-w-32 flex items-center justify-center text-white text-xs sm:text-sm font-medium h-7 sm:h-8 border border-[#a857ff]/20 shadow-md"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 15px -5px rgba(168, 87, 255, 0.5)",
                    }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    Creation Ends {formatTime(timeLeft.days, timeLeft.minutes)}
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Description text */}
              <motion.div
                variants={fadeInUpVariants}
                className="text-sm sm:text-base bg-[#12121230] backdrop-blur-md p-4 md:p-5 rounded-2xl border border-white/10 shadow-md"
              >
                <motion.p
                  className="mb-3 md:mb-4 text-[#8e8888]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  IFI6 is a gene found to be overactive in esophageal cancer and
                  it helps tumors hide from the immune system. At{" "}
                  <span className="text-[#a857ff] font-medium">ShinDAO</span>,
                  we&apos;re pioneering decentralized cancer research by
                  targeting IFI6 to unlock new therapies. Your contributions
                  help fund lab experiments, immune profiling, and drug
                  discovery all governed by the DAO.
                </motion.p>
                <motion.p
                  className="font-bold text-sm sm:text-base text-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                >
                  Join us in rewriting the future of cancer research powered by
                  community, not corporations
                </motion.p>
              </motion.div>

              {/* Action buttons */}
              <motion.div
                variants={fadeInUpVariants}
                className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 md:space-x-6 pt-2"
              >
                <motion.div
                  onHoverStart={() => setContributeHover(true)}
                  onHoverEnd={() => setContributeHover(false)}
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="w-full sm:w-auto"
                >
                  <Button
                    onClick={handleContributeClick}
                    className="bg-[#a857ff]/80 backdrop-blur-md hover:bg-[#a857ff]/90 text-white rounded-[100px] px-6 md:px-12 py-6 md:py-8 text-lg md:text-xl font-bold shadow-lg shadow-[#a857ff]/20 border border-[#a857ff]/50 w-full sm:w-auto"
                  >
                    <motion.span
                      animate={contributeHover ? { y: [0, -5, 0] } : { y: 0 }}
                      transition={{
                        repeat: contributeHover ? Infinity : 0,
                        duration: 1,
                        ease: "easeInOut",
                      }}
                    >
                      Contribute
                    </motion.span>
                  </Button>
                </motion.div>

                <motion.div
                  onHoverStart={() => setWhyHover(true)}
                  onHoverEnd={() => setWhyHover(false)}
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="w-full sm:w-auto"
                >
                  <Button
                    onClick={scrollToHypothesis}
                    className="bg-white/80 backdrop-blur-md hover:bg-white/90 text-black rounded-[100px] px-6 md:px-12 py-6 md:py-8 text-lg md:text-xl font-bold shadow-lg shadow-white/20 border border-white/50 w-full sm:w-auto"
                  >
                    <motion.span
                      animate={whyHover ? { y: [0, -5, 0] } : { y: 0 }}
                      transition={{
                        repeat: whyHover ? Infinity : 0,
                        duration: 1,
                        ease: "easeInOut",
                      }}
                    >
                      Why This Matters
                    </motion.span>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Progress Section */}
          <motion.div
            ref={progressRef}
            initial="hidden"
            animate={isProgressInView ? "visible" : "hidden"}
            variants={fadeInUpVariants}
            className="mt-8 md:mt-12"
          >
            <motion.div
              className="bg-gradient-to-br from-[#12121270] via-[#1c1c2d80] to-[#19193070] rounded-3xl p-6 md:p-8 border border-[#a857ff]/30 backdrop-blur-xl shadow-lg shadow-[#a857ff]/10"
              whileHover={{
                scale: 1.01,
                boxShadow: "0 10px 40px -15px rgba(168, 87, 255, 0.3)",
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Progress header */}
              <motion.div
                className="bg-gradient-to-r from-[#a857ff]/30 via-[#1c1c2d50] to-[#a857ff]/30 text-white text-center py-2 md:py-3 rounded-full text-lg md:text-xl font-medium mb-8 md:mb-12 border border-[#a857ff]/40 backdrop-blur-md shadow-md"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{
                  boxShadow: "0 0 20px -5px rgba(168, 87, 255, 0.5)",
                  backgroundColor: "rgba(28, 28, 45, 0.6)",
                }}
              >
                Creation Progress
              </motion.div>

              <div className="flex flex-col md:flex-row items-center justify-between mb-4 gap-5 md:gap-0">
                {/* Left side - Creation Committed */}
                <motion.div
                  className="text-center md:text-left mb-2 md:mb-0 w-full md:w-auto"
                  variants={fadeInUpVariants}
                >
                  <motion.h3
                    className="text-xl md:text-2xl font-bold text-white"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    Creation Commited
                  </motion.h3>
                  <motion.p
                    className="text-2xl md:text-3xl font-bold text-[#a857ff]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    {committedValue}M $CANCER
                  </motion.p>
                </motion.div>

                {/* Progress bar */}
                <motion.div
                  className="w-full md:w-1/2 mx-0 md:mx-4"
                  variants={fadeInUpVariants}
                >
                  <motion.div
                    className="h-6 md:h-8 bg-gradient-to-r from-[#1c1c2d90] to-[#232338a0] backdrop-blur-md rounded-full overflow-hidden border border-[#a857ff]/40 shadow-inner shadow-black/30"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    whileHover={{
                      boxShadow: "0 0 15px rgba(168, 87, 255, 0.5)",
                    }}
                  >
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#a857ff] via-[#ae65ff] to-[#9345e6] rounded-full relative"
                      initial={{ width: "0%" }}
                      animate={{
                        width: progressAnimation
                          ? `${progressPercentage}%`
                          : "0%",
                      }}
                      transition={{ duration: 0.5, ease: "linear" }}
                    >
                      <motion.div
                        className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-r from-transparent to-white/30"
                        animate={{
                          x: [0, 15, 0],
                          opacity: [0, 0.7, 0],
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 2,
                          repeatDelay: 0.5,
                        }}
                      />
                    </motion.div>
                  </motion.div>
                  <motion.div
                    className="text-center mt-2 text-lg md:text-xl text-white flex justify-center items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                  >
                    <motion.span
                      className="font-bold bg-gradient-to-r from-[#a857ff] to-[#9345e6] bg-clip-text text-transparent px-2"
                      animate={{
                        scale: [1, 1.1, 1],
                        textShadow: [
                          "0 0 0px rgba(168, 87, 255, 0)",
                          "0 0 5px rgba(168, 87, 255, 0.6)",
                          "0 0 0px rgba(168, 87, 255, 0)",
                        ],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                        repeatDelay: 0.5,
                      }}
                    >
                      {progressPercentage}%
                    </motion.span>
                  </motion.div>
                </motion.div>

                {/* Right side - Creation Limit */}
                <motion.div
                  className="text-center md:text-right mt-2 md:mt-0 w-full md:w-auto"
                  variants={fadeInUpVariants}
                >
                  <motion.h3
                    className="text-xl md:text-2xl font-bold text-white"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    Creation Limit
                  </motion.h3>
                  <motion.p
                    className="text-2xl md:text-3xl font-bold text-[#a857ff]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    {limitValue}M $CANCER
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
