"use client";

import { SiteSettings } from "@/constants/settings";
import {
  FaXTwitter,
  FaLinkedin,
  FaGithub,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";
import { motion } from "framer-motion";

const iconMap = {
  FaXTwitter: FaXTwitter,
  FaLinkedin: FaLinkedin,
  FaGithub: FaGithub,
  FaArrowUpRightFromSquare: FaArrowUpRightFromSquare,
};

export default function FollowUs() {
  return (
    <div>
      <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
      <p className="text-gray-300 mb-4">
        Join our community on social platforms to stay updated with CancerCoin’s
        mission and announcements.
      </p>
      <div className="flex gap-4">
        {SiteSettings.socials.map((social, index) => {
          const Icon = iconMap[social.icon as keyof typeof iconMap];
          return (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300"
              aria-label={`Follow CancerCoin on ${social.name}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Icon className="h-6 w-6" />
            </motion.a>
          );
        })}
      </div>
    </div>
  );
}
