"use client";

import { Josefin_Slab } from "next/font/google";
import { useState } from "react";
import { socialMedias } from "@/data/social-medias";

// const JosefinSlab = Josefin_Slab({ subsets: ["latin"] });

const SocialMedias = () => {
  return (
    <footer
      className={`flex justify-center  py-3 items-center gap-8 mb-5 text-white w-full`}
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
