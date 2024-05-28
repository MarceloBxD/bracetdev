"use client";

import { socialMedias } from "@/data/social-medias";

// const JosefinSlab = Josefin_Slab({ subsets: ["latin"] });

const SocialMedias = () => {
  return (
    <footer
      className={`flex justify-center items-center gap-8 mb-5 text-white w-full`}
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
