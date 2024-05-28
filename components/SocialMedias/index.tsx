"use client";

import { Josefin_Slab } from "next/font/google";
import { useState } from "react";
import { socialMedias } from "@/data/social-medias";

const JosefinSlab = Josefin_Slab({ subsets: ["latin"] });

const SocialMedias = () => {
  const [itemHovered, setItemHovered] = useState<string | null>("");

  return (
    <footer
      className={`${JosefinSlab.className} flex justify-center items-center gap-8 text-white fixed bottom-4 w-full`}
    >
      {socialMedias.map((socialMedia) => (
        <div className="flex items-center gap-2" key={socialMedia.name}>
          <a
            href={socialMedia.url}
            target="_blank"
            onMouseEnter={() => setItemHovered(socialMedia.name)}
            onMouseLeave={() => setItemHovered(null)}
            rel="noopener noreferrer"
          >
            {socialMedia.name}
          </a>
          {itemHovered === socialMedia.name && socialMedia.icon}
        </div>
      ))}
    </footer>
  );
};

export default SocialMedias;
