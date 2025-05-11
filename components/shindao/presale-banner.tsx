"use client"

import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function PresaleBanner() {
  const bannerRef = useRef(null)
  const isInView = useInView(bannerRef, { once: true, amount: 0.1 })

  // Variants untuk animasi
  const bannerContentVariants = {
    hidden: { 
      opacity: 0
    },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        when: "beforeChildren"
      }
    }
  }

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.5
      }
    }
  }

  // Teks presale yang akan diulang-ulang
  const presaleText = "PRESALE · PRESALE · PRESALE · PRESALE · PRESALE · PRESALE · PRESALE · PRESALE · ";

  return (
    <motion.div 
      ref={bannerRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={bannerContentVariants}
      className="bg-gradient-to-r from-[#4c1d95] via-[#7c3aed] to-[#4c1d95] py-2 md:py-3 text-white text-center overflow-hidden whitespace-nowrap relative w-full"
      style={{ marginTop: -1, marginBottom: -1 }}
    >
      {/* Pattern overlay untuk konsistensi visual */}
      <div className="absolute inset-0 opacity-10" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.343 0L13.8 8.544 15.214 9.96l9.9-9.9h-2.77zm22.628 0L53.8 8.828 52.385 10.243 41.143 0h3.828zm-16.97 0L36.8 8.544 35.385 9.96l-9.9-9.9h2.77zm11.314 0L48.8 8.485 47.385 9.9l-7.9-7.9h2.83zm-5.657 0L41.8 8.485 40.385 9.9l-7.9-7.9h2.83zM27.03 0L33.8 6.77 32.385 8.185l-7.9-7.9h2.544zm10.97 0L46.8 8.8 45.385 10.215l-7.9-7.9h2.544zM32.686 0L42.8 10.115 41.385 11.53l-11.313-11.314h2.614zM16.686 0L6.57 10.115 7.985 11.53l11.314-11.314h-2.614zM41.343 0L53.8 12.457 52.385 13.87 39.03 0h2.313zm-22.628 0L6.57 12.457 7.985 13.87 21.343 0h-2.628zm5.657 0L16.8 7.57 18.214 8.985l7.9-7.9h-2.544zm5.657 0L26.8 7.57 28.214 8.985l7.9-7.9h-2.544zm5.657 0L36.8 7.57 38.214 8.985l7.9-7.9h-2.544zm5.657 0L46.8 7.57 48.214 8.985l7.9-7.9h-2.544zm-16.97 0L16.8 12.457l1.414 1.415L30.97 0h-2.313zm11.314 0L41.8 12.457l1.414 1.415L54.284 0h-2.313zM22.343 0L13.8 8.544l1.414 1.415 9.9-9.9h-2.77zm5.657 0L21.8 6.2l1.414 1.415L29.9 0h-2.544z' fill='%23ffffff' fill-opacity='0.15' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      ></div>
      
      {/* Hapus div duplikat, gunakan hanya satu marquee */}
      <div className="flex relative w-fit animate-marquee z-10">
        <motion.div 
          variants={textVariants}
          className="flex whitespace-nowrap"
        >
          <motion.span 
            className="text-base md:text-lg font-bold tracking-wide"
            animate={{
              color: ["#ffffff", "#a857ff", "#ffffff"],
              textShadow: ["0px 0px 0px rgba(255,255,255,0)", "0px 0px 12px rgba(168,87,255,0.8)", "0px 0px 0px rgba(255,255,255,0)"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            {presaleText.repeat(24)}
          </motion.span>
        </motion.div>
      </div>
      
      {/* Glow effect */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <motion.div 
          className="absolute h-full w-20 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
          animate={{
            left: ["-10%", "110%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 3
          }}
        ></motion.div>
      </div>
    </motion.div>
  )
}

// Tambahkan keyframes untuk marquee di CSS global
const styles = `
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-marquee {
  animation: marquee 90s linear infinite;
}
`;

// Tambahkan style ke head saat komponen dimuat
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = styles;
  document.head.appendChild(styleElement);
} 