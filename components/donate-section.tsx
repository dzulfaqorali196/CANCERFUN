"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useAnimation } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export default function DonatePage() {
  const controls = useAnimation()
  const sectionRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener("resize", checkMobile)
    
    // Intersection Observer for scroll animation
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible")
        }
      },
      { threshold: 0.1 }
    )
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
      window.removeEventListener("resize", checkMobile)
    }
  }, [controls])
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  }
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6 }
    }
  }
  
  const buttonVariants = {
    hidden: { x: isMobile ? 0 : 100, y: isMobile ? 50 : 0, opacity: 0 },
    visible: { 
      x: 0, 
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.8, 
        delay: 0.3, 
        type: "spring", 
        stiffness: 100 
      }
    }
  }
  
  const characterVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 200, 
        damping: 10, 
        delay: 0.2 
      }
    }
  }
  
  const statisticsVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        delay: 0.5 
      }
    }
  }
  
  const textLineVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.4 }
    }
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.8,
        delay: 0.3
      }
    }
  }

  // Mobile Version Layout
  if (isMobile) {
    return (
      <motion.div 
        ref={sectionRef}
        className="relative min-h-screen w-full overflow-hidden bg-black"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        {/* Top Gradient */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-purple-900/70 to-transparent z-10"></div>
        
        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-purple-900/70 to-transparent z-10"></div>
        
        {/* Character */}
        <motion.div
          className="absolute top-6 left-6 w-20 h-20 z-20 hidden"
          variants={characterVariants}
        >
          <Image
            src="/Donate/icon.png"
            alt="Cancer character"
            width={80}
            height={80}
            className="object-contain"
          />
        </motion.div>
        
        {/* Header Section */}
        <div className="relative z-20 pt-24 px-4 text-center">
          <motion.h2 
            className="text-4xl font-bold text-white mb-2"
            variants={itemVariants}
          >
            Help Fight Cancer
          </motion.h2>
          
          <motion.p
            className="text-sm text-white/80 mb-6"
            variants={itemVariants}
          >
            Your donation makes a difference
          </motion.p>
        </div>
        
        {/* Patient Images - Stacked Differently */}
        <div className="relative z-20 px-6 py-4">
          <div className="flex flex-col space-y-4">
            <motion.div 
              className="relative rounded-lg overflow-hidden"
              variants={imageVariants}
            >
              <Image
                src="/Donate/bocil.png"
                alt="Child cancer patient"
                width={400}
                height={250}
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </motion.div>
            
            <motion.div 
              className="relative rounded-lg overflow-hidden"
              variants={imageVariants}
            >
              <Image
                src="/Donate/kakek.png"
                alt="Elderly cancer patient"
                width={400}
                height={250}
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </motion.div>
          </div>
        </div>
        
        {/* Donate Button */}
        <motion.div 
          className="relative z-20 px-6 py-6"
          variants={buttonVariants}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="shadow-lg"
          >
            <Link
              href="https://donate.cancer.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl bg-purple-600 px-6 py-4 text-center text-xl font-bold text-white w-full flex items-center justify-center"
            >
              <span className="flex items-center justify-center w-full">Donate Now</span>
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Mission Text */}
        <motion.div 
          className="relative z-20 px-8 py-2 text-center w-full max-w-[400px] mx-auto"
          variants={itemVariants}
        >
          <p className="text-xs text-white/80 px-2 leading-relaxed">
            *Our mission aligns with{" "}
            <Link href="https://cancer.org" target="_blank" rel="noopener noreferrer" className="font-bold text-white underline">
              cancer.org
            </Link>
            <br />
            Donations made there directly support our shared fight against cancer.
          </p>
        </motion.div>
        
        {/* Statistics - Vertically Stacked */}
        <motion.div 
          className="relative z-20 px-6 py-6"
          variants={statisticsVariants}
        >
          <div className="flex flex-col items-center space-y-1 text-center">
            <motion.p 
              className="text-xl font-extrabold text-red-500"
              variants={textLineVariants}
            >
              70% of cancer deaths
            </motion.p>
            <motion.p 
              className="text-xl font-extrabold text-purple-600"
              variants={textLineVariants}
            >
              happen where most patients
            </motion.p>
            <motion.p 
              className="text-xl font-extrabold text-purple-600"
              variants={textLineVariants}
            >
              can't afford
            </motion.p>
            <motion.p 
              className="text-xl font-extrabold text-green-400"
              variants={textLineVariants}
            >
              early detection or treatment.
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    );
  }

  // Desktop Version Layout
  return (
    <motion.div 
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden py-16 md:py-0"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      {/* Full Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Donate/cancer-background.png"
          alt="Cancer donation campaign"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex min-h-screen w-full">
        {/* Purple Character */}
        <motion.div 
          className="absolute left-[5%] top-[10%] w-40 h-40 hidden"
          variants={characterVariants}
        >
          <Image
            src="/Donate/icon.png"
            alt="Cancer character"
            width={160}
            height={160}
            className="object-contain"
          />
        </motion.div>

        {/* Donate Button */}
        <motion.div 
          className="absolute right-[15%] top-[15%] w-[350px]"
          variants={buttonVariants}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="shadow-lg"
          >
            <Link
              href="https://donate.cancer.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-3xl bg-purple-600 px-12 py-10 h-40 text-5xl font-bold text-white w-full flex items-center justify-center"
            >
              <span className="flex items-center justify-center w-full">Donate</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Mission Text */}
        <motion.div 
          className="absolute w-[600px] text-white text-justify"
          style={{ right: "calc(5% - 125px)", top: "40%" }}
          variants={itemVariants}
        >
          <p className="text-lg leading-relaxed">
            <span className="font-semibold">*Our mission aligns with </span>
            <Link href="https://cancer.org" target="_blank" rel="noopener noreferrer" className="font-bold hover:underline underline">
              cancer.org
            </Link>
            <br />
            <span className="font-semibold">
              Donations made there directly support
            </span>
            <br />
            <span className="font-semibold">
              our shared fight against cancer.
            </span>
          </p>
        </motion.div>

        {/* Statistics Text */}
        <motion.div 
          className="absolute bottom-[15%] left-[48%] max-w-3xl"
          variants={statisticsVariants}
        >
          <div className="flex flex-col space-y-1">
            <div className="flex">
              <motion.span 
                className="text-4xl md:text-5xl font-extrabold text-red-500 tracking-wide"
                variants={textLineVariants}
              >
                70% of cancer deaths
              </motion.span>
              <motion.span 
                className="text-4xl md:text-5xl font-extrabold text-purple-600 tracking-wide ml-4"
                variants={textLineVariants}
              >
                happen
              </motion.span>
            </div>
            <motion.div
              variants={textLineVariants}
            >
              <span className="text-4xl md:text-5xl font-extrabold text-purple-600 tracking-wide">
                where most patients can't afford
              </span>
            </motion.div>
            <motion.div
              variants={textLineVariants}
            >
              <span className="text-4xl md:text-5xl font-extrabold text-green-400 tracking-wide">
                early detection or treatment.
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
