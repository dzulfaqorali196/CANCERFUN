"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Routes } from "@/constants/routes";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function Footer() {
  return (
    <motion.footer
      className="bg-black border-t border-white/10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="max-w-[1300px] mx-auto px-4 py-6 md:py-8">
        <motion.div
          className="flex justify-between items-center"
          variants={itemVariants}
        >
          <p className="[font-family:'Neue_Montreal-Regular',Helvetica] text-sm text-gray-400">
            © {new Date().getFullYear()} CancerFun. All rights reserved.
          </p>

          <Link
            href={Routes.TERMS_AND_CONDITIONS}
            target="_blank"
            className="[font-family:'Neue_Montreal-Regular',Helvetica] text-sm text-gray-400 hover:text-white transition-colors duration-200"
          >
            Terms and Conditions
          </Link>
        </motion.div>
      </div>
    </motion.footer>
  );
}
