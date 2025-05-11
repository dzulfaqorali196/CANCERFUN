"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";
import { navMenuItems } from "@/constants/navbar-menus";
import { SiteSettings } from "@/constants/settings";
import { Routes } from "@/constants/routes";
import Image from "next/image";
// import AuthMenu from "@/components/auth/auth-menu";
import { ConnectWalletButton } from "@/components/wallet/connect-button";

const navVariants = {
  hidden: {
    y: -20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    y: -10,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const menuIconVariants = {
  closed: {
    rotate: 0,
    scale: 1,
  },
  opened: {
    rotate: 90,
    scale: 1.1,
  },
};

export function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isLogoHovered, setIsLogoHovered] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const navHeight = isScrolled ? "3.5rem" : "4.5rem"; // Menyesuaikan dengan tinggi navbar

  // Handle click outside
  const menuRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  React.useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 10);
    }

    onScroll(); // Check initial scroll position
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Efek untuk menangani scroll ke section setelah navigasi
  React.useEffect(() => {
    function scrollToSection() {
      if (pathname === "/" && window.location.hash) {
        const targetId = window.location.hash.substring(1);
        const element = document.getElementById(targetId);

        if (element) {
          // Pertama scroll ke atas halaman
          window.scrollTo({ top: 0, behavior: "auto" });

          // Scroll ke target section setelah delay
          const timeoutId = window.setTimeout(() => {
            const yOffset = -100; // Offset untuk navbar
            const y =
              element.getBoundingClientRect().top +
              window.pageYOffset +
              yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
          }, 800);

          return () => window.clearTimeout(timeoutId);
        }
      }
    }

    scrollToSection();
  }, [pathname]);

  const handleSmoothScroll = async (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    // Jika href adalah anchor link (dimulai dengan #)
    if (href.startsWith("#")) {
      const targetId = href.substring(1);

      // Jika sudah di halaman home, langsung scroll
      if (pathname === Routes.HOME) {
        const element = document.getElementById(targetId);
        if (element) {
          const yOffset = -100;
          const y =
            element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
          // Update URL hash tanpa scroll tambahan
          window.history.pushState({}, "", href);
        }
      } else {
        // Jika bukan di halaman home, navigasi ke home dulu
        await router.push(Routes.HOME + href);
      }
    } else {
      // Untuk link external (contact, docs, dll)
      router.push(href);
    }

    setIsOpen(false);
  };

  const handleLogoClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    try {
      // Jika bukan di halaman home, navigasi dulu
      if (pathname !== Routes.HOME) {
        // Gunakan replace untuk menghindari masalah dengan history
        await router.replace(Routes.HOME);
        // Pastikan URL bersih dari hash
        window.history.replaceState({}, "", Routes.HOME);
        // Force reload halaman untuk memastikan perubahan tampilan
        window.location.reload();
      } else {
        // Jika sudah di home, cukup scroll ke atas
        window.history.pushState({}, "", Routes.HOME);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } catch (error) {
      console.error("Navigation error:", error);
      // Fallback: langsung navigasi dengan reload
      window.location.href = Routes.HOME;
    }
  };

  return (
    <>
      <motion.header
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isScrolled
            ? "bg-web3-darker/80 backdrop-blur-md py-2 md:py-3"
            : "bg-transparent py-3 md:py-5"
        }`}
      >
        <div className="container flex items-center justify-between px-4 md:px-6">
          <motion.div variants={itemVariants}>
            <Link
              href={Routes.HOME}
              className="flex items-center gap-2"
              onMouseEnter={() => setIsLogoHovered(true)}
              onMouseLeave={() => setIsLogoHovered(false)}
              onClick={handleLogoClick}
            >
              <div className="relative w-6 h-6 md:w-8 md:h-8 flex items-center justify-center">
                <Image
                  src="/images/cancercoin-logo.png"
                  alt={SiteSettings.title.full}
                  className="w-full h-full object-contain"
                  width={32}
                  height={32}
                />
              </div>
              <div className="relative w-20 h-5 md:w-24 md:h-6 block md:hidden lg:block overflow-hidden">
                <motion.div
                  initial={{ opacity: 1, y: 0 }}
                  animate={{
                    opacity: isLogoHovered ? 0 : 1,
                    y: isLogoHovered ? -20 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 top-0 w-full h-full"
                >
                  <Image
                    src="/images/cancercoin-text.png"
                    alt={SiteSettings.title.full}
                    className="w-full h-full object-contain"
                    width={96}
                    height={24}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: isLogoHovered ? 1 : 0,
                    y: isLogoHovered ? 0 : 20,
                  }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 top-0 w-full h-full flex items-center justify-start text-base md:text-lg font-semibold"
                >
                  <span className="text-[#a857ff]">Go</span>
                  <span className="mx-1"> </span>
                  <span className="text-green-500">Home</span>
                </motion.div>
              </div>
              <span className="sr-only">{SiteSettings.title.short}</span>
            </Link>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="hidden md:flex items-center gap-6 lg:gap-8"
          >
            {navMenuItems.map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.3,
                      ease: [0.4, 0, 0.2, 1],
                    },
                  },
                  exit: {
                    y: 20,
                    opacity: 0,
                    transition: {
                      duration: 0.3,
                      ease: [0.4, 0, 0.2, 1],
                    },
                  },
                }}
              >
                <Link
                  href={item.href}
                  onClick={(e) => {
                    if (item.isExternal) return;
                    handleSmoothScroll(e, item.href);
                    setIsOpen(false);
                  }}
                  className="text-base hover:text-[#a857ff] transition-all duration-300 relative group inline-block transform hover:scale-105"
                  target={item.isExternal ? "_blank" : undefined}
                  rel={item.isExternal ? "noopener noreferrer" : undefined}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#a857ff] transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_10px_#a857ff] group-hover:blur-[1px]"></span>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            <ConnectWalletButton />
            {/* <AuthMenu /> */}
          </div>

          <div className="md:hidden">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 relative overflow-hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              <motion.div
                animate={isOpen ? "opened" : "closed"}
                variants={menuIconVariants}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {isOpen ? (
                  <X className="h-4 w-4" />
                ) : (
                  <Menu className="h-4 w-4" />
                )}
              </motion.div>
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[99]"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              ref={menuRef}
              className="fixed left-0 right-0 z-[101] overflow-hidden md:hidden"
              style={{
                top: navHeight,
                height: `calc(100vh - ${navHeight})`,
              }}
            >
              <motion.div
                className="w-full h-full bg-web3-dark border-t border-web3-gray/20"
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-100%" }}
                transition={{
                  duration: 0.3,
                  ease: [0.4, 0, 0.2, 1],
                }}
              >
                <div className="h-full w-full p-6 overflow-y-auto">
                  <motion.div
                    className="flex flex-col gap-6 mt-8"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          delayChildren: 0.1,
                          staggerChildren: 0.05,
                        },
                      },
                      exit: {
                        opacity: 0,
                        transition: {
                          staggerChildren: 0.05,
                          staggerDirection: -1,
                        },
                      },
                    }}
                  >
                    {/* {navMenuItems.map((item, index) => (
                      <motion.div
                        key={index}
                        variants={{
                          hidden: { y: 20, opacity: 0 },
                          visible: {
                            y: 0,
                            opacity: 1,
                            transition: {
                              duration: 0.3,
                              ease: [0.4, 0, 0.2, 1],
                            },
                          },
                          exit: {
                            y: 20,
                            opacity: 0,
                            transition: {
                              duration: 0.3,
                              ease: [0.4, 0, 0.2, 1],
                            },
                          },
                        }}
                      >
                        <Link
                          href={item.href}
                          onClick={(e) => {
                            handleSmoothScroll(e, item.href);
                            setIsOpen(false);
                          }}
                          className="text-base hover:text-[#a857ff] transition-all duration-300 relative group inline-block transform hover:scale-105"
                        >
                          {item.label}
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#a857ff] transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_10px_#a857ff] group-hover:blur-[1px]"></span>
                        </Link>
                      </motion.div>
                    ))} */}
                    {navMenuItems.map((item, index) => (
                      <motion.div
                        key={index}
                        variants={{
                          hidden: { y: 20, opacity: 0 },
                          visible: {
                            y: 0,
                            opacity: 1,
                            transition: {
                              duration: 0.3,
                              ease: [0.4, 0, 0.2, 1],
                            },
                          },
                          exit: {
                            y: 20,
                            opacity: 0,
                            transition: {
                              duration: 0.3,
                              ease: [0.4, 0, 0.2, 1],
                            },
                          },
                        }}
                      >
                        <Link
                          href={item.href}
                          onClick={(e) => {
                            if (item.isExternal) return;
                            handleSmoothScroll(e, item.href);
                            setIsOpen(false);
                          }}
                          className="text-base hover:text-[#a857ff] transition-all duration-300 relative group inline-block transform hover:scale-105"
                          target={item.isExternal ? "_blank" : undefined}
                          rel={
                            item.isExternal ? "noopener noreferrer" : undefined
                          }
                        >
                          {item.label}
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#a857ff] transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_10px_#a857ff] group-hover:blur-[1px]"></span>
                        </Link>
                      </motion.div>
                    ))}
                    <motion.div
                      variants={{
                        hidden: { y: 20, opacity: 0 },
                        visible: {
                          y: 0,
                          opacity: 1,
                          transition: {
                            duration: 0.3,
                            ease: [0.4, 0, 0.2, 1],
                          },
                        },
                        exit: {
                          y: 20,
                          opacity: 0,
                          transition: {
                            duration: 0.3,
                            ease: [0.4, 0, 0.2, 1],
                          },
                        },
                      }}
                      className="flex flex-col gap-4 mt-6"
                    >
                      <ConnectWalletButton />
                      {/* <AuthMenu /> */}
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
