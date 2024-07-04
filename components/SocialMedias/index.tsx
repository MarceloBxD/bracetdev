"use client";

import { socialMedias } from "@/data/social-medias";
import { motion } from "framer-motion";

// const JosefinSlab = Josefin_Slab({ subsets: ["latin"] });

const SocialMedias = () => {
  return (
    <footer
      className={`flex justify-end items-center gap-8 bottom-9 right-4 fixed text-white w-full`}
    >
      {socialMedias.map((socialMedia) => (
        <div className="flex items-center gap-2" key={socialMedia.name}>
          <a href={socialMedia.url} target="_blank" rel="noopener noreferrer">
            {socialMedia.icon}
          </a>
        </div>
      ))}
     
    </footer>
  );
};

export default SocialMedias;
