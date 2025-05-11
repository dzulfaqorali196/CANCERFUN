"use client";

import { motion } from "framer-motion";
import Image, { ImageProps } from "next/image";

const MotionImage = motion.create(
  Image as React.ComponentType<Omit<ImageProps, "ref">>
);

export { MotionImage };
