// Variants for the title
export const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// Variants for the paragraph
export const paragraphVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.1 },
  },
};

// Variants for buttons (used inline)
// export const buttonVariants = {
//   hidden: { opacity: 0, scale: 0.95 },
//   visible: (i: number) => ({
//     opacity: 1,
//     scale: 1,
//     transition: { duration: 0.8, ease: "easeOut", delay: 0.2 + i * 0.1 },
//   }),
// };

// Variants for stats
export const statVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.4 + i * 0.1 },
  }),
};

// Variants for background blurs
export const blurVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

export const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: i * 0.05 },
  }),
};

export const motionButtonVariants = {
  hidden: {
    opacity: 0,
    y: -5,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },
};
