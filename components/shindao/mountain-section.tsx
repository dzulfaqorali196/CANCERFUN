"use client"

import Image from "next/image"
import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"

export default function MountainSection() {
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  useEffect(() => {
    // Cek apakah tampilan mobile
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Panggil saat komponen dimuat
    checkIfMobile();
    
    // Tambahkan event listener untuk resize
    window.addEventListener('resize', checkIfMobile);
    
    // Hapus event listener saat komponen di-unmount
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);
  
  useEffect(() => {
    // Mendapatkan dimensi asli gambar
    const img = new window.Image();
    img.onload = () => {
      setImageDimensions({
        width: img.width,
        height: img.height
      });
    };
    img.src = "/Shindao/Mountain/Mountain.png";
  }, []);

  // Variants untuk animasi
  const mountainVariants = {
    hidden: { 
      opacity: 0,
      scale: 1.2
    },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut"
      }
    }
  };

  const contentVariants = {
    hidden: { 
      opacity: 0,
      x: isMobile ? 0 : 100
    },
    visible: { 
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5,
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.3
      }
    }
  };

  const textVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  // Hitung tinggi section responsif untuk mobile
  const getSectionHeight = () => {
    if (imageDimensions.height <= 0) return "auto";
    
    if (isMobile) {
      // Untuk mobile, gunakan tinggi yang lebih pendek
      return "auto";
    } else {
      // Untuk desktop, gunakan tinggi asli gambar
      return `${imageDimensions.height}px`;
    }
  };

  return (
    <motion.section 
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="bg-black text-white w-full relative overflow-hidden min-h-[500px] md:min-h-0" 
      style={{ height: getSectionHeight() }}
    >
      {/* Background solid color */}
      <div className="absolute inset-0 bg-black z-0"></div>
      
      {/* Ubah menjadi: */}
      <div className="absolute inset-0 z-0">
        {/* Gradient overlay background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f18] via-[#121226] to-[#14142b]"></div>
        
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.343 0L13.8 8.544 15.214 9.96l9.9-9.9h-2.77zm22.628 0L53.8 8.828 52.385 10.243 41.143 0h3.828zm-16.97 0L36.8 8.544 35.385 9.96l-9.9-9.9h2.77zm11.314 0L48.8 8.485 47.385 9.9l-7.9-7.9h2.83zm-5.657 0L41.8 8.485 40.385 9.9l-7.9-7.9h2.83zM27.03 0L33.8 6.77 32.385 8.185l-7.9-7.9h2.544zm10.97 0L46.8 8.8 45.385 10.215l-7.9-7.9h2.544zM32.686 0L42.8 10.115 41.385 11.53l-11.313-11.314h2.614zM16.686 0L6.57 10.115 7.985 11.53l11.314-11.314h-2.614zM41.343 0L53.8 12.457 52.385 13.87 39.03 0h2.313zm-22.628 0L6.57 12.457 7.985 13.87 21.343 0h-2.628zm5.657 0L16.8 7.57 18.214 8.985l7.9-7.9h-2.544zm5.657 0L26.8 7.57 28.214 8.985l7.9-7.9h-2.544zm5.657 0L36.8 7.57 38.214 8.985l7.9-7.9h-2.544zm5.657 0L46.8 7.57 48.214 8.985l7.9-7.9h-2.544zm-16.97 0L16.8 12.457l1.414 1.415L30.97 0h-2.313zm11.314 0L41.8 12.457l1.414 1.415L54.284 0h-2.313zM22.343 0L13.8 8.544l1.414 1.415 9.9-9.9h-2.77zm5.657 0L21.8 6.2l1.414 1.415L29.9 0h-2.544z' fill='%23a857ff' fill-opacity='0.15' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        ></div>
        
        {/* Radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(168,87,255,0.12),transparent_70%)]"></div>
      </div>
      
      {/* Background image */}
      <motion.div 
        variants={mountainVariants}
        className="absolute inset-0 w-full h-full z-0 mix-blend-screen"
      >
        <Image
          src="/Shindao/Mountain/Mountain.png"
          alt="ShinDAO Mountain"
          fill
          className="object-cover md:object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 100vw"
          style={{
            objectPosition: isMobile ? 'center 70%' : 'center',
            mixBlendMode: 'screen' as const
          }}
        />
      </motion.div>
      
      {/* Light particles/dots dengan animasi */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-10 pointer-events-none">
        <motion.div 
          className="absolute h-1.5 w-1.5 rounded-full bg-[#a857ff] opacity-30 top-[25%] left-[20%]"
          animate={{ 
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.3, 1],
            boxShadow: [
              "0 0 0 0 rgba(168, 87, 255, 0)",
              "0 0 5px 3px rgba(168, 87, 255, 0.4)",
              "0 0 0 0 rgba(168, 87, 255, 0)"
            ]
          }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
        ></motion.div>
        <motion.div 
          className="absolute h-2 w-2 rounded-full bg-[#a857ff] opacity-20 top-[65%] left-[75%]"
          animate={{ 
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.5, 1]
          }}
          transition={{ duration: 7, repeat: Infinity, repeatType: "reverse" }}
        ></motion.div>
        <motion.div 
          className="absolute h-1 w-1 rounded-full bg-[#a857ff] opacity-40 top-[15%] left-[60%]"
          animate={{ 
            opacity: [0.4, 0.7, 0.4],
            scale: [1, 1.4, 1],
            boxShadow: [
              "0 0 0 0 rgba(168, 87, 255, 0)",
              "0 0 5px 3px rgba(168, 87, 255, 0.4)",
              "0 0 0 0 rgba(168, 87, 255, 0)"
            ]
          }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
        ></motion.div>
      </div>
      
      {/* Content overlay */}
      <div className="px-4 md:px-12 max-w-7xl mx-auto relative z-20 h-full flex flex-col md:block">
        <motion.div 
          variants={contentVariants}
          className="w-full md:w-1/2 md:ml-auto pt-12 pb-16 md:pt-16 md:pb-0 pl-0 md:pl-40 text-center md:text-left"
        >
          <div className="bg-black/40 p-4 md:p-0 rounded-lg md:bg-transparent">
            <motion.h2 
              variants={textVariants}
              className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-white"
            >
              From <motion.span
                      initial={{ color: "#fff" }}
                      animate={isInView ? { color: "#a857ff" } : { color: "#fff" }}
                      transition={{ delay: 1.2, duration: 0.8 }}
                      className="text-[#a857ff]"
                    >
                      cancer-curing
                    </motion.span> enzymes to<br />
              a <motion.span
                   initial={{ color: "#fff" }}
                   animate={isInView ? { color: "#a857ff" } : { color: "#fff" }}
                   transition={{ delay: 1.5, duration: 0.8 }}
                   className="text-[#a857ff]"
                 >
                   decentralized
                 </motion.span> biotech pipeline
            </motion.h2>
            <motion.p 
              variants={textVariants}
              className="text-xl sm:text-2xl md:text-4xl font-bold"
            >
              <motion.span
                initial={{ color: "#fff", scale: 1 }}
                animate={isInView ? { color: "#a857ff", scale: [1, 1.1, 1] } : { color: "#fff", scale: 1 }}
                transition={{ delay: 1.8, duration: 1, times: [0, 0.5, 1] }}
                className="text-[#a857ff]"
              >
                ShinDAO
              </motion.span> makes it possible.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
} 