"use client";

import { socialMedias } from "@/data/social-medias";
import { motion } from "framer-motion";

// const JosefinSlab = Josefin_Slab({ subsets: ["latin"] });

const SocialMedias = () => {
  return (
    <footer
      className={`flex justify-end items-center gap-8 bottom-4 right-4 fixed text-white w-full`}
    >
      {socialMedias.map((socialMedia) => (
        <div className="flex items-center gap-2" key={socialMedia.name}>
          <a href={socialMedia.url} target="_blank" rel="noopener noreferrer">
            {socialMedia.icon}
          </a>
        </div>
      ))}
      <motion.div
        className="fixed rounded-lg group flex hover:bg-white transition-colors duration-300 items-center border cursor-pointer p-1 z-50 bottom-4 left-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <a
          href="/Cv-MarceloBracet.pdf"
          download="bracet-cv.pdf"
          className="text-white group-hover:text-black font-bold text-sm px-2 py-2 rounded-lg"
        >
          Download CV
        </a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-white group-hover:text-black "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </footer>
  );
};

export default SocialMedias;
