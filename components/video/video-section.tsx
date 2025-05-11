"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

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

// const lightVariants = {
//   hidden: { opacity: 0, scale: 0.8 },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     transition: {
//       duration: 1,
//       ease: "easeOut",
//     },
//   },
// };

const cardVariants = {
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
};

// const videoPlaceholderVariants = {
//   hidden: {
//     opacity: 0,
//     scale: 0.9,
//     filter: "blur(10px)",
//   },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     filter: "blur(0px)",
//     transition: {
//       duration: 0.8,
//       ease: "easeOut",
//       delay: 0.3,
//     },
//   },
// };

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

export const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <motion.section
        className="w-full bg-black py-12 md:py-28"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="relative w-full">
          {/* Decorative elements and main content remain unchanged */}
          <div className="flex flex-col items-center gap-6 md:gap-10 pt-12 md:pt-24">
            <motion.h2
              className="text-center text-3xl md:text-[64px] leading-[1.2] md:leading-[64px] font-['Neue_Montreal'] max-w-[1350px] mx-auto px-4"
              variants={headingVariants}
            >
              <span className="text-white tracking-[0]">De</span>
              <span className="text-[#aaaaaa] tracking-[0]">Sci</span>
              <span className="text-white tracking-[0]"> is the </span>
              <span className="text-[#a857ff] tracking-[0]">
                Future of Science
              </span>
            </motion.h2>

            {/* Video card container */}
            <div className="w-full px-4 md:px-8 lg:px-16">
              <motion.div variants={cardVariants}>
                <Card className="w-full max-w-4xl mx-auto p-0 gap-0 mt-4 md:mt-6 bg-transparent border-0 rounded-xl md:rounded-3xl overflow-hidden">
                  <CardContent className="flex items-center justify-center p-0 relative aspect-video">
                    {/* {!isPlaying ? (
                      <>
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
                      </>
                    ) : (
                      // <iframe
                      //   className="w-full h-full"
                      //   src="https://www.youtube.com/embed/A07Xc95CEZY?autoplay=1&controls=1"
                      //   title="YouTube video player"
                      //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      //   allowFullScreen
                      // ></iframe>
                      <iframe
                        width="1154"
                        height="646"
                        // src={`https://drive.google.com/file/d/10ikXfUA7WVEp-Y9gW0M6Op3FNy825bWk/preview`}
                        src={`https://drive.google.com/file/d/1IReId-qUNM0xugTCGfh-gnP1nE0tJ7iV/preview`}
                        allow="autoplay"
                        title="Google Drive Video"
                      ></iframe>
                    )} */}
                    <iframe
                      width="1154"
                      height="646"
                      // src={`https://drive.google.com/file/d/10ikXfUA7WVEp-Y9gW0M6Op3FNy825bWk/preview`}
                      src={`https://drive.google.com/file/d/1IReId-qUNM0xugTCGfh-gnP1nE0tJ7iV/preview`}
                      allow="autoplay"
                      title="Google Drive Video"
                    ></iframe>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

/*
"use client";

import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import "react-modal-video/css/modal-video.min.css";
import Image from "next/image";

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

const lightVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const cardVariants = {
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
};

const videoPlaceholderVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.3,
    },
  },
};

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

export const VideoSection = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <motion.section
        className="w-full bg-black py-12 md:py-28"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="relative w-full">
          <div className="relative">
            <motion.img
              className="absolute top-[-25px] md:top-[-50px] right-0 w-auto h-[200px] md:h-[393px] select-none pointer-events-none z-0"
              alt="Decorative elements"
              src="/Video Section/light-right.svg"
              variants={lightVariants}
            />
            <motion.img
              className="absolute top-[-25px] md:top-[-50px] left-0 w-auto h-[200px] md:h-[393px] select-none pointer-events-none z-0"
              alt="Decorative elements"
              src="/Video Section/light-left.png"
              variants={lightVariants}
            />

            <div className="flex flex-col items-center gap-6 md:gap-10 pt-12 md:pt-24">
              <motion.h2
                className="text-center text-3xl md:text-[64px] leading-[1.2] md:leading-[64px] font-['Neue_Montreal'] max-w-[1350px] mx-auto px-4"
                variants={headingVariants}
              >
                <span className="text-white tracking-[0]">De</span>
                <span className="text-[#aaaaaa] tracking-[0]">Sci</span>
                <span className="text-white tracking-[0]"> is the </span>
                <span className="text-[#a857ff] tracking-[0]">
                  Future of Science
                </span>
              </motion.h2>

              <div className="w-full px-4 md:px-8 lg:px-16">
                <motion.div variants={cardVariants}>
                  <Card className="w-full max-w-4xl mx-auto p-0 gap-0 mt-4 md:mt-6 bg-transparent border-0 rounded-xl md:rounded-3xl overflow-hidden">
                    <div className="relative"></div>
                    <CardContent className="flex items-center justify-center p-0 relative aspect-video">
                      <Image
                        src="/video-cover.webp"
                        alt="Video Cover"
                        className="absolute inset-0 object-cover"
                        fill
                      />
                      <motion.button
                        className="w-0 h-0 border-t-[20px] md:border-t-[30px] border-t-transparent border-l-[35px] md:border-l-[52px] border-l-[#a857ff] border-b-[20px] md:border-b-[30px] border-b-transparent hover:border-l-[#8a3dd9] transition-colors z-10"
                        title="Play Video"
                        aria-label="Play Video"
                        variants={playButtonVariants}
                        whileHover="hover"
                        onClick={() => setOpen(true)}
                      />
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      <ModalVideo
        channel="youtube"
        videoId="A07Xc95CEZY"
        isOpen={isOpen}
        onClose={() => setOpen(false)}
      />
    </>
  );
};
*/
